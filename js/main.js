(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('pinnacle-theme');
  const theme = saved || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  root.dataset.theme = theme;

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#themeToggle');
    const menu = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    const renderThemeToggle = () => {
      if (!button) return;
      const current = root.dataset.theme;
      button.dataset.theme = current;
      button.setAttribute('aria-label', current === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      button.setAttribute('title', current === 'dark' ? 'Light mode' : 'Dark mode');
      button.innerHTML = `
        <span class="toggle-icon sun-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg></span>
        <span class="toggle-icon moon-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 14.1A8.6 8.6 0 0 1 9.9 3a8.6 8.6 0 1 0 11.1 11.1Z"/></svg></span>
        <span class="toggle-knob" aria-hidden="true"></span>
        <span class="toggle-label">Theme</span>`;
    };

    renderThemeToggle();
    if (button) {
      button.addEventListener('click', () => {
        root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('pinnacle-theme', root.dataset.theme);
        renderThemeToggle();
      });
    }

    if (menu && nav) {
      menu.addEventListener('click', () => {
        nav.classList.toggle('open');
        menu.setAttribute('aria-expanded', nav.classList.contains('open'));
      });
      nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
    }

    /* Scroll reveal */
    const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
    if ('IntersectionObserver' in window && revealEls.length) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(el => io.observe(el));
    } else {
      revealEls.forEach(el => el.classList.add('is-visible'));
    }

    /* Subtle hero parallax on pointer move (desktop only, respects reduced motion) */
    const heroVisual = document.querySelector('.home-hero-visual');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (heroVisual && window.matchMedia('(hover:hover)').matches && !prefersReduced) {
      heroVisual.addEventListener('mousemove', (e) => {
        const rect = heroVisual.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        heroVisual.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
      });
      heroVisual.addEventListener('mouseleave', () => { heroVisual.style.transform = 'translate(0,0)'; });
    }

    /* Our Work portfolio filter */
    const filterChips = document.querySelectorAll('.filter-chip');
    const portfolioItems = document.querySelectorAll('.p-item');
    if (filterChips.length && portfolioItems.length) {
      filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
          filterChips.forEach(c => c.classList.remove('is-active'));
          chip.classList.add('is-active');
          const filter = chip.dataset.filter;
          portfolioItems.forEach(item => {
            const show = filter === 'all' || item.dataset.category === filter;
            item.style.display = show ? '' : 'none';
          });
        });
      });
    }
  });
})();
