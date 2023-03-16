var gun , bullet,  background, redShell, yellowShell, greenShell ,blueShell ,bulletGroup;
var gunImage, bulletImage, green_shellImage, red_shellImage, yellow_shellImage ,blue_shellImage, backgroundImage;
var gameState = "PLAY"

var score =0;
function preload(){  
  backgroundImage = loadImage("pixel.png");
  
  bulletImage = loadImage("bullet.png");
  gunImage = loadImage("gun2.png");
  red_shellImage = loadImage("red.png");
  green_shellImage = loadImage("green.png");
  yellow_shellImage = loadImage("yellow.png");
  blue_shellImage = loadImage("blue.png");
}

function setup() {
  createCanvas(400, 400);
  
  
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 1
  

  gun = createSprite(380,220,20,50);
  gun.addImage(gunImage); 
  gun.scale = 0.35;
  
  
  score = 0  
  redShell= new Group();
  greenShell= new Group();
  blueShell= new Group();
  yellowShell= new Group();
  bulletGroup= new Group();  
}
if(gameState="PLAY")
function draw() {
 background(0);
 
  scene.velocityX = -3 

  if (scene.x < 0){
    scene.x = scene.width/2;
  }
  
 
  gun.y = World.mouseY
  
  
  if (keyDown("space")) {
    createBullet();
  
  }


  
  
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      yellowBalloon();
    }
  }
  
  if (bulletGroup.isTouching(redShell)) {
    
   
    redShell.destroyEach();
    
    bulletGroup.destroyEach();
    score=score+1;
  }

  if (bulletGroup.isTouching(greenShell)) {
    greenShell.destroyEach();
    bulletGroup.destroyEach();
    score=score+3;
  }

  if (bulletGroup.isTouching(blueShell)) {
    blueShell.destroyEach();
    bulletGroup.destroyEach();
    score=score+2;
  }

  if (bulletGroup.isTouching(yellowShell)) {
    yellowShell.destroyEach();
    bulletGroup.destroyEach();
    score=score+1;
  }
 

  drawSprites();
  text("Score: "+ score, 300,50);
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_shellImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redShell.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_shellImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueShell.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_shellImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenShell.add(green);
}

function yellowBalloon() {
  var yellow = createSprite(0,Math.round(random(20, 370)), 10, 10);
  yellow.addImage(yellow_shellImage);
  yellow.velocityX = 3;
  yellow.lifetime = 150;
  yellow.scale = 0.1
  yellowShell.add(yellow);
}



 function createBullet() {
  var bullet= createSprite(100, 100, 60, 10);
  bullet.addImage(bulletImage);
  bullet.x = 360;
  bullet.y=gun.y;
  bullet.velocityX = -4;
  bullet.lifetime = 100;
  bullet.scale = 0.1;
  
 
  bulletGroup.add(bullet);
  
   
}


