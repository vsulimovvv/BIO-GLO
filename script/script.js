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

popup();

// button more
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
more();

// валидация форм
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
}
formValid();

// accordion (question)
const accordion = () => {
  const accordionTwo = document.querySelector('#accordion-two'),
    panels = accordionTwo.querySelectorAll('.panel'),
    accButtons = document.querySelectorAll('[data-parent="#accordion-two"]'),
    panelCollapse = accordionTwo.querySelectorAll('.panel-collapse'),
    panelHeading = accordionTwo.querySelectorAll('.panel-heading');

  for (let i = 0; i < panelHeading.length; i++) {
    panelHeading[i].onclick = function (event) {
      event.preventDefault();
      for (let k = 0; k < panels.length; k++) {
        panelCollapse[k].classList.remove('in');
      }
      panelCollapse[i].classList.toggle('in');
    };
  }
};
accordion();

// Весь калькулятор 
const calculate = () => {
  // калькулятор-аккордеон
  const calculatorAcc = () => {
    const accordionCalc = document.querySelector('#accordion'),
      constructBtn = accordionCalc.querySelectorAll('.construct-btn'),
      panelCollapse = accordionCalc.querySelectorAll('.panel-collapse'),
      panelHeader = accordionCalc.querySelectorAll('.panel-heading'),
      panelBody = accordionCalc.querySelectorAll('.panel-body'),
      collapseOne = accordionCalc.querySelector('#collapseOne'),
      collapseTwo = accordionCalc.querySelector('#collapseTwo'),
      collapseThree = accordionCalc.querySelector('#collapseThree'),
      collapseFour = accordionCalc.querySelector('#collapseFour');

    // кнопка следующий шаг, нужно переделать
    const nextStep1 = () => {
      for (let i = 0; i < constructBtn.length; i++) {
        constructBtn[0].onclick = function () {
          collapseOne.classList.remove('in');
          collapseTwo.classList.add('in');
        };
      };
    }
    nextStep1();

    const nextStep2 = () => {
      for (let i = 0; i < constructBtn.length; i++) {
        constructBtn[1].onclick = function () {
          collapseTwo.classList.remove('in');
          collapseThree.classList.add('in');
        };
      };
    }
    nextStep2();

    const nextStep3 = () => {
      for (let i = 0; i < constructBtn.length; i++) {
        constructBtn[2].onclick = function () {
          collapseThree.classList.remove('in');
          collapseFour.classList.add('in');
        };
      };
    }
    nextStep3();

    const nextStep4 = () => {
      for (let i = 0; i < constructBtn.length; i++) {
        constructBtn[3].onclick = function () {
          collapseFour.classList.remove('in');
          collapseOne.classList.add('in');
        };
      };
    }
    nextStep4();

    // аккордеон кальулятор
    const toggleCalc = () => {
      for (let i = 0; i < panelHeader.length; i++) {
        panelHeader[i].onclick = function (event) {
          event.preventDefault();
          for (let k = 0; k < panelCollapse.length; k++) {
            panelCollapse[k].classList.remove('in')
          }
          panelCollapse[i].classList.toggle('in');
        };
      }
    }
    toggleCalc();
  };

  calculatorAcc();

  // подсчет то, что выбирает пользователь
  const calculateCount = () => {

    const constructBtn = document.querySelectorAll('.construct-btn'),
      accordion = document.querySelector('#accordion'),
      total = document.querySelector('#calc-result'),
      quantityRings = document.querySelector('#quantity-rings'), // количество колец
      quantityRingsSecond = document.querySelector('#quantity-rings-second'), // количество колец
      diameter = document.querySelector('#diameter'), // диаметр
      diameterSecond = document.getElementById('diameter-second'), // диаметр
      myonoffswitchTwo = document.querySelector('#myonoffswitch-two'), // есть/нет
      myonoffswitch = document.querySelector('#myonoffswitch'), // есть/нет
      distance = document.querySelector('#distance'), // расстояние в метрах
      calcBtn = document.querySelector('.calc-btn'),
      well = document.getElementById('well');

    let diameterValue = parseFloat(diameter.options[diameter.selectedIndex].value),
      diameterSecondValue = parseFloat(diameterSecond.options[diameterSecond.selectedIndex].value),
      quantityRingsValue = parseFloat(quantityRings.options[quantityRings.selectedIndex].value),
      quantityRingsSecondValue = parseFloat(quantityRingsSecond.options[quantityRingsSecond.selectedIndex].value),
      price = 0,
      totalValue = price;

    let diameterOneNew = document.querySelector('#diameter-one');
    let diameterTwoNew = document.querySelector('#diameter-two');
    let quantityRingsOneNew = document.querySelector('#quantity-rings-one');
    let quantityRingsTwoNew = document.querySelector('#quantity-rings-two');
    let typeOfSeptic = document.querySelector('#type_of_septic');
    let bottomAvailability = document.querySelector('#bottom-availability');
    let space = document.querySelector('#space');
    let result = document.querySelector('#result');

    // одно или двух камерный септик
    const checkedWell = () => {
      well.style.display = 'none';
      myonoffswitch.addEventListener('change', () => {
        if (myonoffswitch && myonoffswitch.checked) {
          well.style.display = 'none';
        } else if (!myonoffswitch.checked) {
          well.style.display = 'inline-block';
        }
      });
    }
    checkedWell();

    // считает сумму (в ней все парамтры)
    const countSum = () => {
      // переприсвоение всем let
      diameterValue = parseFloat(diameter.options[diameter.selectedIndex].value);
      diameterSecondValue = parseFloat(diameterSecond.options[diameterSecond.selectedIndex].value);
      quantityRingsValue = parseFloat(quantityRings.options[quantityRings.selectedIndex].value);
      quantityRingsSecondValue = parseFloat(quantityRingsSecond.options[quantityRingsSecond.selectedIndex].value);
      diameterOneNew.value = diameterValue;
      quantityRingsOneNew.value = quantityRingsValue;
      diameterTwoNew.value = 'no';
      quantityRingsTwoNew.value = 'no';
      space.value = distance.value;
      result.value = total.value;

      // тип септика 
      if (myonoffswitch.checked) { //одно
        price = 10000;
        typeOfSeptic.value = 1;
      }
      if (!myonoffswitch.checked) { // двух
        price = 15000;
        typeOfSeptic.value = 2;
        diameterTwoNew.value = diameterSecondValue;
        quantityRingsTwoNew.value = quantityRingsSecondValue;
      }
      // наличие днища
      if (myonoffswitchTwo.checked) { // если есть
        totalValue += 1000;
        bottomAvailability.value = 'yes';
      } else { // если нет
        totalValue += 2000;
        bottomAvailability.value = 'no';
      }
      // диаметр
      if (diameterValue && diameterValue === 2) {
        totalValue += (totalValue / 10) * 20;
      }
      // если 2 или 3 кольа
      if (quantityRingsValue && quantityRingsValue === 2) {
        totalValue += (totalValue / 10) * 30;
      } else if (quantityRingsValue === 3) {
        totalValue += (totalValue / 10) * 50;
      }
      if (!myonoffswitch.checked && diameterSecondValue === 2) {
        totalValue += (totalValue / 100) * 20;
      }
      if (!myonoffswitch.checked && quantityRingsSecondValue === 2) {
        totalValue += (totalValue / 100) * 30;
      } else if (!myonoffswitch.checked && quantityRingsSecondValue === 3) {
        totalValue += (totalValue / 100) * 50;
      }
      // общая цена
      total.value = totalValue + price;
    }

    constructBtn[0].addEventListener('click', countSum);
    // constructBtn.forEach((item) => {
    //   item.addEventListener('click', countSum);
    // });
    accordion.addEventListener('change', () => {
      const target = event.target;
      if (target === distance || target === myonoffswitch || target === quantityRings || target === diameter || target === myonoffswitch || target === myonoffswitchTwo || target === diameterSecond || target === quantityRingsSecond) {
        countSum();
      }
    });
    calcBtn.addEventListener('click', () => {
      total.value = '';
    });
  }
  calculateCount();

  // функцмя отправки данных калькулятора
  const sendFormCalc = () => {

    const errorMessage = 'Что то пошло не так...',
      loadMessage = 'Загрузка...',
      successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const form = document.querySelector('.calc');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;';

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      form.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;

      const removeMessage = () => {
        statusMessage.textContent = '';
      }

      const formData = new FormData(form);
      let body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });
      postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('status network not 200');
          }
          statusMessage.textContent = successMessage;
          setTimeout(removeMessage, 5000);
        })
        .catch(() => {
          statusMessage.textContent = errorMessage;
          setTimeout(removeMessage, 5000);
        });
      form.reset();
    });

    const postData = (body) => {
      return fetch('./server.php', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
      });
    }
  };
  sendFormCalc();
};
calculate();

