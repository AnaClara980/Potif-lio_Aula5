// script.js
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  header.addEventListener('mouseover', () => {
    header.style.backgroundColor = '#ff80ab';
  });
  header.addEventListener('mouseout', () => {
    header.style.backgroundColor = '#ffb6c1';
  });

  const footer = document.querySelector('footer');
  footer.addEventListener('click', () => {
    alert('Você é tão linda quanto esse portfólio! 💕');
  });
});
