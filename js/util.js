'use strict';

(function () {
  var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

  var setup = document.querySelector('.setup');

  window.util = {
    WIZARD_COATS: WIZARD_COATS,
    WIZARD_EYES: WIZARD_EYES,
  };

  window.setup = setup;

})();
