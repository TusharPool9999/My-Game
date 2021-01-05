var building1,building2,building1img,building2img
var inviBuilding1, inviBuilding2
var man, manjumpright
var buildingpiece,buildingpieceimg
var water, waterimg
var helicopter, helicopterimg
var gamestate="serve"
var lives=3
var score=0
var bg,bgimg
var climberR, climberL
var climberLgroup,climberRgroup
var invisibleWall
var obstacleimg,healStoneimg
var score=0;
var heart1,heart2,heart3,heart4,heart5,heart6,heart7,heart8,heart9,haert10
var heart1img,heart2img,heart3img,heart4img,heart5img,heart6img,heart7img,heart8img
var heart9img,heart10img
var rockintro,rockintroimg
var safeintro,safeintroimg
var move,moveimg
var reset,resetimg

function preload(){

manjumpright=loadImage("images/run4.PNG")
building1img=loadImage("images/building.png")
building2img=loadImage("images/building.png")
bgimg=loadImage("images/download.jpg")
waterimg=loadImage("images/water.jpg")
obstacleimg=loadImage("images/rock.jpg")
healStoneimg=loadImage("images/healStone.jpg")
heart1img=loadImage("images/heart.jpg")
heart2img=loadImage("images/heart.jpg")
heart3img=loadImage("images/heart.jpg")
heart4img=loadImage("images/heart.jpg")
heart5img=loadImage("images/heart.jpg")
heart6img=loadImage("images/heart.jpg")
heart7img=loadImage("images/heart.jpg")
heart8img=loadImage("images/heart.jpg")
heart9img=loadImage("images/heart.jpg")
heart10img=loadImage("images/heart.jpg")
rockintroimg=loadImage("images/rock.jpg")
safeintroimg=loadImage("images/healStone.jpg")
moveimg=loadImage("images/arrow keys.png")
resetimg=loadImage("images/Reset.png")

}

function setup(){
  createCanvas(600,600)

 


  man=createSprite(300,300,10,10)
  man.addImage("jump",manjumpright)
  man.visible=false
 
  man.scale=0.4
  
  building1=createSprite(100, 300)
  building1.addImage("build1",building1img)
  building1.y = building1.height /2;
  building1.scale=2.5

  building2=createSprite(500,300)
  building2.addImage("build2",building2img)
  building2.y = building2.height /2;
  building2.scale=2.5

  water=createSprite(300,590,10,2)
 // water.tint="rgba(255, 255, 255, 0.5)"
  water.addImage("water",waterimg)
  water.scale=0.3

  heart1=createSprite(107,19,10,10)
  heart1.addImage("1",heart1img)
  heart1.scale=0.2

  heart2=createSprite(145,19,10,10)
  heart2.addImage("2",heart2img)
  heart2.scale=0.2

  heart3=createSprite(183,19,10,10)
  heart3.addImage("3",heart3img)
  heart3.scale=0.2

  heart4=createSprite(221,19,10,10)
  heart4.addImage("4",heart4img)
  heart4.scale=0.2
  heart4.visible=false;

  heart5=createSprite(259,19,10,10)
  heart5.addImage("5",heart5img)
  heart5.scale=0.2
  heart5.visible=false;

  heart6=createSprite(297,19,10,10)
  heart6.addImage("6",heart6img)
  heart6.scale=0.2
   heart6.visible=false;

  heart7=createSprite(335,19,10,10)
  heart7.addImage("7",heart7img)
  heart7.scale=0.2
  heart7.visible=false;

  heart8=createSprite(373,19,10,10)
  heart8.addImage("8",heart8img)
  heart8.scale=0.2
  heart8.visible=false;

  heart9=createSprite(102,52,10,10)
  heart9.addImage("9",heart9img)
  heart9.scale=0.2
  heart9.visible=false;

  heart10=createSprite(143,52,10,10)
  heart10.addImage("10",heart10img)
  heart10.scale=0.2
  heart10.visible=false;

  rockintro=createSprite(358,129,10,10)
  rockintro.addImage("intro",rockintroimg)
  rockintro.scale=0.2

  safeintro=createSprite(371,179,10,10)
  safeintro.addImage("safe",safeintroimg)
  safeintro.scale=0.2

  move=createSprite(374,240,10,10)
  move.addImage("move",moveimg)
  move.scale=0.16



  invisibleWall=createSprite(297,0,100,10)
  invisibleWall.visible=false;

  climberLgroup=new Group()
  climberRgroup=new Group()
  obstacleGroup=new Group()
  healStoneGroup=new Group()

  reset=createSprite(300,252,10,10)
  reset.addImage("reset",resetimg)
  reset.scale=0.1
  reset.visible=false
}

