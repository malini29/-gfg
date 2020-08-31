
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobobj1,bobobj2,bobobj3,bobobj4,bobobj5;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bobobj1= new Bob(200,50,10,20);
bobobj2= new Bob(250,50,10,20);
bobobj3= new Bob(300,50,10,20);
bobobj4= new Bob(350,50,10,20);
bobobj5= new Bob(350,100,10,20);
rope1= new Rope(bobobj1.body,roofObj.body,-bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobobj1.display();
  bobobj2.display();
  bobobj3.display();
  bobobj4.display();
  bobobj5.display();
  drawSprites();
 
}



