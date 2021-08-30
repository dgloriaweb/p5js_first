function Scooter(x, y, img) {
  this.imageX = x
  this.imageY = y
  this.img = img

  this.display = function () {
    imageMode(CENTER)
    image(this.img, this.imageX, this.imageY, 100, 100)
  }

  this.jump = function () {}

  this.moveLeft = function (startPos) {
    
    this.imageX = startPos
    this.imageX++
  }
  this.moveRight = function (startPos) {
    this.imageX = startPos
    this.imageX--
  }
}
