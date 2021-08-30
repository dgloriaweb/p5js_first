var cursorX = 50
var isLeftPressed = false
var isRightPressed = false
var mass = 2
var position
var velocity
var acceleration

function preload() {
  img = loadImage('../scooter.png')
}
function setup() {
  position = createVector(500, 500)
  velocity = createVector(0.5)
  acceleration = createVector(0.1, 0)
  createCanvas(1000, 600)
  scooter = new Scooter(position.x, position.y, img)
  timer = 5000
}

function draw() {
  background(220)
  update()
  imageMode(CENTER)
  image(this.img, position.x, position.y, 100, 100)
  ellipse(50,height-50,20,20)
  ellipse(width-50,height-50,20,20)
}
function touchEnded() {
  isLeftPressed = false
  isRightPressed = false
  velocity = createVector(0.5)
  acceleration = createVector(0.3, 0)
  console.log('ended')
}
function touchStarted(event) {
  if (event.clientX > 25 && event.clientX < 75) {
    isLeftPressed = true
  }
  if (event.clientX > width-75 && event.clientX < width-25) {
    isRightPressed = true
  }
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}
// function createGem() {
//   gems.push(new Gem(gemX, 150, 20))
// }

function update() {
  if (isLeftPressed) {
    //if reached edge, stop
    if (position.x < 100) {
      this.isLeftPressed = false
    }
    velocity.add(acceleration)
    position.sub(velocity)
  }
  if (isRightPressed) {
    if (position.x > width-100) {
      this.isRightPressed = false
    }
    velocity.add(acceleration)
    position.add(velocity)
  }
}
