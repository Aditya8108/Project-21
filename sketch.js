
var fixedRect, movingRect;
var o1,o2,o3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  o1=createSprite(70,70,100,50);
  o2=createSprite(70,170,100,50);
  o3=createSprite(300,250,50,100);
  o1.shapeColor="green";
  o2.shapeColor="green";
  o3.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if( isTouching(movingRect,o1)){
  movingRect.shapeColor = "blue";
  o1.shapeColor = "blue";}
 else{
  movingRect.shapeColor = "green";
  o1.shapeColor = "green";
 }

 if( isTouching(movingRect,o2)){
  movingRect.shapeColor = "blue";
  o2.shapeColor = "blue";}
 else{
  movingRect.shapeColor = "green";
  o2.shapeColor = "green";
 }

 if( isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";}
 else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
 }

 if( isTouching(movingRect,o3)){
  movingRect.shapeColor = "blue";
  o3.shapeColor = "blue";}
 else{
  movingRect.shapeColor = "green";
  o3.shapeColor = "green";
 }

  drawSprites();
}