var x
var y

function setup() {
  createCanvas(1200,800)
  x = 100
  y = 100
}

function draw() {
  ellipse(x,y,50,50)
  x = x + random(-5,5)
  y = y + random(-5,5)
}