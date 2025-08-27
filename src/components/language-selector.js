(function (global) {
  const css = `
  .sadaqat-lang-bar {
    position: fixed;
    right: 18px;
    bottom: 24px;
    backdrop-filter: blur(8px) saturate(120%);
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 12px;
    padding: 8px 10px;
    display: flex;
    gap: 8px;
    align-items: center;
    z-index: 9999;
    box-shadow: 0 6px 20px rgba(0,0,0,0.35);
    color: #fff;
    font-family: sans-serif;
    transform: translateY(20px);
    opacity: 0;
    transition: all 260ms ease;
  }
  .sadaqat-lang-bar.show {
    transform: translateY(0);
    opacity: 1;
  }
  .sadaqat-lang-label {
    font-size: 13px;
    margin-right: 6px;
    opacity: 0.95;
  }
  .sadaqat-lang-btn {
    background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
    border: 1px solid rgba(255,255,255,0.08);
    color: #fff;
    padding: 6px 10px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 13px;
    transition: transform 140ms ease, background 140ms;
  }
  .sadaqat-lang-btn.active {
    background: rgba(255,255,255,0.16);
    transform: translateY(-2px);
  }
  .sadaqat-lang-close {
    margin-left: 6px;
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.7);
    cursor: pointer;
    font-size: 14px;
  }
  @media (prefers-color-scheme: light) {
    .sadaqat-lang-bar {
      background: rgba(255,255,255,0.7);
      color: #111;
      border-color: rgba(0,0,0,0.06);
    }
  }
  `;

  function injectStyle() {
    if (document.getElementById('sadaqat-lang-style')) return;
    const s = document.createElement('style');
    s.id = 'sadaqat-lang-style';
    s.innerHTML = css;
    document.head.appendChild(s);
  }

  function createBar(options = {}) {
    injectStyle();
    const bar = document.createElement('div');
    bar.className = 'sadaqat-lang-bar';
    const label = document.createElement('div');
    label.className = 'sadaqat-lang-label';
    label.setAttribute('data-i18n', 'choose_language');
    label.textContent = options.i18n && options.i18n.t ? options.i18n.t('choose_language') : 'Choose language';

    const btnDari = document.createElement('button');
    btnDari.className = 'sadaqat-lang-btn';
    btnDari.textContent = options.i18n ? options.i18n.t('dari') : 'Dari';
    btnDari.dataset.lang = 'dari';

    const btnPashto = document.createElement('button');
    btnPashto.className = 'sadaqat-lang-btn';
    btnPashto.textContent = options.i18n ? options.i18n.t('pashto') : 'Pashto';
    btnPashto.dataset.lang = 'pashto';

    const close = document.createElement('button');
    close.className = 'sadaqat-lang-close';
    close.innerHTML = '&times;';

    bar.appendChild(label);
    bar.appendChild(btnDari);
    bar.appendChild(btnPashto);
    bar.appendChild(close);

    function updateActive() {
      const current = (options.i18n && options.i18n.state && options.i18n.state.lang) || localStorage.getItem('sadaqat_lang') || 'dari';
      [btnDari, btnPashto].forEach(b => b.classList.toggle('active', b.dataset.lang === current));
    }

    btnDari.addEventListener('click', async () => {
      await options.i18n.setLanguage('dari');
      updateActive();
    });
    btnPashto.addEventListener('click', async () => {
      await options.i18n.setLanguage('pashto');
      updateActive();
    });
    close.addEventListener('click', () => {
      bar.classList.remove('show');
      setTimeout(() => bar.remove(), 260);
    });

    global.addEventListener('sadaqat:languageChanged', () => {
      if (options.i18n) {
        label.textContent = options.i18n.t('choose_language');
        btnDari.textContent = options.i18n.t('dari');
        btnPashto.textContent = options.i18n.t('pashto');
      }
      updateActive();
    });

    updateActive();

    document.body.appendChild(bar);
    setTimeout(() => bar.classList.add('show'), 20);
    return bar;
  }

  function showWhenOnPage(options = {}) {
    const i18n = window.i18n;
    const shouldShow = () => {
      if (options.selector && document.querySelector(options.selector)) return true;
      if (options.urlContains && location.pathname.includes(options.urlContains)) return true;
      if (options.check && typeof options.check === 'function' && options.check()) return true;
      return false;
    };

    (async () => {
      if (!i18n) {
        console.warn('i18n not found; include src/js/i18n.js before language-selector');
      } else {
        await i18n.init();
      }
      if (shouldShow()) {
        createBar({i18n});
      } else {
        const observer = new MutationObserver(() => {
          if (shouldShow() && !document.querySelector('.sadaqat-lang-bar')) {
            createBar({i18n});
          }
        });
        observer.observe(document.body, {childList: true, subtree: true});
        window.addEventListener('popstate', () => {
          if (shouldShow() && !document.querySelector('.sadaqat-lang-bar')) {
            createBar({i18n});
          }
        });
        window.addEventListener('hashchange', () => {
          if (shouldShow() && !document.querySelector('.sadaqat-lang-bar')) {
            createBar({i18n});
          }
        });
      }
    })();
  }

  global.SadaqatLanguageSelector = {
    showWhenOnPage,
    createBar
  };
})(window);