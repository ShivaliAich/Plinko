const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,plinko;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 600;

function setup() {
  createCanvas(480,700);
  engine = Engine.create();
    world = engine.world;
    
  ground = new Ground(240,690,480,20);
    //plinko = new Plinko(240,40);
  //createSprite(400, 200, 50, 50);
  for(var k =0;k<=width;k=k+80){
    divisions.push(new Divisions(k,divisionHeight,10,height =divisionHeight/2 ))
  }
  for(var j=40;j<=width;j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }
  for(var j=15;j<=width-10;j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  } 
  for(var j=40;j<=width;j=j+50)
  {
    plinkos.push(new Plinko(j,275));
  }
  for(var j=15;j<=width-10;j=j+50)
  {
    plinkos.push(new Plinko(j,375));
  } 

}

function draw() {
  background(0,0,0);
  Engine.update(engine); 
  if(frameCount%60===0){ 
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10)); 
  } 
    for(var j=0;j<particles.length;j++) { 
    particles[j].display(); 
  }
for(var j=0;j<particles.length;j++)
{
  particles[j].display();
}
 for(var k=0;k<divisions.length;k++){
   divisions[k].display();
 } 
 for(var j=0;j<plinkos.length;j++) { 
   plinkos[j].display(); }
  
  ground.display(); 
  drawSprites();
}






