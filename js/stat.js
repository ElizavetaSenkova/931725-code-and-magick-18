'use strict';

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

var names = ['Вы', 'Кекс', 'Катя', 'Игорь'];
var times = ['2725', '4025', '1244', '1339'];

window.renderStatistics = function (ctx, names, times) {

  function renderBackground(context, x, y, width, height, color) {
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
  }

  renderBackground(ctx, CLOUD_X + CLOUD_ADD, CLOUD_Y + CLOUD_ADD, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');
  renderBackground(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, 'white');

  function renderTitles(context, text, x, y, color, font) {
    context.fillStyle = color;
    context.font = font;
    context.fillText(text, x, y);
  }

  renderTitles(ctx, 'Ура вы победили!', TEXT_X, TEXT_Y, 'black', '16px PT Mono');
  renderTitles(ctx, 'Список результатов:', TEXT_X, TEXT_Y + TEXT_MARGIN, 'black', '16px PT Mono');

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

  function renderRect(context, x, y, width, height) {
    context.fillRect(x, y, width, height);
  }

  function renderRectParameters(context, parameters, x, y, color) {
    context.fillStyle = color;
    context.fillText(parameters, x, y);
  }

  for (var i = 0; i < names.length; i++) {
    renderRectParameters(ctx, Math.round(times[i]), CHART_X + (CHART_MARGIN * i), CHART_Y - 10);
    renderRectParameters(ctx, names[i], CHART_X + (CHART_MARGIN * i), CHART_TEXT_Y);
    renderRect(ctx, CHART_X + (CHART_MARGIN * i), CHART_Y + (CHART_HEIGHT - ((CHART_HEIGHT * times[i]) / maxTime)), CHART_WIDTH, (CHART_HEIGHT * times[i]) / maxTime);

    if (i === 0) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + randomInteger(0, 100) + '%' + ', 50%)';
    }

  }

};
