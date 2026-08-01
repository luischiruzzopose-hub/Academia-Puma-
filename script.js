// ============================================================
// ACADEMIA PUMA — interacciones
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // Año en footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  revealEls.forEach(el => io.observe(el));

  // Línea de ruta — progreso de scroll
  const progress = document.getElementById('routeProgress');
  const updateProgress = () => {
    if (!progress) return;
    const h = document.documentElement;
    const scrolled = h.scrollTop;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (scrolled / max) * 100 : 0;
    progress.style.height = pct + '%';
  };
  document.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  // Header scroll shadow + botón volver arriba
  const fabUp = document.getElementById('fabUp');
  document.addEventListener('scroll', () => {
    if (!fabUp) return;
    if (window.scrollY > 600) fabUp.classList.add('visible');
    else fabUp.classList.remove('visible');
  }, { passive: true });
  if (fabUp) fabUp.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Menú móvil
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav){
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('mobile-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mainNav.classList.remove('mobile-open');
    }));
  }

  // Tabs de planes (G2 / G3)
  const planTabs = document.querySelectorAll('.plan-tab');
  const planPanels = document.querySelectorAll('.plan-panel');
  planTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.plan;
      planTabs.forEach(t => t.classList.remove('active'));
      planPanels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.querySelector(`.plan-panel[data-plan="${target}"]`).classList.add('active');
    });
  });

  // Acordeón FAQ
  document.querySelectorAll('.accordion-item').forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    trigger.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  // Galería + lightbox
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  let currentIndex = 0;
  const images = Array.from(galleryItems).map(el => ({
    src: el.dataset.img,
    alt: el.querySelector('img').alt
  }));

  function openLightbox(index){
    currentIndex = index;
    lightboxImg.src = images[currentIndex].src;
    lightboxImg.alt = images[currentIndex].alt;
    lightbox.classList.add('open');
  }
  function closeLightbox(){ lightbox.classList.remove('open'); }
  function showDelta(delta){
    currentIndex = (currentIndex + delta + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
    lightboxImg.alt = images[currentIndex].alt;
  }

  galleryItems.forEach((item, i) => item.addEventListener('click', () => openLightbox(i)));
  const lbClose = document.getElementById('lightboxClose');
  const lbPrev = document.getElementById('lightboxPrev');
  const lbNext = document.getElementById('lightboxNext');
  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbPrev) lbPrev.addEventListener('click', () => showDelta(-1));
  if (lbNext) lbNext.addEventListener('click', () => showDelta(1));
  if (lightbox) lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showDelta(-1);
    if (e.key === 'ArrowRight') showDelta(1);
  });

});
