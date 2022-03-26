var bg,bgImg;
var player, shooterImg, shooter_shooting;
var bull, bullImg;
var life;
var PLAY = 0;
var END = 1;
var GameState = PLAY;

var zom;


var playerLife = 3;
var score = 0;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  zomImg = loadImage("assets/zombie.png");
  bullImg = loadImage("assets/bull.png");

  bgImg = loadImage("assets/img.jpg")

  life_1 = loadImage("assets/heart_1.png");
  life_2 = loadImage("assets/heart_2.png");
  life_3 = loadImage("assets/heart_3.png");

}


function setup() {
  
  createCanvas(windowWidth,windowHeight);

//creating the player sprite
  player = createSprite(displayWidth/4-200, displayHeight/2+180, 50, 50);
  player.addImage(shooterImg)
  player.scale = 0.5
  player.debug = true
  player.setCollider("rectangle",0,0,300,300)

}

function draw() {
  background(bgImg); 

  if(GameState === PLAY){

    fill("white")
    text("Hello: " + score, displayWidth-200,100);

    //moving the player up and down and making the game mobile compatible using touches
    if(keyDown("d")||touches.length>0){
      player.x = player.x+10
    }

    if(keyDown("a")||touches.length>0){
      player.x = player.x-10
    }

    //release bullets and change the image of shooter to shooting position when space is pressed
    if(keyWentDown("s")){
    
      player.addImage(shooter_shooting)
    
    }

    //player goes back to original standing image once we stop pressing the space bar
    else if(keyWentUp("s")){
      player.addImage(shooterImg)
    }

    // if(zom.touches === player){
    //   playerLife = playerLife-1;
    //   zom.visible = false;
    // }

    // if(zom.(bull)){
    //   playerLife=playerLife-1;
    // }

    drawSprites();

      zombie();
      bullet();
      lives()

  } 
  else if(GameState === END) {
  
  }
   

  if(playerLife===3){
    //life.addImage("heart",life_3);  
    image(life_3, displayWidth/10-150, displayHeight/10-75, 200,80);
  }
  if(playerLife===2){
    //life.addImage("heart",life_2);
    image(life_2, displayWidth/2, displayHeight/10-75, 200,80);
    image(life_1, displayWidth/10-200, displayHeight/10-75, 200,80);
  }
  if(playerLife===1){
    image(life_1, displayWidth/10-200, displayHeight/10-75, 200,80);
    // life.addImage("heart",life_1);  
  }
}

function lives(){
  life = createSprite(displayWidth/10-50, displayHeight/10 - 50);
  life.scale = 0.3;
}

function bullet(){
  if (keyCode === 32){
    var bull = createSprite(player.x + 80,player.y-40, 5,5);
    bull.shapeColor = "white";
    bull.addImage(bullImg);
    bull.scale = 0.03;
    bull.velocityX = 30;
  }
}

function zombie(){
  if(frameCount % 100 === 0){
    zom = createSprite(displayWidth+50, displayHeight/2 + 205, 50, 50);
    zom.addImage(zomImg);
    zom.scale = 0.2;
    zom.velocityX = -15;
  }
}