// отправка форм
const sendFormQuestion = () => {
  const errorMessage = 'Что то пошло не так...',
    loadMessage = 'Загрузка...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

  const form = document.querySelector('#myform');

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem;';

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    form.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;

    const removeMessage = () => {
      statusMessage.textContent = '';
    }

    const formData = new FormData(form);
    let body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });
    postData(body)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('status network not 200');
        }
        statusMessage.textContent = successMessage;
        setTimeout(removeMessage, 5000);
      })
      .catch(() => {
        statusMessage.textContent = errorMessage;
        setTimeout(removeMessage, 5000);
      });
    form.reset();
  });

  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  }
};
sendFormQuestion();

const sendForm = () => {

  const errorMessage = 'Что то пошло не так...',
    loadMessage = 'Загрузка...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

  const form = document.querySelectorAll('.send');

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem;';

  form.forEach((item) => {

    item.addEventListener('submit', (event) => {
      event.preventDefault();

      item.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;

      const removeMessage = () => {
        statusMessage.textContent = '';
      }

      const formData = new FormData(item);
      let body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });
      postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('status network not 200');
          }
          statusMessage.textContent = successMessage;
          setTimeout(removeMessage, 5000);
        })
        .catch(() => {
          statusMessage.textContent = errorMessage;
          setTimeout(removeMessage, 5000);
        });
      item.reset();
    });

    const postData = (body) => {
      return fetch('./server.php', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
      });
    }
  });
};

sendForm();