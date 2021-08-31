var cursorX = 50
var isLeftPressed = false
var isRightPressed = false
var mass = 2
var position
var velocity
var acceleration
var v
var gravity = 0.8
var counter

function preload() {
  img = loadImage('../scooter.png')
}
function setup() {
  createCanvas(600, 400)
  position = createVector(width/2, height-100)
  velocity = createVector(0.5)
  acceleration = createVector(0.1, 0)
  scooter = new Scooter(position.x, position.y, img)

  //jumper
  pos = createVector(width >> 1, 50)
  vel = createVector()
  v = createVector()
  counter = 3
}

function draw() {
  background(220)
  updateJumper()
  update()
  imageMode(CENTER)
  image(this.img, position.x, position.y, 100, 100)
  ellipse(50, height - 50, 20, 20)
  ellipse(width - 50, height - 50, 20, 20)
  ellipse(width - 50, height - 100, 20, 20)
}
function touchEnded() {
  isLeftPressed = false
  isRightPressed = false
  velocity = createVector(0.5)
  acceleration = createVector(0.3, 0)
  console.log('ended')
}
function touchStarted(event) {
  touchX = getTouchEventX(event)
  touchY = getTouchEventY(event)
  if (touchY < height - 75) {
    //jump
    jump()
  } else if (touchX > 25 && touchX < 75) {
    isLeftPressed = true
    console.log('left')
  } else if (touchX > width - 75 && touchX < width - 25) {
    isRightPressed = true
  }
}

function updateJumper() {
  v.y += gravity
  position.y += v.y
  position.y = constrain(position.y, 0, height - 50)
}
function jump() {
  console.log('jump')
  v.y = -19
  //if meets floor, stop. floor is at height - 50

  if (position.y >= height - 40) {
    v.y = -v.y
  }
  if (position.y <= 50) {
    v.y = -v.y
  }
}

function getTouchEventX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}
function getTouchEventY(event) {
  return event.type.includes('mouse') ? event.pageY : event.touches[0].clientY
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
    if (position.x > width - 100) {
      this.isRightPressed = false
    }
    velocity.add(acceleration)
    position.add(velocity)
  }
}
