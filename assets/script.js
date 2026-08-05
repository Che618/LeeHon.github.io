(() => {
  const body = document.body;
  const nav = document.querySelector('[data-nav]');
  const navToggle = document.querySelector('[data-nav-toggle]');
  const themeToggle = document.querySelector('[data-theme-toggle]');

  const storedTheme = localStorage.getItem('lihong-theme');
  if (storedTheme === 'dark') body.classList.add('dark');

  if (window.lucide) window.lucide.createIcons();

  navToggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}"></i>`;
    window.lucide?.createIcons();
  });

  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
    if (navToggle) navToggle.innerHTML = '<i data-lucide="menu"></i>';
    window.lucide?.createIcons();
  }));

  themeToggle?.addEventListener('click', () => {
    const dark = body.classList.toggle('dark');
    localStorage.setItem('lihong-theme', dark ? 'dark' : 'light');
    themeToggle.innerHTML = `<i data-lucide="${dark ? 'moon' : 'sun'}"></i>`;
    themeToggle.setAttribute('aria-label', dark ? '切换浅色主题' : '切换深色主题');
    window.lucide?.createIcons();
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
