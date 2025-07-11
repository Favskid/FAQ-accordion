document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.toggle-btn');
  const answer = item.querySelector('.faq-answer');
  const question = item.querySelector('h2');
  // Ensure default state on load
  answer.style.display = 'none';
  btn.src = './assets/images/icon-plus.svg';
  question.style.color = ''; // Reset color

  btn.addEventListener('click', () => {
    // Close all other answers
    document.querySelectorAll('.faq-item').forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.querySelector('.faq-answer').style.display = 'none';
        otherItem.querySelector('.toggle-btn').src = './assets/images/icon-plus.svg';
        otherItem.querySelector('h2').style.color = ''; // Reset color for other questions
      }
    });

    // Toggle
    const isOpen = answer.style.display === 'block';
    answer.style.display = isOpen ? 'none' : 'block';
    btn.src = isOpen
      ? './assets/images/icon-plus.svg'
      : './assets/images/icon-minus.svg';
    question.style.color = isOpen
      ? ''
      : 'purple';
  });
});