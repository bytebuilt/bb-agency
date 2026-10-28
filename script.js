(() => {
  const progress = document.querySelector('.progress');
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');

  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('open', open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open navigation');
  }));

  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  document.querySelectorAll('[data-package]').forEach(link => {
    link.addEventListener('click', () => {
      const message = document.querySelector('#message');
      const budget = document.querySelector('#budget');
      const packageName = link.dataset.package || '';
      message.value = `I'm interested in: ${packageName}.\n\n`;
      const wantedBudget = link.dataset.budget;
      if (wantedBudget) {
        const option = [...budget.options].find(o => o.textContent.trim() === wantedBudget);
        if (option) budget.value = option.value;
      }
    });
  });
  const videoCta = document.querySelector('[data-video-cta]');
  if (videoCta) videoCta.addEventListener('click', () => {
    document.querySelector('#message').value = "I'm interested in a ByteBuilt Motion video ad.\n\n";
    document.querySelector('#budget').value = 'Video ads €25–€75';
  });

  document.querySelector('#contact-form').addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get('name')?.toString().trim() || '';
    const business = data.get('business')?.toString().trim() || 'Not provided';
    const email = data.get('email')?.toString().trim() || '';
    const budget = data.get('budget')?.toString().trim() || 'Not specified';
    const message = data.get('message')?.toString().trim() || '';
    const subject = encodeURIComponent('New ByteBuilt project request');
    const body = encodeURIComponent(`Name: ${name}\nBusiness: ${business}\nEmail: ${email}\nBudget: ${budget}\n\nProject details:\n${message}`);
    window.location.href = `mailto:bytebuiltweb@gmail.com?subject=${subject}&body=${body}`;
  });
})();
