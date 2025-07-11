document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.toggle-btn');
  const answer = item.querySelector('.faq-answer');
  // Ensure default state on load
  answer.style.display = 'none';
  btn.src = './assets/images/icon-plus.svg';

  btn.addEventListener('click', () => {
    const isOpen = answer.style.display === 'block';
    answer.style.display = isOpen ? 'none' : 'block';
    btn.src = isOpen
      ? './assets/images/icon-plus.svg'
      : './assets/images/icon-minus.svg';
  });
});