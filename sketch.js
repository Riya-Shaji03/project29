const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground,ground2,polygon,slingshot
var box,box1,box2,box3,box4,box5,box6
var box7,box8,box9,box10,box11
var box12,box13,box14,box15
var box16,box17,box18,box19,box20
var box21, box22, box23, box24


function preload(){
	
}



function setup() {
	createCanvas(1200,600);
    background(0,0,0)
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(540,450,340,10)
    ground2 = new Ground(930,260,250,10)
   
    //pyramid1: fourth row
    box = new Box(447,425,30,40)
    box1 = new Box(478,425,30,40)
    box2 = new Box(509,425,30,40)
    box3 = new Box(540,425,30,40)
    box4 = new Box(571,425,30,40)
    box5 = new Box(602,425,30,40)
    box6 = new Box(633,425,30,40)

    //pyramid1: third row
    box7 = new Box(478,403,30,40)
    box8 = new Box(509,403,30,40)
    box9 = new Box(540,403,30,40)
    box10 = new Box(571,403,30,40)
    box11 = new Box(602,403,30,40)

    //pyramid1: second row
    box12 = new Box(509,345,30,40)
    box13 = new Box(540,345,30,40)
    box14 = new Box(571,345,30,40)

    //pyramid1: first row
    box15 = new Box(540,305,30,40)

    //pyramid2: third row
    box16 = new Box(870,259,30,40)
    box17 = new Box(895,259,30,40)
    box18 = new Box(928,259,30,40)
    box19 = new Box(955,259,30,40)
    box20 = new Box(986.5,259,30,40)
   
    //pyramid2: second row
    box21 = new Box(898,200,30,40)
    box22 = new Box(928,200,30,40)
    box23 = new Box(953,200,30,40)

    //pyramid2: first row
    box24 = new Box(926,160,30,40)

    polygon = new Polygon(100,300,10,10)

    slingshot = new Slingshot(polygon.body,{x:100,y:200})


}


function draw() {
    Engine.update(engine);
    background(60,42,37)
    box.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()

    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()

    box12.display()
    box13.display()
    box14.display()

    box15.display()

    box16.display()
    box17.display()
    box18.display()
    box19.display()
    box20.display()

    box21.display()
    box22.display()
    box23.display()

    box24.display()

    polygon.display()
    slingshot.display()

    ground.display()  
    ground2.display() 
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY})
}
  
function mouseReleased(){
    slingshot.fly()
}
