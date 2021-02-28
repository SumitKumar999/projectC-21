var wall, Zenia, Tourus, Cyclap, wall2, wall3;

function setup() {
  createCanvas(800,400);
  wall = createSprite(750, 100, 30, 100);
  wall2 = createSprite(750, 220, 30, 100);
  wall3 = createSprite(750, 340, 30, 100);
  Zenia = createSprite(50,100,20,20);
  Tourus = createSprite(50, 220, 20, 20);
  Cyclap = createSprite(50,340,20,20);
  Zenia.shapeColor = "green"
  Tourus.shapeColor = "white"
  Cyclap.shapeColor = "skyblue"
}

function draw() {
  background("black"); 
  Zenia.velocityX = 60;
  Tourus.velocityX = 50;
  Cyclap.velocityX = 45;

  Zenia.shapeColor = "green"
  Tourus.shapeColor = "white"
  Cyclap.shapeColor = "skyblue"

  if(collideWall(Zenia,wall)) {
    Zenia.shapeColor = "red";
  }
  
  if(collideWall(Tourus,wall2)) {
    Tourus.shapeColor = "orange";
  }

  if(collideWall(Cyclap,wall3)) {
    Cyclap.shapeColor = "brown";
  }

  drawSprites();
}

