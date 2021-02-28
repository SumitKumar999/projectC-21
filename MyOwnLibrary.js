function collideWall(){
    if(Zenia.x-wall.x < Zenia.width/2 + wall.width/2 && wall.x-Zenia.x < Zenia.width/2 + wall.width/2){
      Zenia.shapeColor = "red"
      Zenia.velocityX = 0;
    }
  
    if(Tourus.x-wall2.x < Tourus.width/2 + wall2.width/2 && wall2.x-Tourus.x < Tourus.width/2 + wall2.width/2){
      Tourus.shapeColor = "orange"
      Tourus.velocityX = 0;
    }
  
    if(Cyclap.x-wall3.x < Cyclap.width/2 + wall3.width/2 && wall3.x-Cyclap.x < Cyclap.width/2 + wall3.width/2){
      Cyclap.shapeColor = "brown"
      Cyclap.velocityX = 0;
    }
  }