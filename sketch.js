var changa,c1,p1,p2,p3,p4 ;
var canvas;
var random;

var player;




function preload(){
  changa = loadImage("sprites/changa.png")
}

function setup() {
 canvas=  createCanvas(1800,1800);
c1 =  createSprite(350, 300, 1200, 1000);
 c1.addImage(changa);
 c1.scale = 0.7;

 p1 = createSprite(330,120,15,15);
 p2 = createSprite(370,120,15,15);
 p3 = createSprite(330,485,15,15);
 p4 = createSprite(370,485,15,15);

 random = Math.round(random(1,8));
 
}

function draw() {
  background(255,255,255);  
  //text(randomNumber(1,6));
   console.log(random);
  
  drawSprites();
}