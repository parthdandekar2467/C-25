class Pig extends BaseClass {//extends
  constructor(x, y) {
    super(x, y, 50, 50)// super = sub class
    this.image = loadImage("sprites/enemy.png");
  }
 
}