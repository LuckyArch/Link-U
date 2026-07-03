import { html, raw } from 'hono/html';
import { config } from '../../config';

export const Layout = ({ children }: { children: any }) => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${config.seo?.title || config.profile.name + ' | Links'}</title>
      <meta name="description" content="${config.seo?.description || config.profile.bio}" />
      ${config.seo?.keywords ? html`<meta name="keywords" content="${config.seo.keywords.join(', ')}" />` : ''}
      <meta name="author" content="${config.profile.name}" />
      <meta property="og:type" content="profile" />
      <meta property="og:url" content="${config.seo?.url || '#'}" />
      <meta property="og:title" content="${config.seo?.title || config.profile.name}" />
      <meta property="og:description" content="${config.seo?.description || config.profile.bio}" />
      <meta property="og:image" content="${config.seo?.image || config.profile.avatarUrl}" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="${config.seo?.url || '#'}" />
      <meta property="twitter:title" content="${config.seo?.title || config.profile.name}" />
      <meta property="twitter:description" content="${config.seo?.description || config.profile.bio}" />
      <meta property="twitter:image" content="${config.seo?.image || config.profile.avatarUrl}" />
      ${config.seo?.twitterHandle ? html`<meta name="twitter:creator" content="${config.seo.twitterHandle}" />` : ''}
      ${config.seo?.url ? html`<link rel="canonical" href="${config.seo.url}" />` : ''}
      <script type="application/ld+json">
        ${raw(JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "mainEntity": {
            "@type": "Person",
            "name": config.profile.name,
            "description": config.seo?.description || config.profile.bio,
            "image": config.seo?.image || config.profile.avatarUrl,
            "url": config.seo?.url
          }
        }))}
      </script>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
      <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
      
      <script src="https://cdn.tailwindcss.com"></script>
      <script>
        tailwind.config = {
          theme: {
            extend: {
              fontFamily: {
                sans: ['Outfit', 'sans-serif'],
              },
              colors: {
                text: '${raw(config.theme.textColor)}',
                cardText: '${raw(config.theme.cardTextColor)}',
                cardBg: '${raw(config.theme.cardBackground)}',
                btn: '${raw(config.theme.buttonColor)}',
                btnHover: '${raw(config.theme.buttonHoverColor)}',
                btnText: '${raw(config.theme.buttonTextColor)}',
              },
              animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'vibrate': 'vibrate 0.3s linear infinite both',
                'shake': 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
              },
              keyframes: {
                fadeInUp: {
                  '0%': { opacity: '0', transform: 'translateY(20px)' },
                  '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                vibrate: {
                  '0%': { transform: 'translate(0)' },
                  '20%': { transform: 'translate(-2px, 2px)' },
                  '40%': { transform: 'translate(-2px, -2px)' },
                  '60%': { transform: 'translate(2px, 2px)' },
                  '80%': { transform: 'translate(2px, -2px)' },
                  '100%': { transform: 'translate(0)' }
                },
                shake: {
                  '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
                  '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
                  '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
                  '40%, 60%': { transform: 'translate3d(4px, 0, 0)' }
                }
              }
            }
          }
        }
      </script>
      <style>
        body {
          background-image: ${raw(config.theme.backgroundImage)};
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          background-color: #f3f4f6; /* Fallback color */
          min-height: 100vh;
          overflow-x: hidden;
        }
      </style>
    </head>
    <body class="relative flex items-center justify-center py-10 px-6 antialiased selection:bg-gray-900 selection:text-white text-text">
      <div class="fixed inset-0 bg-black/70 z-0 pointer-events-none"></div>

      <main class="w-full max-w-lg mx-auto z-10 relative">
        ${children}
      </main>
    </body>
  </html>
`;
