var x
var y
var d
var colors = [ "#000", "#ccc", "#0af", "#fff","#ffff99" ]

function setup() {
  //create our canvas
  createCanvas(1000,600)
  noStroke()
  
  for (var i = 0; i< 3000 ; i++) { 
  //set our variables
  x = random(0,width)
  y = random(0,height)
  d = random(10,30)
  var currentColor = random(colors)
  //use our new color for our paint drip fill 
  fill(currentColor)
  //draw our paint drip (circle)
  ellipse(x,y,d,d)
  }
  
}

function mousePressed() {
   save("myPollackDrawing.jpg")
}
/*function draw() {
  
}

/*
Random parameters     min     max
ellipse color         pick a color
d                     10      300
x                     0       width
y                     0       height
background color      pick a color
*/