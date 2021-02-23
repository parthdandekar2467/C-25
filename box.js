class Box extends BaseClass {//extends
  constructor(x, y, width, height) {
    super(x, y, width, height)// super = sub class
    this.image = loadImage("sprites/wood1.png");
  }
  
}