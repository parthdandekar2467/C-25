class Log extends BaseClass {//extends
  constructor(x, y, height, angle) {
    super(x, y, 20, height, angle)// super = sub class
    this.image = loadImage("sprites/wood2.png");
    
    Matter.Body.setAngle(this.body, angle);

  }


 
}