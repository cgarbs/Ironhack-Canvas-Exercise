console.log('JS file connected');

const canvas = document.getElementById('box');
const context = canvas.getContext('2d');

console.log(canvas);
console.log(context);

// 1
function drawFillRectangle() {
  context.fillStyle = 'purple';
  context.fillRect(21, 21, 120, 220);
}

// 2
function drawStrokeRect() {
  context.strokeRect(400, 350, 50, 100);
}

function drawRectPath() {
  context.beginPath();

context.moveTo(200, 200);

context.lineTo(200, 400);
context.lineTo(300, 400);
context.lineTo(300, 200);
context.lineTo(200, 200);

context.stroke();

context.closePath();
}

function drawBullsEye() {
  context.beginPath();

  context.strokeStyle = 'red';
  context.lineWidth = 10;

  context.arc(400, 100, 50, 0, Math.PI * 2);
  context.stroke();
  context.closePath();

  context.beginPath();

  context.strokeStyle = 'red';
  context.lineWidth = 10;

  context.arc(400, 100, 25, 0, Math.PI * 2);
  context.stroke();
  context.closePath();
}



function drawText() {
  context.fillStyle = 'blue';
  context.font = '25px monospace';

context.fillText('Ironhack', 195, 190);
}

