var cursorX = 50
var isLeftPressed = false
var isRightPressed = false
var position
var velocity

function preload() {
  img = loadImage(
    'https://thumbs.dreamstime.com/b/mobility-scooter-icon-vector-supermarket-concept-thin-line-illustration-editable-stroke-linear-sign-use-web-192174043.jpg'
  )
}
function setup() {
  position = createVector(180, 150)
  velocity = createVector(4)
  createCanvas(400, 200)
  scooter = new Scooter(position.x, position.y, img)
  timer = 5000
}

function draw() {
  background(220)
  update()
  imageMode(CENTER)
  image(this.img, position.x, position.y, 100, 100)
}
function touchEnded() {
  isLeftPressed = false
  isRightPressed = false
  console.log('ended')
}
function touchStarted(event) {
  if (event.clientX > 25 && event.clientX < 75) {
    isLeftPressed = true
  }
  if (event.clientX > 325 && event.clientX < 375) {
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
  let friction = -2
  
  if (isLeftPressed) {
    position.sub(velocity)
    position.sub(friction)
    console.log(velocity.x)
  }
  if (isRightPressed) {
    position.add(-1*velocity)
    position.add(-1*friction)
    console.log(velocity.x)
  }
}
