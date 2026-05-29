// ── Shared navigation script ──
(function () {
  // Active link by filename
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // Scroll shadow
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', scrollY > 40));

  // Mobile menu
  window.toggleMenu = function () {
    document.getElementById('mobileMenu').classList.toggle('open');
  };
  window.closeMenu = function () {
    document.getElementById('mobileMenu').classList.remove('open');
  };
  document.addEventListener('click', e => {
    const m = document.getElementById('mobileMenu');
    const b = document.getElementById('burger');
    if (m && !m.contains(e.target) && b && !b.contains(e.target)) m.classList.remove('open');
  });

  // Fade-in on scroll
  const obs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('visible');
        en.target.querySelectorAll('.skill-bar-fill').forEach(b => {
          b.style.width = b.dataset.width + '%';
        });
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

  // Contact form feedback
  window.handleSubmit = function (e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Message envoyé !';
    btn.style.background = '#2ECC71'; btn.disabled = true;
    setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; btn.disabled = false; e.target.reset(); }, 3500);
  };
})();
