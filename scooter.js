function Scooter(x, y, img) {
  this.pos = createVector(x, y)
  this.vel = createVector()
  this.grav = 0.1
  this.v = createVector()

  this.img = img

  this.display = function () {
    imageMode(CENTER)
    image(this.img, this.pos.x, this.pos.y, 100, 100)
  }

  this.moveLeft = function (startPos) {
    this.pos.x = startPos
    this.pos.x += 20
  }
  this.moveRight = function (startPos) {
    this.pos.x = startPos
    this.pos.x -= 20
  }
  
this.moveScooter= function() {
  if (isLeftPressed) {
    //if reached edge, stop
    if (scooterPosition.x < 100) {
      this.isLeftPressed = false
    }
    velocity.add(acceleration)
    scooterPosition.sub(velocity)
  }
  if (isRightPressed) {
    if (scooterPosition.x > width - 100) {
      this.isRightPressed = false
    }
    velocity.add(acceleration)
    scooterPosition.add(velocity)
  }
}

this.updateJumper = function() {
  v.y += gravity
  scooterPosition.y += v.y
  scooterPosition.y = constrain(scooterPosition.y, 0, height - 50)
}
this.jump = 
function jump() {
  console.log('jump');
  v.y = -19;
  //if meets floor, stop. floor is at height - 50

  if (scooterPosition.y >= height - 40) {
    v.y = -v.y;
  }
  if (scooterPosition.y <= 50) {
    v.y = -v.y;
  }
}

}
