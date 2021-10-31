var bgimg;
var Vegito,Vegitoimg;
var ChaosGoku,Chaosimg;
function preload(){
bgimg = loadImage("Arena.jpg");
Vegitoimg = loadImage("Vegito.png");
Chaosimg = loadImage("Chaos Goku.png");
}

function setup() {
  createCanvas(1500,600);

  Vegito = createSprite(224,463,10,10);
  Vegito.addImage(Vegitoimg);
}

function draw(){
background(bgimg);
text(mouseX+","+mouseY,mouseX,mouseY)
drawSprites();

}


