const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
 


function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;
	  
	block1=new Block(480);
	block2=new Block(450);
	block3=new Block(420);
	block4=new Block(390);
	block5=new Block(360);
	block6=new Block(330);
	block7=new Block(300);
	block8=new Block(330,235);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  
}
