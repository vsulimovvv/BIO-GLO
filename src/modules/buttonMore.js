const more = () => {
  const addSentenceBtn = document.querySelector('.add-sentence-btn'),
    rowItem = document.querySelectorAll('#row-item');

  addSentenceBtn.addEventListener('click', () => {
    addSentenceBtn.classList.add('hidden');

    rowItem.forEach((item) => {
      if (item.classList.contains('hidden') || item.classList.contains('visible-sm-block')) {
        item.classList.remove('hidden');
        item.classList.remove('visible-sm-block');
      }
    });
  });
};

export default more;