class BirdClass extends BaseClass {
    constructor(x, y){
        super(x, y, 60, 60);
        this.image = loadImage("sprites/bird.png");
    }
    display() {
        super.display();
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
    }
}