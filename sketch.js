var ship;
var astroid;
var backg;
var backg2;
var backg3;
var mars;
var uranus;
var astroidGroup;
var block;
var block2;
var block3;
var score=100

function preload(){
spaceship=loadImage("ship.png");

rockimage=loadImage("rocks.png");

backgroundimage=loadImage("6.jpg");

marsimage=loadImage("m.png");

uranusimage=loadImage("u.png");
}
function setup(){

  createCanvas(899,1000);

  backg=createSprite(900,1800,2000,9000);
  backg.addImage("g",backgroundimage);

backg3=createSprite(900,2300)
backg3.addImage("r",backgroundimage);

  backg2=createSprite(900,2800,2000,9000);
  backg2.addImage('t',backgroundimage);

 block=createSprite(500,2850,50,3000);
 block2=createSprite(900,3350,7000,400);
 block3=createSprite(1420,2850,50,3000);
 

ship=createSprite(900,2800,10,10);
  ship.addImage("s",spaceship);
  ship.scale=0.4;
 
  uranus=createSprite(890,-10000)
  uranus.addImage('y',uranusimage);
  uranus.scale=0.3
   uranus.rotation=0
   uranus.velocityY=10;

  mars=createSprite(890,2850,10,10);
  mars.addImage('k',marsimage);
   mars.scale=0.4
   mars.rotation=50
   mars.velocityY=2

astroidGroup=new Group();

camera.on();
  
}
function draw(){

  ship.collide(block);
  ship.collide(block2);
  ship.collide(block3);
  
  if (ship.collide(astroidGroup)){
    score=score-10;
  }
 
  uranus.rotation=uranus.rotation+3
   mars.rotation=mars.rotation+3

  camera.x=960;
  camera.y=ship.y; 
  mars.depth=0.2
   backg3.depth=0.1
   backg.depth=0.1
   backg2.depth=0.1
   ship.depth=0.3
   block.depth=0.4
   block2.depth=0.4
   block3.depth=0.4
  

        
   if(keyIsDown(LEFT_ARROW)){
    ship.velocityX=-7;
  }else(
    ship.velocityX=0
  );
       
   if(keyIsDown(RIGHT_ARROW)){
     ship.velocityX=7;
      }else(
      ship.velocityX=0
      );
 
  if (frameCount%50==0){
    astroid=createSprite(950,0,4,10);
    astroid.rotation=2;
    astroid.depth=0.1;
    astroid.velocityY=10;
  astroid.addAnimation("doo",rockimage);
   astroid.lifetime=350;
    astroid.x=Math.round(random(500,1420));
astroid.setCollider("aabb",0,0,35,10);
    astroidGroup.add(astroid);
  }
 
  drawSprites();
  
  
  stroke("black");
   textSize(20);
   fill("white");
   text("Health:"+score,1250,2700);
  
   textSize(20);
   fill("white");
   text("Start Location: Mars", 1200,2780)

   textSize(20);
   fill("white");
   text("Destination: Uranus", 1200,2880)

   if(ship.collide(uranus)){
     score=0
    astroidGroup.setVelocityXEach(0)
    astroidGroup.setVelocityYEach(0)
    astroidGroup.
     uranus.velocityY=0;
    ship.velocityX=0;
   ship.velocityY=0;
    textSize(100)
    fill("white");
    text("YOU WIN!!!", 650,2480);
   }
   if(score==0){
    score=0
    uranus.velocityY=0;
  ship.velocityX=0;
  ship.velocityY=0;
  astroidGroup.setVelocityXEach(0)
  astroidGroup.setVelocityYEach(0)
   textSize(100)
   fill("white");
   text("GAME OVER",650,2780);
   }
   if(score<0){
     score=0
    uranus.velocityY=0;
  ship.velocityX=0;
  ship.velocityY=0;
  astroidGroup.setVelocityXEach(0)
  astroidGroup.setVelocityYEach(0)
   textSize(100)
   fill("white");
   text("GAME OVER",650,2780);
 }

}