
var ground
var paper,dustbin1,dustbin2,dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

	
	paper = new Paper(200,200);
	
	dustbin1 = new Dustbin(500,320,20,100);
	dustbin2 = new Dustbin(600,370,220,20);
	dustbin3 = new Dustbin(700,320,20,100);
	
	ground = new Ground(400,390,1200,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
	ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-55})
	}
}



