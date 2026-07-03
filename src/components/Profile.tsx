import { config } from '../../config';
import { html, raw } from 'hono/html';

export const Profile = () => {

  const getHoverClass = () => {
    switch (config.theme.buttonHoverAnimation) {
      case 'scale': return 'hover:scale-[1.03] hover:-translate-y-0.5';
      case 'lift': return 'hover:-translate-y-1.5 hover:shadow-xl';
      case 'glow': return 'hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] border-transparent';
      case 'shake': return 'hover:animate-shake';
      case 'tilt': return 'hover:scale-[1.03] hover:-rotate-1';
      default: return '';
    }
  };

  const getVibrateClass = () => {
    return config.theme.buttonHoverVibrate ? 'hover:animate-vibrate' : '';
  };

  return (
    <div class="w-full">
      <div class="flex flex-col items-center justify-center w-full space-y-8 animate-fade-in-up">
        {/* Profile Card */}
        <div class="bg-cardBg backdrop-blur-xl border border-white/40 w-full rounded-[2rem] p-8 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">

          {/* Subtle dot pattern inside card */}
          <div class="absolute inset-0 opacity-[0.03] pointer-events-none" style="background-image: radial-gradient(#000 1.5px, transparent 1.5px); background-size: 16px 16px;"></div>

          <div class="relative group mt-2 flex justify-center items-center">
            <div class="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
            <img
              src={config.profile.avatarUrl}
              alt={config.profile.name}
              class="relative w-28 h-28 rounded-full object-cover border-[3px] border-black shadow-xl z-10"
            />

            {/* Custom Avatar Frame ala RPG */}
            {config.profile.avatarFrameUrl ? html`
            <img 
              src="${config.profile.avatarFrameUrl}" 
              alt="Avatar Frame" 
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220%] h-[220%] max-w-none pointer-events-none z-20 object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 mix-blend-screen"
            />
          ` : ''}
          </div>

          <h1 class="mt-6 text-3xl font-bold tracking-tight text-cardText relative z-10 flex items-center justify-center gap-1.5">
            {config.profile.name}
            {config.profile.isVerified && (
              <i class='bx bxs-badge-check text-blue-500 text-[26px] mt-1' title="Verified"></i>
            )}
          </h1>
          <p class="mt-3 text-[15px] font-medium leading-relaxed opacity-75 max-w-[280px] text-cardText relative z-10">{config.profile.bio}</p>

          {/* Social Icons inside the profile card */}
          {config.socials && config.socials.length > 0 && (
            <div class="flex items-center space-x-5 mt-8 pt-6 border-t border-gray-300/40 w-full justify-center flex-wrap gap-y-4 relative z-10">
              {config.socials.map((social) => {
                const getSocialColor = (platform: string | undefined) => {
                  switch (platform) {
                    case 'twitter': return 'hover:text-[#1DA1F2]';
                    case 'instagram': return 'hover:text-[#E1306C]';
                    case 'linkedin': return 'hover:text-[#0A66C2]';
                    case 'youtube': return 'hover:text-[#FF0000]';
                    case 'facebook': return 'hover:text-[#1877F2]';
                    case 'tiktok': return 'hover:text-[#000000] dark:hover:text-white';
                    default: return '';
                  }
                };

                const renderIcon = () => {
                  if (social.iconClass) {
                    return <i class={`${social.iconClass} text-[24px]`}></i>;
                  }
                  if (social.iconUrl) {
                    return <img src={social.iconUrl} alt="social icon" class="w-[22px] h-[22px] object-cover rounded-sm" />;
                  }
                  
                  switch (social.platform) {
                    case 'github':
                      return <svg class="w-[22px] h-[22px] fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>;
                    case 'twitter':
                      return <svg class="w-[22px] h-[22px] fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>;
                    case 'instagram':
                      return <svg class="w-[22px] h-[22px] fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>;
                    case 'linkedin':
                      return <svg class="w-[22px] h-[22px] fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
                    case 'youtube':
                      return <svg class="w-[22px] h-[22px] fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>;
                    case 'facebook':
                      return <svg class="w-[22px] h-[22px] fill-current" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>;
                    case 'tiktok':
                      return <svg class="w-[22px] h-[22px] fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.12-.51 4.24-1.64 6.09-1.87 3.05-5.22 5.1-8.66 5.2-3.87.16-7.85-1.55-9.82-4.98-1.58-2.75-1.46-6.19.2-8.83 1.9-3.02 5.3-4.87 8.8-4.94v4.09c-1.87.16-3.8 1.05-4.85 2.6-1.04 1.53-1.03 3.5.06 5.05 1.15 1.59 3.2 2.37 5.09 2.05 1.67-.26 3.1-1.31 3.79-2.82.54-1.16.65-2.48.65-3.76V0h2.4z"/></svg>;
                    case 'email':
                      return <svg class="w-[22px] h-[22px] fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>;
                    default:
                      // Jika tidak dikenali tapi ada URL, render icon default link
                      return <svg class="w-[22px] h-[22px] fill-current" viewBox="0 0 24 24"><path d="M12.2 6.4c-2.4 0-4.4 2-4.4 4.4 0 2.4 2 4.4 4.4 4.4h3.6v-2.2h-3.6c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2h3.6v-2.2h-3.6zm5.8 4.4c0-2.4-2-4.4-4.4-4.4h-3.6v2.2h3.6c1.2 0 2.2 1 2.2 2.2s-1 2.2-2.2 2.2h-3.6v2.2h3.6c2.4 0 4.4-2 4.4-4.4zm-10.2.7h8v-1.4h-8v1.4z"/></svg>;
                  }
                };

                return (
                  <a href={social.url} target="_blank" rel="noopener noreferrer" class={`text-cardText opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300 flex items-center justify-center ${getSocialColor(social.platform)}`}>
                    {renderIcon()}
                  </a>
                );
              })}
            </div>
          )}
        </div>

        <div class="flex flex-col w-full space-y-4 pt-2">
          {config.links.map((link, index) => {
            const hasPopup = !!link.addPopupAfterClickingButton;
            const buttonPadding = (link.icon || link.iconClass) ? 'p-1 pr-5' : 'px-5 py-[16px]';
            const classNames = `bg-btn text-btnText hover:bg-btnHover border border-black/5 flex items-center justify-between w-full ${buttonPadding} rounded-[1.25rem] font-semibold relative overflow-hidden group transition-all duration-300 min-h-[75px] ${getHoverClass()} ${hasPopup ? 'js-popup-btn' : ''}`;

            return html`
          <div style="animation: fadeInUp 0.5s ease-out ${index * 0.1 + 0.3}s both;" class="w-full">
            <div class="${getVibrateClass()} w-full">
              <a
                href="${hasPopup ? '#' : `/redirect?url=${encodeURIComponent(link.url)}`}"
                data-index="${index}"
                ${!hasPopup ? 'target="_blank" rel="noopener noreferrer"' : ''}
                class="${classNames}"
              >
                <!-- Subtle diagonal line pattern inside button -->
                <div class="absolute inset-0 opacity-[0.02] pointer-events-none" style="background-image: repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%); background-size: 10px 10px;"></div>
                
                <div class="flex items-center space-x-3 relative z-10 w-full">
                  ${link.icon || link.iconClass ? html`
                    <div class="flex-shrink-0 flex items-center justify-center w-[52px] h-[52px] rounded-lg bg-black/5 shadow-sm p-1">
                      ${link.iconClass
                        ? html`<i class="${link.iconClass} text-[32px]"></i>`
                        : html`<img src="${link.icon}" alt="${link.title} icon" class="w-full h-full aspect-square object-cover rounded-md" />`
                      }
                    </div>
                  ` : ''}
                  <span class="truncate pr-2">${link.title}</span>
                </div>
                
                <svg class="w-5 h-5 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 relative z-10 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                
              </a>
            </div>
          </div>
          
          ${hasPopup ? html`
            <template id="popup-content-${index}">
              ${raw(link.addPopupAfterClickingButton || '')}
            </template>
          ` : ''}
          `;
          })}
        </div>

        {config.footer?.show !== false && (
          <div class="pt-8 pb-4 text-center text-[13px] text-white opacity-80 font-medium">
            <a href={config.footer?.url || 'https://github.com/honojs/hono'} target="_blank" class="hover:underline hover:opacity-100 transition-opacity">
              {config.footer?.text || 'Built with Hono'}
            </a>
          </div>
        )}
      </div>

      {html`
      <div id="custom-modal" class="fixed inset-0 z-50 flex items-center justify-center hidden opacity-0 transition-opacity duration-300">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm modal-backdrop cursor-pointer"></div>
        <div class="relative bg-white text-gray-900 rounded-3xl w-full max-w-md mx-4 p-8 shadow-2xl transform scale-95 transition-transform duration-300" id="modal-content-container">
          <button class="absolute top-4 right-4 text-gray-400 hover:text-gray-800 modal-close-btn bg-gray-100 rounded-full p-1 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          <div id="modal-body" class="mt-2"></div>
        </div>
      </div>
      
      <script>
        document.addEventListener('DOMContentLoaded', () => {
          const popupBtns = document.querySelectorAll('.js-popup-btn');
          const modal = document.getElementById('custom-modal');
          const modalBody = document.getElementById('modal-body');
          const modalContentContainer = document.getElementById('modal-content-container');
          const closeBtns = document.querySelectorAll('.modal-close-btn, .modal-backdrop');

          popupBtns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
              e.preventDefault(); 
              const index = btn.getAttribute('data-index');
              const template = document.getElementById('popup-content-' + index);
              
              if (template) {
                modalBody.innerHTML = template.innerHTML;
                
                modal.classList.remove('hidden');
                setTimeout(() => {
                  modal.classList.remove('opacity-0');
                  modalContentContainer.classList.remove('scale-95');
                }, 10);
              }
            });
          });

          const closeModal = () => {
            modal.classList.add('opacity-0');
            modalContentContainer.classList.add('scale-95');
            setTimeout(() => {
              modal.classList.add('hidden');
              modalBody.innerHTML = '';
            }, 300); 
          };

          closeBtns.forEach(btn => {
            btn.addEventListener('click', closeModal);
          });
        });
      </script>
      `}
    </div>
  );
};
