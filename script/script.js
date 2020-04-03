const popup = () => {

  const popupCall = document.querySelector('.popup-call'),
    popupDiscount = document.querySelector('.popup-discount'),
    popupCheck = document.querySelector('.popup-check'),
    popupСonsultation = document.querySelector('.popup-consultation'),
    callBtns = document.querySelectorAll('.call-btn'),
    discountBtns = document.querySelectorAll('.discount-btn'),
    checkBtn = document.querySelector('.check-btn'),
    consultationBtn = document.querySelector('.consultation-btn');

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

  consultationBtn.addEventListener('click', () => {
    popupСonsultation.style.display = 'block';
  });

  popupCall.addEventListener('click', (event) => {
    event.preventDefault()
    let target = event.target;
    if (target.classList.contains('popup-close')) {
      popupCall.style.display = "none";
    } else {
      target = target.closest('.popup-content');

      if (!target) {
        popupCall.style.display = "none";
      }
    }
  });

  popupDiscount.addEventListener('click', (event) => {
    event.preventDefault()
    let target = event.target;
    if (target.classList.contains('popup-close')) {
      popupDiscount.style.display = "none";
    } else {
      target = target.closest('.popup-content');
      if (!target) {
        popupDiscount.style.display = "none";
      }
    }
  });

  popupCheck.addEventListener('click', (event) => {
    event.preventDefault()
    let target = event.target;
    if (target.classList.contains('popup-close')) {
      popupCheck.style.display = "none";
    } else {
      target = target.closest('.popup-content');
      if (!target) {
        popupCheck.style.display = "none";
      }
    }
  });

  popupСonsultation.addEventListener('click', (event) => {
    event.preventDefault()
    let target = event.target;
    if (target.classList.contains('popup-close')) {
      popupСonsultation.style.display = "none";
    } else {
      target = target.closest('.popup-content');
      if (!target) {
        popupСonsultation.style.display = "none";
      }
    }
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

// form-valid
const formValid = () => {
  const phoneValid = () => {
    const phoneUser = document.querySelectorAll('.phone-user');
    phoneUser.forEach((item) => {
      item.addEventListener('input', () => {
        item.value = item.value.replace(/[^\d+]/g, '');
      });
    });
  }
  phoneValid();

  // nameValid
  const nameValid = () => {
    const phoneUser = document.querySelectorAll('input[name="user_name"]');
    phoneUser.forEach((item) => {
      item.addEventListener('input', () => {
        item.value = item.value.replace(/[^а-яА-Я]/ig, '');
      });
    });
  }
  nameValid();
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

// calculator // аккардион
const calculatorAcc = () => {
  const accordionCalc = document.querySelector('#accordion'),
    constructBtn = accordionCalc.querySelectorAll('.construct-btn'),
    panelCollapse = accordionCalc.querySelectorAll('.panel-collapse'),
    panelHeading = accordionCalc.querySelectorAll('.panel-heading');

  const toggleCalc = () => {
    for (let i = 0; i < panelHeading.length; i++) {
      panelHeading[i].onclick = function (event) {
        event.preventDefault();
        for (let k = 0; k < panelCollapse.length; k++) {
          panelCollapse[k].classList.remove('in')
        }
        panelCollapse[i].classList.toggle('in');
      };
    }
  }
  toggleCalc();

  const nextStep = () => {

    constructBtn.forEach(item => {
      item.addEventListener('click', event => {
        event.target.closest('.panel-collapse').classList.remove('in');
      });
    });
  }
  nextStep();

  const checked = () => {
    const well = document.getElementById('well');
    well.style.display = 'none';
    const myonoffswitch = document.getElementById('myonoffswitch');
    myonoffswitch.addEventListener('change', () => {
      if (myonoffswitch && myonoffswitch.checked) {
        well.style.display = 'none';
      } else if (!myonoffswitch.checked) {
        well.style.display = 'inline-block';
      }
    });
  }
  checked();
};

calculatorAcc();

// считалка
const calculate = () => {
  const accordion = document.querySelector('#accordion'),
    total = document.querySelector('#calc-result'),
    quantityRings = document.querySelector('#quantity-rings'), // количество колец
    quantityRingsSecond = document.querySelector('#quantity-rings-two'), // количество колец
    diameter = document.querySelector('#diameter'), // диаметр
    diameterSecond = document.getElementById('diameter-two'), // диаметр
    myonoffswitchTwo = document.querySelector('#myonoffswitch-two'), // есть/нет
    myonoffswitch = document.querySelector('#myonoffswitch'), // есть/нет
    distance = document.querySelector('#distance'); // расстояние в метрах

  const countSum = () => {
    let diameterValue = parseFloat(diameter.options[diameter.selectedIndex].value);
    let diameterSecondValue = parseFloat(diameterSecond.options[diameterSecond.selectedIndex].value);
    let quantityRingsValue = parseFloat(quantityRings.options[quantityRings.selectedIndex].value);
    let quantityRingsSecondValue = parseFloat(quantityRingsSecond.options[quantityRingsSecond.selectedIndex].value);
    let price = 0;
    let totalValue = price;

    // тип септика 
    if (myonoffswitch.checked) { //одно
      price = 10000;
    }
    if (!myonoffswitch.checked) { // двух
      price = 15000;
    }

     // наличие днища
     if (myonoffswitchTwo.checked) { // если есть
      totalValue += 1000;
    } else { // если нет
      totalValue += 2000;
    }

    // диаметр
    if (diameterValue === 2) {
      totalValue += (totalValue / 10) * 20;
    }
    // если 2 или 3 кольа
    if (quantityRingsValue === 2) {
      totalValue += (totalValue / 10) * 30;
    } else if (quantityRingsValue === 3) {
      totalValue += (totalValue / 10) * 50;
    }

    // если двух
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
  // countSum();

  accordion.addEventListener('change', () => {
    const target = event.target;
    if (target === distance || target === myonoffswitch || target === distance || target === quantityRings || target === diameter || target === myonoffswitch || target === myonoffswitchTwo || target === diameterSecond || target === quantityRingsSecond) {
      countSum();
    }
  })

}
calculate();

// send Ajax form - рабочая
// const sendForm = () => {

//   const errorMessage = 'Что то пошло не так...',
//     loadMessage = 'Загрузка...',
//     successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

//   const form = document.querySelectorAll('form');

//   const statusMessage = document.createElement('div');
//   statusMessage.style.cssText = 'font-size: 2rem;';

//   form.forEach((item) => {

//     item.addEventListener('submit', (event) => {

//       event.preventDefault();

//       item.appendChild(statusMessage);
//       statusMessage.textContent = loadMessage;

//       const removeMessage = () => {
//         statusMessage.textContent = '';
//       }

//       const formData = new FormData(item);
//       let body = {};
//       formData.forEach((val, key) => {
//         body[key] = val;
//       });
//       postData(body)
//         .then((response) => {
//           if (response.status !== 200) {
//             throw new Error('status network not 200');
//           }
//           console.log(response);
//           statusMessage.textContent = successMessage;
//           setTimeout(removeMessage, 5000);
//         })
//         .catch(() => {
//           statusMessage.textContent = errorMessage;
//           setTimeout(removeMessage, 5000);
//         });
//       item.reset();
//     });

//     const postData = (body) => {
//       return fetch('./server.php', {
//         method: 'POST',
//         headers: {
//           'Content-type': 'application/json'
//         },
//         body: JSON.stringify(body)
//       });
//     }
//   });
// };

// sendForm();

const sendForm = () => {

  const errorMessage = 'Что то пошло не так...',
    loadMessage = 'Загрузка...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

  const form = document.querySelectorAll('form');
  console.log(form);

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem;';


  form.forEach((item) => {

    item.addEventListener('submit', (event) => {

      event.preventDefault();
      console.log(event.target)

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
          console.log(response);
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