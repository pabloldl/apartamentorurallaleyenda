'use strict';
const toggle = document.querySelector('.index-toggle');
const navigation = document.querySelector('#capitulos');
const mobile = window.matchMedia('(max-width: 650px)');
function setMenu(open) {
  navigation.hidden = mobile.matches && !open;
  toggle.setAttribute('aria-expanded', String(open));
  toggle.innerHTML = `${open ? 'Cerrar' : 'Abrir'} índice <span aria-hidden="true">${open ? '−' : '＋'}</span>`;
}
toggle.hidden = false;
setMenu(false);
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
mobile.addEventListener('change', () => setMenu(false));
navigation.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link) return;
  setMenu(false);
  const destination = document.querySelector(link.hash);
  if (destination) {
    destination.tabIndex = -1;
    destination.focus({ preventScroll: true });
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobile.matches && !navigation.hidden) {
    setMenu(false);
    toggle.focus();
  }
});
document.addEventListener('click', event => {
  if (mobile.matches && !event.target.closest('.index')) setMenu(false);
});
const links = [...navigation.querySelectorAll('a')];
const sections = links.map(link => document.querySelector(link.hash));
const progress = document.querySelector('.reading-track span');
let scheduled = false;
function updateReading() {
  const range = document.documentElement.scrollHeight - window.innerHeight;
  const fraction = range > 0 ? Math.min(1, Math.max(0, window.scrollY / range)) : 0;
  progress.style.transform = `${mobile.matches ? 'scaleX' : 'scaleY'}(${fraction})`;
  let current = null;
  sections.forEach(section => { if (section.getBoundingClientRect().top < window.innerHeight * .42) current = section.id; });
  links.forEach(link => {
    if (link.hash === `#${current}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  scheduled = false;
}
function queueReading() { if (!scheduled) { scheduled = true; requestAnimationFrame(updateReading); } }
window.addEventListener('scroll', queueReading, { passive: true });
window.addEventListener('resize', queueReading);
updateReading();
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-read'); observer.unobserve(entry.target); }
  }), { threshold: .2 });
  document.querySelectorAll('.chapter').forEach(section => observer.observe(section));
}
document.querySelector('#year').textContent = new Date().getFullYear();
