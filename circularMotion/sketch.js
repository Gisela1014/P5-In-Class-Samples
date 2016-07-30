var x = 0
var y = 0

function setup() {
  createCanvas(500,500)
}

function draw() {
  //x coordinate of our shape
  var circleX = sin(x)
  //makes radius of rotation be 200
  circleX = circleX * 200
  //centers our rotation on the middle of the canvas or x-axis
  circleX = circleX + width/2
  
  //y coordinate of our shape
  var circleY = cos(x)
  //makes radius of rotation be 200
  circleY = circleY * 200
  //centers our rotation on the middle of the canvas or y-axis
  circleY = circleY + width/2
  
  ellipse(circleX, circleY, 20, 20)
  
  //ellipse(sin(x)*200+width/2, cos(y)*200+100, 20,20)
  
  x = x + 0.02
  
  
}