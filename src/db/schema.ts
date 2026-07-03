import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const linkClicks = sqliteTable('link_clicks', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  url: text('url').notNull().unique(),
  clicks: integer('clicks', { mode: 'number' }).notNull().default(0),
  lastClickedAt: integer('last_clicked_at', { mode: 'timestamp' }),
});
