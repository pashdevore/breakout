var x = 130;
var y = 150;
var dx = 2;
var dy = 4;
var ctx;
var width;
var height;
var paddlex;
var paddleh = 10;
var paddlew = 75;
var rightDown = false;
var leftDown = false;
var canvasMinX = 0;
var canvasMaxX = 0;
var intervalId = 0;

function circle(x,y,r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
}

function rect(x,y,w,h) {
  ctx.beginPath();
  ctx.rect(x,y,w,h);
  ctx.closePath();
  ctx.fill();
}

function clear() {
  ctx.clearRect(0, 0, width, height);
}

function init() {
  ctx = $('#canvas')[0].getContext("2d");
  width = $("#canvas").width();
  height = $("#canvas").height();
  paddlex = width / 2;
  intervalId = setInterval(draw, 30);
}
