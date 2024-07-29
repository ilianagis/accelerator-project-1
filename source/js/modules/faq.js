document.querySelectorAll('.faq__qna-item').forEach((item) => {
  item.addEventListener('click', () => {
    // проверка является ли элемент активным
    const isActive = item.classList.contains('faq__qna-item--active');
    const svg = item.querySelector('.faq__answer-svg use');

    if (isActive) {
      item.classList.remove('faq__qna-item--active');
      item.querySelector('.faq__answer').classList.remove('faq__answer--active');
      svg.setAttribute('href', '/__spritemap#sprite-faq-plus'); // устанавливает SVG для закрытого состояния
    } else {
      item.classList.add('faq__qna-item--active');
      item.querySelector('.faq__answer').classList.add('faq__answer--active');
      svg.setAttribute('href', '/__spritemap#sprite-faq-minus'); // устанавливает SVG для открытого состояния
    }
  });
});
