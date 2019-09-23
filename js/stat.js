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
  var CHART_HEIGHT = 150;
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

  // names = ['Вы', 'Кекс', 'Катя', 'Игорь'];

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CHART_X + (CHART_MARGIN * i), CHART_TEXT_Y);
    ctx.fillRect(CHART_X + (CHART_MARGIN * i), CHART_Y, CHART_WIDTH, CHART_HEIGHT);
  }

  // var playerIndex = 0;
  // var playerName = 'Вы';

  // ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  // ctx.fillRect(CHART_X + (CHART_MARGIN * playerIndex), CHART_Y, CHART_WIDTH, CHART_HEIGHT);
  // ctx.fillStyle = 'black';
  // ctx.fillText('Вы', CHART_X + (CHART_MARGIN * playerIndex), CHART_TEXT_Y);

  // var playerIndex = 1;
  // var playerName = 'Кекс';

  // ctx.fillStyle = 'hsl(240, ' + Math.random() + ', 50%)';
  // ctx.fillRect(CHART_X + (CHART_MARGIN * playerIndex), CHART_Y, CHART_WIDTH, CHART_HEIGHT);
  // ctx.fillStyle = 'black';
  // ctx.fillText('Кекс', CHART_X + (CHART_MARGIN * playerIndex), CHART_TEXT_Y);

  // var playerIndex = 2;
  // var playerName = 'Катя';

  // ctx.fillStyle = 'hsl(240, ' + Math.random() + ', 50%)';
  // ctx.fillRect(CHART_X + (CHART_MARGIN * playerIndex), CHART_Y, CHART_WIDTH, CHART_HEIGHT);
  // ctx.fillStyle = 'black';
  // ctx.fillText('Катя', CHART_X + (CHART_MARGIN * playerIndex), CHART_TEXT_Y);

  // var playerIndex = 3;
  // var playerName = 'Игорь';

  // ctx.fillStyle = 'hsl(240, ' + Math.random() + ', 50%)';
  // ctx.fillRect(CHART_X + (CHART_MARGIN * playerIndex), CHART_Y, CHART_WIDTH, CHART_HEIGHT);
  // ctx.fillStyle = 'black';
  // ctx.fillText('Игорь', CHART_X + (CHART_MARGIN * playerIndex), CHART_TEXT_Y);

};
