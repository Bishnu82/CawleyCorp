const menu = document.querySelector('.menu');
const links = document.querySelector('.nav-links');
if (menu) {
  menu.addEventListener('click', () => links.classList.toggle('open'));
}
document.querySelectorAll('form').forEach(
    form => form.addEventListener('submit', e => {
      e.preventDefault();
      const button = form.querySelector('button');
      button.textContent = 'Message sent ✓';
      button.style.background = '#2d8a63';
      form.reset();
    }));
