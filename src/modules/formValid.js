const formValid = () => {
  const phoneUser = document.querySelectorAll('.phone-user');
  const nameUser = document.querySelectorAll('input[name="user_name"]');

  phoneUser.forEach((item) => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/[^\d+]/g, '');
    });
  });
  nameUser.forEach((item) => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/[^а-яА-Я]/ig, '');
    });
  });
};

export default formValid;