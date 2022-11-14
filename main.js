// Mobile menu
const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.links');
const link = document.querySelectorAll('.link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  links.classList.toggle('show-links');
});

link.forEach((linkItem) => {
  linkItem.addEventListener('click', () => {
    hamburger.classList.remove('active');
    links.classList.remove('show-links');
  });
});