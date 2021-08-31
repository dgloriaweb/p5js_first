function Scooter(x, y, img) {
  this.pos = createVector(x, y)
  this.vel = createVector()
  this.grav = 0.1

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
}
