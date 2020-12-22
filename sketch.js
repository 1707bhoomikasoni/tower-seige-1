var ground1,ground2,ball,b1,b2,b3,b4,b5,b6;
var b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17;
var sling;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


  Engine.run(engine);
  ground1=new Ground(550,690,1500,10)
  ground2=new Ground(590,500,250,15)
  ball=new Ball(100,590,40)
  b1=new Block(610,490,30,40)
  b2=new Block(570,490,30,40)
  b3=new Block(545,490,30,40)
 b4=new Block(565,490,30,40)
  b5=new Block(555,470,30,40)
  b6=new Block(545,490,30,40)
  b7=new Block(615,490,30,40)
  b8=new Block(545,470,30,40)
  b9=new Block(545,470,30,40)
  b10=new Block(565,470,30,40)
  b11=new Block(595,470,30,40)
  b12=new Block(615,470,30,40)
  b13=new Block(635,470,30,40)
  sling=new Slingshot(ball.body,{x:150,y:550})

}


function draw() {
  rectMode(CENTER);
  background("grey");
  drawSprites();
  ground1.display()
  ground2.display()
  ball.display()
b1.display()
b2.display()
b3.display()
b4.display()
b5.display()
b6.display()
b7.display()
b8.display()
b9.display()
b10.display()
b11.display()
b12.display()
b13.display()

}

function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  sling.fly()
}