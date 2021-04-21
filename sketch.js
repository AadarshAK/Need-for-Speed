var car, carimg, road, aimg,bimg, a, b, r, speed, rs, bulletimage, bulletGroup;
var gunshot;
var score=0, carSound,germS,germI;
var germG

function preload(){
  carimg=loadImage("car.png");
  bulletimage=loadImage("bulletfinal.png");
  road=loadImage("r.jpg");
  aimg=loadImage("acc.png");
  brake=loadImage("brake.png");
  gunshot=loadSound("gunshot.mp3");
  carSound=loadSound("car.mp3");
  germI=loadImage("germ0.png");
}

function setup(){
   createCanvas(displayWidth,displayHeight);

 /*  rs=createSprite(displayWidth/2,displayHeight/2,displayWidth, displayHeight);
   rs.addImage(road);*/
   //rs.velocityX=-5; 
   car=createSprite(displayWidth/2-280,displayHeight/2+220,20,20);
   car.addImage(carimg);
   car.scale=0.25;
   germG= new Group();
  
   a=createSprite(displayWidth/2+400,displayHeight/2+300,10,10);
   a.addImage(aimg);
   

   b=createSprite(displayWidth/2+500,displayHeight/2+300,10,10);
   b.addImage(brake);

   r=createSprite(displayWidth/2-550,displayHeight/2+280,40,40);
   r.shapeColor=("green"); 




   bulletGroup=new Group();
}

function draw(){
   background(road);
   //rs.velocityX=-10;
   
 

 /*  if(rs.x>150){
       rs.x=displayWidth/2;
   }*/

   score = score + Math.round(getFrameRate()/60);
   console.log(speed);
   

   if((mousePressedOver(a))||(keyDown("RIGHT_ARROW"))){
       car.velocityX=10;
      // carSound.stop();
     //  carSound.play();
   }

   if((mousePressedOver(b))||(keyDown("SPACE"))){
       car.velocityX=0;
       //carSound.stop();
   }

   if((mousePressedOver(r))||(keyDown("LEFT_ARROW"))){
       car.velocityX=-10;
       //carSound.stop();
      // carSound.play();
   }

   if(keyDown("s")){
       bullet= createSprite(car.x, car.y,40,10);
       bullet.velocityX=20;
       gunshot.play();
       bullet.scale=0.12;
       bulletGroup.add(bullet);
       bullet.addImage(bulletimage);  
    }

    if(bulletGroup.isTouching(germG)){
      germG.destroyEach();
    }

    if(germG.isTouching(car)){
      textSize(32);
      fill("red");
      text("Game Over",displayWidth/2,displayHeight/20);
      Image("gameover.jpg",displayWidth/2,displayHeight/2,50,50);
      car.destroy();
      germG.destroyEach();
      score.destroy()
      a.destroy()
      b.destroy()
      r.destroy()
      //carSound.destroy();


    }


    if(car.velocityX=-10){
      r.velocityX=-10;
      b.velocityX=-10;
      a.velocityX=-10;
    }  
   
    if(car.velocityX=10){
      r.velocityX=10;
      b.velocityX=10;
      a.velocityX=10;
    }

    camera.position.x=car.x+200;    
   spawnGerms();
   drawSprites();

   textSize(32);
   fill("green");
   text("Score : "+score,car.x,40);


}

function spawnGerms(){
  if(frameCount%200===0){
    germS=createSprite(car.x+1000,car.y,40,40);
    germS.addImage(germI);
    germS.scale=0.5;
    germS.velocityX=-(6 + 3*score/100);  
    germG.add(germS) 
  }
  
}