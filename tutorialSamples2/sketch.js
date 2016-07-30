var i

function setup() {
  createCanvas(1050,200)
  background(150,130,150)
  
}

function drawCircles(x, y){
   ellipse(x, y, 60, 60)
   ellipse(x, y, 60, 60)
   ellipse(x, y, 60, 60)
   ellipse(x, y, 60, 60)
   ellipse(x, y, 60, 60)
   ellipse(x, y, 60, 60)
   ellipse(x, y, 60, 60)
   ellipse(x, y, 60, 60)
   ellipse(x, y, 60, 60)
   ellipse(x, y, 60, 60)
}

function draw() {
  fill(0)
  noStroke()
  
  for (var i = 100; i <= 1050; i += 100) {
  drawCircles(i, 100)
  
  }
}