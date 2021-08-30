function Gem(x, y, r) {
  this.x = x
  this.y = y
  this.r = r

  this.display = function () {
    ellipse(this.x, this.y, this.r * 2)
  }

  this.move = function () {
    if (this.x > 0) {
      this.x--
    }
  }
}
