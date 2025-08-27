(function (global) {
  const storageKey = 'sadaqat_lang';
  const defaultLang = 'dari'; // 'dari' یا 'pashto'
  const localesPath = '/locales'; // مسیر نسبت به public؛ در صورت نیاز آن را تغییر دهید

  const state = {
    lang: localStorage.getItem(storageKey) || defaultLang,
    messages: {}
  };

  async function loadMessages(lang) {
    if (state.messages[lang]) return state.messages[lang];
    try {
      const res = await fetch(`${localesPath}/${lang}.json`, {cache: 'no-cache'});
      if (!res.ok) throw new Error('locale load error');
      const json = await res.json();
      state.messages[lang] = json;
      return json;
    } catch (err) {
      console.error('i18n load error', err);
      return {};
    }
  }

  async function setLanguage(lang) {
    state.lang = lang;
    localStorage.setItem(storageKey, lang);
    await loadMessages(lang);
    applyTranslations();
    global.dispatchEvent(new CustomEvent('sadaqat:languageChanged', {detail: {lang}}));
  }

  function t(key) {
    const msgs = state.messages[state.lang] || {};
    return (msgs && msgs[key]) || key;
  }

  function applyTranslations(root = document) {
    const els = root.querySelectorAll('[data-i18n]');
    els.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const txt = t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = txt;
      } else {
        el.textContent = txt;
      }
    });
    // تنظیم مقدار lang در تگ <html> برای دسترس‌پذیری
    document.documentElement.lang = state.lang === 'dari' ? 'fa-AF' : 'ps-AF';
  }

  async function init(options = {}) {
    if (options.defaultLang) state.lang = options.defaultLang;
    if (options.localesPath) { /* برای سادگی اکنون استفاده نمی‌شود */ }
    await loadMessages(state.lang);
    applyTranslations();
    return {lang: state.lang};
  }

  global.i18n = {
    init,
    setLanguage,
    t,
    state,
    applyTranslations
  };
})(window);