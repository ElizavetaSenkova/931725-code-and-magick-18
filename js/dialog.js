'use strict';

(function () {

  var WIZARD_BALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.setup.querySelector('.setup-close');
  var inputName = window.setup.querySelector('.setup-user-name');
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
    window.setup.classList.remove('hidden');

    document.addEventListener('keydown', EscapePressHandler);
  };

  var closePopup = function () {
    window.setup.classList.add('hidden');

    document.removeEventListener('keydown', EscapePressHandler);
  };


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
    var colorCoats = window.util.WIZARD_COATS[Math.floor(Math.random() * window.util.WIZARD_COATS.length)];

    wizardCoat.style.fill = colorCoats;
    wizardWrap.querySelector('input[name="coat-color"]').value = colorCoats;
  });

  wizardEyes.addEventListener('click', function () {
    var colorEyes = window.util.WIZARD_EYES[Math.floor(Math.random() * window.util.WIZARD_EYES.length)];

    wizardEyes.style.fill = colorEyes;
    wizardWrap.querySelector('input[name=eyes-color]').value = colorEyes;
  });

  wizardBall.addEventListener('click', function () {
    var colorBall = WIZARD_BALLS[Math.floor(Math.random() * WIZARD_BALLS.length)];

    wizardBall.style.background = colorBall;
    wizardBall.querySelector('input').value = colorBall;
  });

})();
