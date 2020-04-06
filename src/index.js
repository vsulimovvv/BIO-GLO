'use strict';

import popup from './modules/popup';
import more from './modules/buttonMore';
import formValid from './modules/formValid';
import accordeon from './modules/accordeon';
import calculate from './modules/calc';
import sendAllForm from './modules/sendAjaxForm';

// allPopup
popup();
// button more
more();
// валидация форм
formValid();
// accordion (question)
accordeon();
// Весь калькулятор 
calculate();
// отправка форм
sendAllForm();