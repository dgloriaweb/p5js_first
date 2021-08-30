function Scooter(x, y, img) {
  this.pos = createVector(x, y)
  this.vel = createVector()
  this.grav = 0.1

  this.img = img

  this.display = function () {
    imageMode(CENTER)
    image(this.img, this.pos.x, this.pos.y, 100, 100)
  }

  this.jump = function () {
    //jumper
    this.vel.y += this.grav // vy = vy + gravity;
    this.pos.y += this.vel.y // y = y + vy;
    this.pos.y = constrain(this.pos.y, 0, height - 50)
    return this
  }
  this.jumprun = function(){
    return this.jump().display()
  }



  this.moveLeft = function (startPos) {
    this.pos.x = startPos
    this.pos.x += 20
  }
  this.moveRight = function (startPos) {
    this.pos.x = startPos
    this.pos.x -= 20
  }
}
