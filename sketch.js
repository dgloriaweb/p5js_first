var cursorX = 50;
var isLeftPressed = false;
var isRightPressed = false;
let scooter;

function setup() {
  createCanvas(600, 400);
  scooter = new Scooter();
}

function draw() {
  background(220);
  scooter.jump();
  scooter.move();
  ellipse(50, height - 25, 20, 20);
  ellipse(width - 50, height - 25, 20, 20);
}
function touchEnded() {
  isLeftPressed = false;
  isRightPressed = false;
  console.log('ended');
}
function touchStarted(event) {
  touchX = getTouchEventX(event);
  touchY = getTouchEventY(event);
  if (touchY < height - 100) {
    //jump
    // scooter.jump();
    scooter.jumpVelocity.y = -3;
  } else if (touchX > 25 && touchX < 75) {
    img = loadImage('scooter_left.png');
    isLeftPressed = true;
    console.log('left');
  } else if (touchX > width - 75 && touchX < width - 25) {
    img = loadImage('scooter.png');
    isRightPressed = true;
  }
}

function getTouchEventX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}
function getTouchEventY(event) {
  return event.type.includes('mouse') ? event.pageY : event.touches[0].clientY;
}
