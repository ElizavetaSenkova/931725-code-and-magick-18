'use strict';

// conclusion-and-create-wizard-list
var WIZARD_NUMBERS = 4;

var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardList = [];
// conclusion-and-create-wizard-list

// change-wizard-click
var WIZARD_BALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var inputName = setup.querySelector('.setup-user-name');
var wizardWrap = document.querySelector('.setup-wizard-appearance');
var wizardEyes = wizardWrap.querySelector('.wizard-eyes');
var wizardCoat = wizardWrap.querySelector('.wizard-coat');
var wizardBall = document.querySelector('.setup-fireball-wrap');

var ESCAPE_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var EscapePressHandler = function (evt) {
  if (evt.keyCode === ESCAPE_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', EscapePressHandler);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', EscapePressHandler);
};
// change-wizard-click

// conclusion-and-create-wizard-list
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
	.content
	.querySelector('.setup-similar-item');

function createWizards() {

  return {
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)],
    coatColor: WIZARD_COATS[Math.floor(Math.random() * WIZARD_COATS.length)],
    eyesColor: WIZARD_EYES[Math.floor(Math.random() * WIZARD_EYES.length)],
  };
}

function createWizardsList() {

  for (var i = 0; i < WIZARD_NUMBERS; i++) {
    var wizard = createWizards();

    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    similarListElement.appendChild(wizardElement);

    wizardList.push(wizard);
  }

}

createWizardsList();
// conclusion-and-create-wizard-list

// change-wizard-click
setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

inputName.addEventListener('focus', function () {
  document.removeEventListener('keydown', EscapePressHandler);
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

wizardCoat.addEventListener('click', function () {
  var colorCoats = WIZARD_COATS[Math.floor(Math.random() * WIZARD_COATS.length)];

  wizardCoat.style.fill = colorCoats;
  wizardWrap.querySelector('input[name="coat-color"]').value = colorCoats;
});

wizardEyes.addEventListener('click', function () {
  var colorEyes = WIZARD_EYES[Math.floor(Math.random() * WIZARD_EYES.length)];

  wizardEyes.style.fill = colorEyes;
  wizardWrap.querySelector('input[name=eyes-color]').value = colorEyes;
});

wizardBall.addEventListener('click', function () {
  var colorBall = WIZARD_BALLS[Math.floor(Math.random() * WIZARD_BALLS.length)];

  wizardBall.style.background = colorBall;
  wizardBall.querySelector('input').value = colorBall;
});
// change-wizard-click
