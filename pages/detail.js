// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.style.opacity = '1'; });
}, { threshold: 0.1 });
document.querySelectorAll('.notice-step, .prereq-card, .trouble-card, .detail-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Topbar scroll shadow
window.addEventListener('scroll', () => {
  document.querySelector('.topbar').style.boxShadow =
    window.scrollY > 30 ? '0 4px 30px rgba(0,0,0,0.6)' : 'none';
});
