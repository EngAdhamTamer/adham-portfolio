// ===== Portfolio JS =====
// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Simple fade animation on scroll
const reveal = () => {
  const sections = document.querySelectorAll('section');
  const trigger = window.innerHeight - 100;

  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) sec.style.opacity = 1;
  });
};

window.addEventListener('scroll', reveal);
window.onload = reveal;
