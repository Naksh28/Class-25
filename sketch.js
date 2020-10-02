const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function preload(){
    bg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)
    ground2 = new Ground(200, 600, 400, 400);

    //boxes
    box1 = new Box(750,700);
    box2 = new Box(980,700);
    box3 = new Box(750,590);
    box4 = new Box(980,590);
    box5 = new Box(850,540);

    //logs
    log1 = new LogClass(865, 650, 340, PI/2);
    log2 = new LogClass(865, 550, 340, PI/2);
    log3 = new LogClass(850, 515, 130, -PI/7);
    log4 = new LogClass(850, 515, 130, PI/7);
    
    //pig
    pig1 = new PigClass(865, 660);
    pig2 = new PigClass(865, 580);
}

function draw(){
    background(bg);
    Engine.update(engine);
    text(mouseX, mouseX, mouseY);
    text(mouseY, mouseX, mouseY+20);
    ground.display();
    ground2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    pig1.display();
    pig2.display();
}