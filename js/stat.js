'use strict';

window.renderStatistics = function (ctx, names, times) {

  var CLOUD_WIDTH = 270;
  var CLOUD_HEIGHT = 420;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_ADD = 10;

  var TEXT_X = 150;
  var TEXT_Y = 40;
  var TEXT_MARGIN = 30;

  var CHART_WIDTH = 40;
  var CHART_HEIGHT = 150; // макс высота столбца
  var CHART_X = 150;
  var CHART_Y = 110;
  var CHART_MARGIN = 50;
  var CHART_TEXT_Y = 280;

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(CLOUD_X + CLOUD_ADD, CLOUD_Y + CLOUD_ADD, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = 'white';
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', TEXT_X, TEXT_Y);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Список результатов:', TEXT_X, TEXT_Y + TEXT_MARGIN);

  function randomInteger(min, max) {
    // случайное число от min до (max+1)
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(Math.round(times[i]), CHART_X + (CHART_MARGIN * i), CHART_Y - 10);
    ctx.fillText(names[i], CHART_X + (CHART_MARGIN * i), CHART_TEXT_Y);
    ctx.fillRect(CHART_X + (CHART_MARGIN * i), CHART_Y + (CHART_HEIGHT - ((CHART_HEIGHT * times[i]) / maxTime)), CHART_WIDTH, (CHART_HEIGHT * times[i]) / maxTime);

    if (i === 0) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + randomInteger(0, 100) + '%' + ', 50%)';
    }

  }

};
