var fixedRect, movingRect, obj1, obj2, obj3, obj4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  obj1 = createSprite(500,300,40,30);
  obj2 = createSprite(400,100,40,100);
  obj3 = createSprite(20,500,80,50);
  obj4 = createSprite(100,30,50,40);

  movingRect.velocityY = -5;
  obj2.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(obj2, movingRect);
  
  drawSprites();
}

