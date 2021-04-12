var cat , mouse , catImg , mouseImg , background1 , background1Img 



function preload() {
    catImg = loadAnimation ("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg = loadAnimation("images/mouse1.png")
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
    background1Img = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
 background1 = createSprite(500,400,50,50);
 background1.addImage(background1Img);
 cat=createSprite(745,630);
 cat.addAnimation("sit" ,catImg)
 cat.scale = 0.1;
 mouse = createSprite(395,640);
 mouse.addAnimation("stand" , mouseImg)
 mouse.scale = 0.1

}

function draw() {

    background(255);
     if(cat.x - mouse.x< cat.width/2 - mouse.width/2){
         cat.velocityX=0;
         cat.x = 420;
         cat.addAnimation("stand", catImg3);
         cat.changeAnimation("stand");
        mouse.addAnimation("tease2", mouseImg3);
        mouse.changeAnimation("tease2")
     }

    drawSprites();
    text(mouseX + "," + mouseY , mouseX , mouseY);
}


function keyPressed(){

  if (keyCode === LEFT_ARROW){
      cat.velocityX = -4 ;
      cat.addAnimation("run", catImg2);
      cat.changeAnimation("run");
     mouse.addAnimation("tease", mouseImg2);
     mouse.changeAnimation("tease")
  }


}
