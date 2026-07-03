import { Hono } from 'hono';
import { logger as honoLogger } from 'hono/logger';
import { config } from '../config';
import { db } from './db';
import { linkClicks } from './db/schema';
import { eq } from 'drizzle-orm';
import { logger } from './lib/logger';
import { Layout } from './components/Layout';
import { Profile } from './components/Profile';

import { serveStatic } from 'hono/bun';

const app = new Hono();

app.use('*', honoLogger((str) => logger.info(str)));
app.use('/public/*', serveStatic({ root: './' }));

app.get('/', (c) => {
  return c.html(
    <Layout>
      <Profile />
    </Layout>
  );
});

app.get('/redirect', async (c) => {
  const url = c.req.query('url');
  
  if (!url) {
    return c.text('URL is required', 400);
  }

  const validLink = config.links.find(l => l.url === url) || config.socials.find(s => s.url === url);
  if (!validLink) {
    return c.text('Invalid URL', 400);
  }

  if (config.features.enableAnalytics) {
    try {
      const existing = await db.select().from(linkClicks).where(eq(linkClicks.url, url)).get();
      if (existing) {
        await db.update(linkClicks)
          .set({ clicks: existing.clicks + 1, lastClickedAt: new Date() })
          .where(eq(linkClicks.id, existing.id));
      } else {
        await db.insert(linkClicks).values({ url, clicks: 1, lastClickedAt: new Date() });
      }
    } catch (e) {
      logger.error({ err: e }, 'Failed to record click');
    }
  }

  return c.redirect(url);
});

export default {
  port: process.env.PORT || 3000,
  fetch: app.fetch,
};

export { app };