function draw(){
 background(bgimg)

 if(keyDown("SPACE")){
 
 gamestate="PLAY"
 }
 if (gamestate==="PLAY"){
  building1.velocityY = (4+3*score/10);
  building2.velocityY = (4+3*score/10)
 

  

   text.visible=false

  score = score + Math.round(getFrameRate()/60);
  man.visible=true

  
  if (keyDown(RIGHT_ARROW)){
    //man.velocityX=2]
    man.x=man.x+5
  }
  if(keyDown(LEFT_ARROW)){
   // man.velocityX=-2
    man.x=man.x-5
  }
  if (keyDown(UP_ARROW)){
  // man.velocityY=-2
    man.y=man.y-5
  }
  if (keyDown(DOWN_ARROW)){
    man.y=man.y+5
  }
  if (man.collide(building1)&&man.x<225){
    man.velocityY=1
   man.velocityX=0
    
  }
  if(man.collide(building2)&&man.x>375){
    man.velocityX=0
    man.velocityY=1
  }
  

  rockintro.visible=false
  safeintro.visible=false
  move.visible=false

  if(man.collide(healStoneGroup)){
    lives=lives+1
    healStoneGroup.destroyEach();
  }

  if(man.collide(water)){
    lives=lives-1
    man.x=288
    man.y=288
  }

if (lives===10){
  heart10.visible=true
}

  if(lives===9){
    heart10.visible=false
    heart9.visible=true
  }


  if(lives===8){
    heart9.visible=false
    heart8.visible=true
  }


  if(lives===7){
    heart8.visible=false
    heart7.visible=true
  }

  if(lives===6){
    heart7.visible=false
    heart6.visible=true
  }


  if(lives===5){
    heart6.visible=false
    heart5.visible=true
  }

  if(lives===4){
    heart5.visible=false
    heart4.visible=true
  }


  if(lives===3){
    heart4.visible=false
    heart3.visible=true
  }

  if (lives===2){
    heart3.visible=false
    heart2.visible=true
  }
  if(lives===1){
    heart2.visible=false
    heart1.visible=true
  }
  if(lives===0){
    heart1.visible=false
  }

  man.collide(climberLgroup)
  man.collide(climberRgroup)
  
  man.velocityY=2.5
  building1.velocityY=1
  if (building1.y >600 ){
    building1.y = 400;
 
  }
  building2.velocityY=1
  if (building2.y > 600){
    building2.y = 400;

   

  }

  

  
  if (man.collide(invisibleWall)&&man.y>0){
    man.velocityY=2.5
  }
  
if(man.collide(obstacleGroup)){
  lives=lives-1
  obstacleGroup.destroyEach();
}
  if(lives===0){
    gamestate="END"
  }

  obstacleGroup.collide(healStoneGroup)
  spawnClimbers();
  spawnObstacles();
  healStone();
 }

 if(gamestate==="END"){
   reset.visible=true
   if(mousePressedOver(reset)){
    Reset();
   }
    stroke("red")
    textSize(20)
    text("Game_Over",250,200)
    text("Score: "+ score, 250,220);
  //score=0
    man.destroy();
  
  building1.velocityY=0
  building2.velocityY=0
  
  }
 
 drawSprites();




if(gamestate==="serve"){
  strokeWeight("3")
  textSize(20)
  stroke("white")
  text("Press Space bar To Start",180,100)
  text("escape from rocks  = ",150,140)
  text("collect for extra life  = ",150,190)
  text("use for movement  = ",150,250)
  text("escape from water also",176,393)
  text("",220,200)
  text("",200,220);
  text("",170,240)
 
  
}
stroke("red")
stroke("white")
textSize(30)
text("lives:  ",15,25)
text("Score: "+ score, 400,27);
text(mouseX+","+mouseY,mouseX,mouseY)
}

function spawnClimbers(){
  if(frameCount%100===0){
    var climberL=createSprite(230,100,10,10)
    climberL.velocityY=1
    climberL.y=Math.round(random(20,100))

  /*if (man.collide(climberL)){
    man.velocityY=1
  }*/
    var climberR=createSprite(370,100,10,10)
    climberR.velocityY=1
    climberR.y=Math.round(random(10,110))


    climberR.depth=building1.depth
    climberRgroup.add(climberR)
    climberL.depth=building1.depth
    climberLgroup.add(climberL)
  }
  
}
function spawnObstacles(){
  if(frameCount%100===0){
   var obstacles=createSprite(300,0,10,10)
   obstacles.velocityY=(4+score/50)
  
   obstacles.addImage("obstacle",obstacleimg)
   obstacles.scale=0.2
   obstacles.x=Math.round(random(260,330))
   obstacles.depth=building1.depth
   obstacleGroup.add(obstacles)
  }
}

function healStone(){
  if (frameCount%1000===0){
    var healStone=createSprite(300,0,10,10)
    healStone.velocityY=4
    healStone.addImage("heal",healStoneimg)
    healStone.scale=0.2
    healStone.x=Math.round(random(260,330))
    healStone.depth=building1.depth
    healStoneGroup.add(healStone)
  }
}

function Reset(){
  gamestate="serve"
  score=0

}