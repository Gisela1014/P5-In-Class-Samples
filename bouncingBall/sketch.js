var x = 0
var y = 0
var currentColor
//var xincrement = 1
//var yincrement = 1

var movingDown = true
var movingRight = true 

function setup() {
  createCanvas(800,300)
  currentColor = color(0)
  noStroke()
}

function draw() {
  //draw background each frame to cover previous contents
  //background(0)

  //make x bigger by 1 pixel with each frame
  //x = x + xincrement
  //y = y + yincrement
 
  /*if (y > height) {
    yincrement = -1
  }*/
  
  if (movingDown) {
    y = y + random(0,10)
    currentColor = color(random(0,255), random(0,255), random(0,255), 50)
  } else {
    y = y - random(0,10)
  }
  if (movingRight) {
    x = x + random(0,10)
  } else {
    x = x - random(0,10)
  }
  
  if (y > height){
    movingDown = false
  }
  if (y < 0) {
    movingDown = true
  }
  
  if (x > width){
    movingRight = false
  }
  if (x < 0) {
    movingRight = true
  }
  
  //draw our circle at current x and y coordinates
  fill(currentColor)
  ellipse(x,y,50,50)
  
  
}