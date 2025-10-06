const box = document.querySelector('.box');
const info = document.querySelector('.info');

box.addEventListener('mouseenter', () => {
  info.style.width = '200px';
  info.style.opacity = '1';
  box.style.width = '400px';
});

box.addEventListener('mouseleave', () => {
  info.style.width = '0';
  info.style.opacity = '0';
  box.style.width = '200px';
});
