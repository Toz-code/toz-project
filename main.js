document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';

  document.documentElement.setAttribute('data-theme', currentTheme);
  updateButtonText(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const now = document.documentElement.getAttribute('data-theme');
      const next = now === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateButtonText(next);
    });
  }

  function updateButtonText(theme) {
    if (!themeToggle) return;
    themeToggle.textContent = theme === 'dark' ? '라이트 모드' : '다크 모드';
  }

  const path = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('nav a');
  links.forEach((link) => {
    const target = link.getAttribute('href');
    if (target === path || (path === '' && target === 'index.html')) {
      link.classList.add('active');
    }
  });

  const adUnits = document.querySelectorAll('.adsbygoogle');
  adUnits.forEach(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (_) {
      // Ignore when ad blockers disable the script.
    }
  });
});
