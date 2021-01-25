const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground
var box
var stone
var launcher

function setup()
{
    canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(450,400,200,20);

    box1 = new Square(450,300,20,20);
    box2 = new Square(470,300,20,20);
    box3 = new Square(490,300,20,20);
    box4 = new Square(430,300,20,20);
    box5 = new Square(410,300,20,20);
    box6 = new Square(450,300,20,20);
    box7 = new Square(470,300,20,20);
    box8 = new Square(430,300,20,20);
    box9 = new Square(450,300,20,20);

    stone1 = new Stone(100,500,50);

    launcher =  new SlingShot(stone1.body,{x:100,y:550})

}
function draw()
{
    background("white");
    Engine.update(engine);
    strokeWeight(1);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    stone1.display();

    launcher.display();
}


function mouseDragged()
{
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
    launcher.fly();
}
