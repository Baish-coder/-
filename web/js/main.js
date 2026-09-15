// ============ 灯箱 ============
(function () {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  if (!lightbox || !lightboxImg) return;

  document.querySelectorAll('.photo').forEach(function (img) {
    img.addEventListener('click', function () {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
  });

  function close() {
    lightbox.classList.remove('show');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox || e.target === lightboxClose) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();

// ============ 导航高亮 ============
(function () {
  const sections = document.querySelectorAll('.section[id], section[id]');
  const navLinks = document.querySelectorAll('.nav a');
  if (!sections.length || !navLinks.length) return;

  const map = {};
  navLinks.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });

  function onScroll() {
    let current = '';
    sections.forEach(function (s) {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
