'use strict';

(function () {

  var WIZARD_NUMBERS = 4;

  var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var wizardList = [];

  document.querySelector('.setup-similar').classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  function createWizards() {

    return {
      name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)],
      coatColor: window.util.WIZARD_COATS[Math.floor(Math.random() * window.util.WIZARD_COATS.length)],
      eyesColor: window.util.WIZARD_EYES[Math.floor(Math.random() * window.util.WIZARD_EYES.length)],
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

})();
