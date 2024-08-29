// vika
const faqItems = document.querySelectorAll('.faq__item');
faqItems.forEach((item) => {
  const question = item.querySelector('.faq__question');
  const answer = item.querySelector('.faq__answer');
  question.addEventListener('click', () => {
    item.classList.toggle('open');
    answer.classList.toggle('show'); 
  });
});