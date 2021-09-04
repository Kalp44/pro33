var bg
var snowImg,snowG

function preload() {
  bg = loadImage("snow3.jpg");
  snowImg = loadImage("snow4.webp");
}


function setup() {
  createCanvas(800,400);
  

  snowG=new Group();
 
}

function draw() {
  background(bg);  
  drawSprites();

  fallSnow();
  
}

function fallSnow() {
  if (World.frameCount % 5 == 0) {
    var snow = createSprite(Math.round(random(20, 740)));
    snow.addImage(snowImg);
    snow.scale=0.12;
    snow.velocityY = 3;
    snow.lifetime = 130;
    snowG.add(snow);
    }
}