var x = 25;
var y = 250;
var dx = 1.5;
var dy = -4;
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
var bricks;
var rows = 5;
var cols = 5;
var brickWidth;
var brickHeight = 15;
var padding = 1;

function init() {
  ctx = $('#canvas')[0].getContext("2d");
  width = $("#canvas").width();
  height = $("#canvas").height();
  paddlex = width / 2;
  brickWidth = (width/cols) - 1;
  canvasMinX = $("#canvas").offset().left;
  canvasMaxX = canvasMinX + width;
  intervalId = setInterval(draw, 10);
}

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
  rect(0,0,width,height);
}

function onKeyDown(evt) {
  if (evt.keyCode == 39) rightDown = true;
  else if (evt.keyCode == 37) leftDown = true;
}

function onKeyUp(evt) {
  if (evt.keyCode == 39) rightDown = false;
  else if (evt.keyCode == 37) leftDown = false;
}

$(document).keydown(onKeyDown);
$(document).keyup(onKeyUp);

function onMouseMove(evt) {
  if (evt.pageX > canvasMinX && evt.pageX < canvasMaxX) {
    paddlex = Math.max(evt.pageX - canvasMinX - (paddlew/2), 0);
    paddlex = Math.min(width - paddlew, paddlex);
  }
}

$(document).mousemove(onMouseMove);

function initbricks() {
    bricks = new Array(rows);
    for (i=0; i < rows; i++) {
        bricks[i] = new Array(cols);
        for (j=0; j < cols; j++) {
            bricks[i][j] = 1;
        }
    }
}

function drawbricks() {
  for (i=0; i < rows; i++) {
    ctx.fillStyle = rowcolors[i];
    for (j=0; j < cols; j++) {
      if (bricks[i][j] == 1) {
        rect((j * (brickWidth + padding)) + padding,
             (i * (brickHeight + padding)) + padding,
             brickWidth, brickHeight);
      }
    }
  }
}
