const calculate = () => {
  // калькулятор-аккордеон
   const calculatorAcc = () => {
    const accordionCalc = document.querySelector('#accordion'),
      constructBtn = accordionCalc.querySelectorAll('.construct-btn'),
      panelCollapse = accordionCalc.querySelectorAll('.panel-collapse'),
      panelHeader = accordionCalc.querySelectorAll('.panel-heading'),
      collapseOne = accordionCalc.querySelector('#collapseOne'),
      collapseTwo = accordionCalc.querySelector('#collapseTwo'),
      collapseThree = accordionCalc.querySelector('#collapseThree'),
      collapseFour = accordionCalc.querySelector('#collapseFour');

    // кнопка следующий шаг
    const toggleCalc = () => {
      for (let i = 0; i < panelHeader.length; i++) {
        panelHeader[i].addEventListener('click', event => {
          event.preventDefault();
          for (let k = 0; k < panelCollapse.length; k++) {
            panelCollapse[k].classList.remove('in')
          }
          panelCollapse[i].classList.toggle('in');
        });
      };
    };
    toggleCalc();

    const nextStep1 = () => {
      for (let i = 0; i < constructBtn.length; i++) {
        constructBtn[0].addEventListener('click', event => {
          event.preventDefault();
          collapseOne.classList.remove('in')
          collapseTwo.classList.add('in');
        });
      };
    };
    nextStep1();
    const nextStep2 = () => {
      for (let i = 0; i < constructBtn.length; i++) {
        constructBtn[1].addEventListener('click', event => {
          event.preventDefault();
          collapseTwo.classList.remove('in')
          collapseThree.classList.add('in');
        });
      };
    };
    nextStep2();
    const nextStep3 = () => {
      for (let i = 0; i < constructBtn.length; i++) {
        constructBtn[2].addEventListener('click', event => {
          event.preventDefault();
          collapseThree.classList.remove('in')
          collapseFour.classList.add('in');
        });
      };
    };
    nextStep3();
    const nextStep4 = () => {
      for (let i = 0; i < constructBtn.length; i++) {
        constructBtn[3].addEventListener('click', event => {
          event.preventDefault();
          collapseFour.classList.remove('in')
          collapseOne.classList.add('in');
        });
      };
    };
    nextStep4();
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
      quantityRingsSecondValue = parseFloat(quantityRingsSecond.options[quantityRingsSecond.selectedIndex].value);

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
    };
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

      // для подсчета стоимости
      let totalValue = 0;
      let price = 0;
      let septicCounter = 0;
      let firstWellDiameterCounter = 0;
      let firstWellRingsCounter = 0;
      let secondWellDiameterCounter = 0;
      let secondWellRingsCounter = 0;

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
      if (myonoffswitch.checked && myonoffswitchTwo.checked) { // если есть
        septicCounter = 1000;
        bottomAvailability.value = 'yes';
      }
      if (!myonoffswitch.checked && !myonoffswitchTwo.checked) { // если нет
        septicCounter = 0;
        bottomAvailability.value = 'no';
      }
      if (!myonoffswitch.checked && myonoffswitchTwo.checked) { // если есть
        septicCounter = 2000;
        bottomAvailability.value = 'yes';
      }
      // диаметр
      if (diameterValue === 2) {
        firstWellDiameterCounter = Math.ceil((price / 100) * 20);
      }
      // если 2 или 3 кольа
      if (quantityRingsValue === 2) {
        firstWellRingsCounter += Math.ceil((price / 100) * 30);
      } else if (quantityRingsValue === 3) {
        firstWellRingsCounter += Math.ceil((price / 100) * 50);
      }
      if (!myonoffswitch.checked && diameterSecondValue === 2) {
        secondWellDiameterCounter += Math.ceil((price / 100) * 20);
      }
      if (!myonoffswitch.checked && quantityRingsSecondValue === 2) {
        firstWellRingsCounterTwo += Math.ceil((price / 100) * 30);
      } else if (!myonoffswitch.checked && quantityRingsSecondValue === 3) {
        secondWellRingsCounter += Math.ceil((price / 100) * 50);
      }
      // общая цена
      total.value = price + septicCounter + firstWellDiameterCounter + firstWellRingsCounter + secondWellDiameterCounter + secondWellRingsCounter;
    };

    constructBtn[0].addEventListener('click', countSum);

    accordion.addEventListener('change', () => {
      const target = event.target;
      if (target === distance || target === myonoffswitch || target === quantityRings || target === diameter || target === myonoffswitch || target === myonoffswitchTwo || target === diameterSecond || target === quantityRingsSecond) {
        countSum();
      }
    });
    calcBtn.addEventListener('click', () => {
      total.value = '';
    });
  };
  calculateCount();
};

export default calculate;