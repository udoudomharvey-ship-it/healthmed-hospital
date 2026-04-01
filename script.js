/* ═══════════════════════════════════════
   HEALTHMED HOSPITAL — SHARED SCRIPTS
═══════════════════════════════════════ */

/* ── Preloader ── */
(function(){
  const loader = document.getElementById('preloader');
  if (!loader) return;
  const fill = document.getElementById('pre-bar');
  const lbl  = document.getElementById('pre-label');
  let p = 0;
  const iv = setInterval(() => {
    p += Math.random() * 22 + 5;
    if (p >= 100) {
      p = 100;
      clearInterval(iv);
      setTimeout(() => loader.classList.add('done'), 250);
    }
    if (fill) fill.style.width = p + '%';
    if (lbl)  lbl.textContent  = Math.floor(p) + '%';
  }, 70);
})();

/* ── Progress bar ── */
const bar = document.getElementById('progress-bar');
function updateProgress() {
  if (!bar) return;
  bar.style.width = Math.min(
    window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100, 100
  ) + '%';
}

/* ── Nav scroll glass ── */
const navbar = document.getElementById('navbar');
function updateNav() {
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
}

/* ── Active nav link (filename match) ── */
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href') || '';
    const match = href.includes(page) || (page === 'index.html' && (href === 'index.html' || href === './'));
    a.classList.toggle('active', match);
  });
}

/* ── Back to top ── */
const backTop = document.getElementById('back-top');
function updateBackTop() {
  if (backTop) backTop.classList.toggle('show', window.scrollY > 500);
}
if (backTop) backTop.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

/* ── Scroll bundle ── */
window.addEventListener('scroll', () => {
  updateProgress(); updateNav(); updateBackTop();
}, { passive: true });
updateNav();

/* ── Intersection Observer ── */
const ro = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    if (entry.target.classList.contains('stagger'))
      [...entry.target.children].forEach((c,i) =>
        setTimeout(() => c.classList.add('visible'), i * 100));
    ro.unobserve(entry.target);
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.stagger')
  .forEach(el => ro.observe(el));

/* ── Hamburger ── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });
}
function closeMobile() {
  if (hamburger) hamburger.classList.remove('open');
  if (mobileMenu) mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Magnetic buttons ── */
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    btn.style.transform = `translate(${(e.clientX-r.left-r.width/2)*0.2}px,${(e.clientY-r.top-r.height/2)*0.2}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
    btn.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)';
    setTimeout(() => { btn.style.transition = ''; }, 500);
  });
});

/* ── 3D logo tilt on hover ── */
const logoMark = document.querySelector('.nav-logo-mark');
if (logoMark) {
  logoMark.addEventListener('mousemove', e => {
    const r = logoMark.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 30;
    const y = ((e.clientY - r.top)  / r.height - 0.5) * -30;
    const img = logoMark.querySelector('img');
    if (img) img.style.transform = `perspective(200px) rotateX(${y}deg) rotateY(${x}deg) scale(1.1)`;
  });
  logoMark.addEventListener('mouseleave', () => {
    const img = logoMark.querySelector('img');
    if (img) img.style.transform = '';
  });
}

/* ── Contact form handler ── */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn    = document.getElementById('submit-btn');
    const status = document.getElementById('form-status');
    btn.textContent = 'Sending...'; btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Appointment Booked ✓';
      btn.style.cssText = 'background:var(--cyan);color:white;font-family:var(--font-body);font-size:0.88rem;font-weight:600;padding:0.8rem 1.8rem;border-radius:var(--radius-sm);cursor:default;border:none;display:inline-flex;align-items:center;';
      if (status) { status.textContent = "We'll contact you within 2 hours."; status.classList.add('show'); }
      contactForm.reset();
      setTimeout(() => {
        btn.textContent = 'Book Appointment'; btn.disabled = false; btn.style.cssText = '';
        if (status) status.classList.remove('show');
      }, 6000);
    }, 1400);
  });
}

setActiveNav();

console.log('%c HealthMed Hospital %c Quality Healthcare · Uyo · RC1505282',
  'background:#d62828;color:white;font-weight:800;padding:4px 8px;border-radius:4px;',
  'color:#888;padding:4px;');
