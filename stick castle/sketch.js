
var p1, p2, p3,p4, b1, r1, ground,p5,p6,p7,p8
function setup() {
  createCanvas(800,400);
  ground= createSprite(400, 400, 800, 20);
  p1= createSprite(50, 340, 30, 300);
  p2= createSprite(750,340, 30, 300)
p3 = createSprite(100, 340, 30, 250)
p4 = createSprite(700, 340, 30, 250)
p5 = createSprite(150, 340, 30, 200)
p6 = createSprite(650, 340, 30, 200)
p7= createSprite(200,340,30,150)
p8= createSprite(600,340,30,150)
}

function draw() {
  background(255,255,255);  
  triangle(200,440,250,300,300,440)
  triangle(300,440,350,300,400,440)
  triangle(400,440,450,300,500,440 )
  triangle(500,440,550,300,600,440 )
  triangle(250,300,350,300,300,260 )
  triangle(350,300,450,300,400,260 )
  triangle(450,300,550,300,500,260 )
  triangle(300,260,400,260,350,120  )
  triangle(400,260,500,260,450,120  )
  ellipse(400,108,100)




  drawSprites();
}