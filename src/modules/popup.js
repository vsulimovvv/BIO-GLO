const popup = () => {

  const allPopap = document.querySelectorAll('.popup'),
    popupCall = document.querySelector('.popup-call'),
    popupDiscount = document.querySelector('.popup-discount'),
    popupCheck = document.querySelector('.popup-check'),
    popupСonsultation = document.querySelector('.popup-consultation'),
    popupСalc = document.querySelector('.popup-calc'),
    callBtns = document.querySelectorAll('.call-btn'),
    calcBtn = document.querySelector('.calc-btn'),
    discountBtns = document.querySelectorAll('.discount-btn'),
    checkBtn = document.querySelector('.check-btn'),
    consultationBtn = document.querySelector('.consultation-btn'),
    phoneUser = document.querySelectorAll('.phone-user'),
    userName = document.querySelectorAll('input[name="user_name"]');

  const reset = () => {
    phoneUser.forEach((item) => {
      item.value = '';
    });
    userName.forEach((item) => {
      item.value = '';
    });
  };

  callBtns.forEach((item) => {
    item.addEventListener('click', () => {
      popupCall.style.display = 'block';
    });
  });
  discountBtns.forEach((item) => {
    item.addEventListener('click', () => {
      popupDiscount.style.display = 'block';
    });
  });
  checkBtn.addEventListener('click', () => {
    popupCheck.style.display = 'block';
  });
  calcBtn.addEventListener('click', () => {
    popupСalc.style.display = 'block';
  });
  consultationBtn.addEventListener('click', () => {
    popupСonsultation.style.display = 'block';
  });

  allPopap.forEach(item => {
    item.addEventListener('click', event => {
      let target = event.target;
      if (target.classList.contains('popup-close')) {
        event.preventDefault();
        item.style.display = "none";
        reset();
      } else {
        target = target.closest('.popup-content');
        if (!target) {
          item.style.display = "none";
          reset();
        }
      }
    });
  });
};

export default popup;