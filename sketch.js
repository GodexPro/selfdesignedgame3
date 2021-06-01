const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground,ground2;
var box,boxinv;
var player;
var station;
var platformlvl2,platform2lvl2,platform3lvl2,platform4lvl2;
var play;
var Lvl2Button;

var gamestate = "start";


function setup() {

  createCanvas(1200,600);

  setstart();
  setlevel1();
  

}

function draw(){
  background("white");
  

 if(gamestate==="start"){

   textSize(100)
  fill("purple")
        text(" The Parcel Game",350,400) 
        text.visible=true
       

  startstate();
}
drawSprites();
  if(gamestate==="level1"){
    playlevel1();
    if(keyDown(RIGHT_ARROW)){
      player.x = player.x+5;
    }
  
    if(keyDown(LEFT_ARROW)){
      player.x = player.x - 5;
    }
  
    if(keyDown("space")){
      player.velocityY =  - 10;
    }
    player.velocityY = player.velocityY + 0.5; 
  
  }
 
  if(gamestate==="level2"){
    textSize(50)
    player.destroy();
    box.destroy();
    boxinv.destroy(); 
    text("u entered next level",300,200)
    playLevel2();

    if(keyDown(RIGHT_ARROW)){
      player2.x = player2.x+5;
    }
  
    if(keyDown(LEFT_ARROW)){
      player2.x = player2.x - 5;
    }
  
    if(keyDown("space")){
      player2.velocityY =  - 10;
    }
    player2.velocityY = player2.velocityY + 0.5; 
  
  }

  }

  function setstart(){
  
  play=createSprite(500,500,50,50)

  
}
function startstate(){


  if(mousePressedOver(play)){
    
    clear();
    gamestate="level1";
  }
}
function setlevel1()
{
  player = createSprite(200,530,40,40);
  player.visible=false
  box = createSprite(700,540,40,40);
  box.visible=false;
  boxinv= createSprite(720,540,10,40);
  boxinv.visible=false;
  box.debug=true;
  box.setCollider("rectangle",0,0,40,40)
  station = createSprite(900,570,200,20);
  station.shapeColor = "red";
station.visible=false;
  station.setCollider("rectangle",0,0,200,25);
  ground = createSprite(400,570,800,20);
  ground.visible=false;
  ground2 = createSprite(1100,570,200,20);
  
 ground2.visible=false;
}
function playlevel1(){
  player.visible=true;
 box.visible=true;
 station.visible=true;
  ground.visible=true
  ground2.visible=true;
  play.visible=false;
  
 if(box.isTouching(station)){
  textSize(20);
  fill("black");
  text("You  Delivered The Parcel !",600,400);
  
  Lvl2Button = createSprite(400,400,30,30);
  if(mousePressedOver(Lvl2Button)){
    gamestate = "level2"
    setLevel2();  

  }

 }  
  player.collide(ground);
  player.collide(station);
  player.collide(ground2);

  if(player.isTouching(box))
  {
    box.x=box.x+5
    boxinv.x=boxinv.x+5
    }
    if(player.isTouching(boxinv))
    {
      box.x=box.x-5
      boxinv.x=boxinv.x-5
      }
      

}

function setLevel2(){

  platformlvl2 = createSprite(400,500,30,20);
  platformlvl2.visible = false;
  platform2lvl2 = createSprite(550,425,30,20);
  platform2lvl2.visible = false;
  platform3lvl2 = createSprite(700,350,30,20);
  platform3lvl2.visible = false;
  platform4lvl2 = createSprite(850,225,70,20);
  platformlvl2.visible = false;
  

  player2 = createSprite(200,530,40,40);
  player2.visible=false

  box2 = createSprite(850,200,40,40);
  box2.visible=false;
  boxinv2= createSprite(870,200,10,40);
  boxinv2.visible=false;
  box2.debug=true;
  box2.setCollider("rectangle",0,0,40,40)

}

function playLevel2(){
  player2.visible=true;
  box2.visible=true;
  station.visible=true;
  ground.visible=true
  ground2.visible=true;
  platformlvl2.visible=true
  platform2lvl2.visible=true
  platform3lvl2.visible=true
  platform4lvl2.visible=true
  
 if(box.isTouching(station)){
  textSize(20);
  fill("black");
  text("You  Delivered The Parcel !",600,400);
  
  Lvl2Button = createSprite(400,400,30,30);
  if(mousePressedOver(Lvl2Button)){
    gamestate = "level2"
  }

 }
  player2.collide(ground);
  player2.collide(station);
  player2.collide(ground2);
  player2.collide(platformlvl2);
  player2.collide(platform2lvl2);
  player2.collide(platform3lvl2);
  player2.collide(platform4lvl2);

  if(player2.isTouching(box2))
  {

    box2.y=box2.y+20
    boxinv2.y=boxinv2.y+20
    }
    if(player2.isTouching(boxinv2))
    {
      box2.x=box2.x-5
      boxinv2.x=boxinv2.x-5
      }
      

}
