var imageX = 180
var imageY = 150
var cursorX = 50
var isLeftPressed = false
var isRightPressed = false
let startPos = 0
var gemX = 400
var gems = []
let timer
var velocity

function preload() {
  img = loadImage(
    'https://thumbs.dreamstime.com/b/mobility-scooter-icon-vector-supermarket-concept-thin-line-illustration-editable-stroke-linear-sign-use-web-192174043.jpg'
  )
}
function setup() {
  createCanvas(400, 200)
  scooter = new Scooter(imageX, imageY, img)
  leftControl = new LeftControl(cursorX)
  rightControl = new RightControl(cursorX)
  timer = 5000
  velocity = createVector(4);
}

function draw() {
  background(220)
  imageX = update(imageX)
  imageMode(CENTER);
  image(this.img, this.imageX, this.imageY, 100, 100);
  leftControl.display()
  rightControl.display()

  // if (millis() > timer) {
  //   createGem()
  //   print('create')
  //   timer = timer + random(1000, 3000)
  // }
  // if (gems[0]) {
  //   for (var i = 0; i < gems.length; i++) {
  //     gems[i].display()
  //     if (gems[i].x > 50) {
  //       gems[i].move()
  //     } else {
  //       gems.splice(i, 1)
  //     }
  //   }
  // }
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

function update(){
 
  acceleration = 1
  acceleration ++

  if (isLeftPressed) {
    imageX-=acceleration
    console.log('left')
  }
  if (isRightPressed) {
    imageX+=acceleration
    console.log('right')
  }
  return imageX
}