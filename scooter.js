class Scooter {
  constructor() {
    this.img = loadImage('scooter.png');
    this.scooterPosition = createVector(width / 2, height - 100);
    this.velocity = createVector();
    this.acceleration = createVector(0.1, 0);
    this.gravity = 0.1;
    this.jumpVelocity = createVector();
  }
  moveScooter() {
    if (isLeftPressed) {
      //if reached edge, stop
      if (this.scooterPosition.x < 100) {
        this.isLeftPressed = false;
      }
      this.velocity.add(this.acceleration);
      this.scooterPosition.sub(this.velocity);
      console.log(this.scooterPosition);
    }
    if (isRightPressed) {
      if (this.scooterPosition.x > width - 100) {
        this.isRightPressed = false;
      }
      this.velocity.add(this.acceleration);
      this.scooterPosition.add(this.velocity);
    }
    return this;
  }

  updateJumper() {
    this.jumpVelocity.y += this.gravity;
    this.scooterPosition.y += this.jumpVelocity.y;
    this.scooterPosition.y = constrain(this.scooterPosition.y, 0, height - 50);
    return this;
  }
  display() {
    imageMode(CENTER);
    image(this.img, this.scooterPosition.x, this.scooterPosition.y, 100, 100);
    return this;
  }

  run() {
    return this.updateJumper().display();
  }
}
