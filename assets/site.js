
(function () {
  const cfg = window.ABIDE_CONFIG || {};
  const isPlaceholder = (v) => !v || String(v).startsWith('REPLACE_');
  document.querySelectorAll('[data-menu-button]').forEach(btn => {
    btn.addEventListener('click', () => document.querySelector('[data-nav-links]')?.classList.toggle('open'));
  });
  const year = new Date().getFullYear();
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = year);
  const fill = (attr, value, fallback) => {
    document.querySelectorAll(`[${attr}]`).forEach(el => {
      el.textContent = !isPlaceholder(value) ? value : fallback;
      if (isPlaceholder(value)) el.classList.add('placeholder');
    });
  };
  fill('data-legal-name', cfg.legalName, '[YOUR LEGAL NAME]');
  fill('data-support-email', cfg.supportEmail, '[YOUR SUPPORT EMAIL]');
  fill('data-privacy-email', cfg.privacyEmail, '[YOUR PRIVACY EMAIL]');
  fill('data-governing-law', cfg.governingLaw, '[YOUR STATE / COUNTRY]');
  document.querySelectorAll('[data-support-link]').forEach(el => {
    if (!isPlaceholder(cfg.supportEmail)) el.href = `mailto:${cfg.supportEmail}`;
    else { el.href = '../support/'; }
  });
  document.querySelectorAll('[data-privacy-link]').forEach(el => {
    if (!isPlaceholder(cfg.privacyEmail)) el.href = `mailto:${cfg.privacyEmail}`;
    else { el.href = '../support/'; }
  });
})();
