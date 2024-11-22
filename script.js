// JavaScript for gallery hover animation
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('mouseover', () => {
    item.classList.add('hovered');
  });

  item.addEventListener('mouseout', () => {
    item.classList.remove('hovered');
  });
});
