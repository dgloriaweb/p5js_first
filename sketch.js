var cursorX = 50;
var isLeftPressed = false;
var isRightPressed = false;
var scooterPosition;
var velocity;
var acceleration;
var v;
var gravity = 0.8;
var counter;

function preload() {
  img = loadImage('scooter.png');
}
function setup() {
  createCanvas(600, 400);
  scooterPosition = createVector(width / 2, height - 100);
  velocity = createVector(0.5);
  acceleration = createVector(0.1, 0);
  scooter = new Scooter(scooterPosition.x, scooterPosition.y, img);

  //jumper
  pos = createVector(width >> 1, 50);
  v = createVector();
  counter = 3;
}

function draw() {
  background(220);
  scooter.updateJumper();
  scooter.moveScooter();
  imageMode(CENTER);
  image(this.img, scooterPosition.x, scooterPosition.y, 100, 100);
  ellipse(50, height - 25, 20, 20);
  ellipse(width - 50, height - 25, 20, 20);
}
function touchEnded() {
  isLeftPressed = false;
  isRightPressed = false;
  velocity = createVector(0.5);
  acceleration = createVector(0.3, 0);
  console.log('ended');
}
function touchStarted(event) {
  touchX = getTouchEventX(event);
  touchY = getTouchEventY(event);
  if (touchY < height - 100) {
    //jump
    scooter.jump();
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
