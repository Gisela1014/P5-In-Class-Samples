var x = []
var y = []
var circleColor = []
var numberOfCircles = 70
var music


function preload() {
  music = loadSound('assets/Instrumental02.mp3')
}

function setup() {
  createCanvas(1200,800)
  background(0)
  
  music.play()
  
  colors = [
    color(153, 205, 255, 40),
    color(155,150,20,30),
    color(0,102,255,20),
    color(204,0,0,10)
    ]
  
  for (var i=0; i<numberOfCircles; i=i+1) {
    x[i] = width/2
    y[i] = random(0,height)
    circleColor[i] = random(colors)
  }
 
}

function draw() {
  //background(0,0,150,10)
  
  text("DESIGN",random(width/2), random(height))
  textSize(18)
  fill(140,11)
  
  for (var i=0; i<numberOfCircles; i=i+1) {
    x[i] = x[i] + random(-10,10)
    y[i] = y[i] + random(-5,5)
    
    for (var j=0;j<numberOfCircles;j=j+1){
      var distance = dist( x[i], y[i], x[j], y[j] )
      
      if (distance < 40) {
        stroke(circleColor[i] )
        line(x[i], y[i], x[j], y[j] )
        //point(x[i], y[i], x[j], y[j] )
      }
      
    }
    
   if(frameCount > 550){
      noLoop()
    }
}
}