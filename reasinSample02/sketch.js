var x = []
var y = []
var circleColor = []
var numberOfCircles = 300

function setup() {
  createCanvas(1200,800)
  //background(70,150,180)
  colors = [
    color(0,0,0,40),
    color(255,255,255,40),
    color(155,150,20,30),
    color(220,30,50,20)
    ]
  //assign the starting x and y point
  for (var i=0; i<numberOfCircles; i=i+1) {
    x[i] = random(0,width)
    y[i] = random(0,height)
    circleColor[i] = random(colors)
  }
  
 
}

function draw() {
  //background(0,0,150,10)
  for (var i=0; i<numberOfCircles; i=i+1) {
    //draw circles
    //ellipse(x[i],y[i],50,50)
    //move circles in random direction
    x[i] = x[i] + random(-5,5)
    y[i] = y[i] + random(-5,5)
    
    for (var j=0;j<numberOfCircles;j=j+1){
      //find distance to every other cirle
      var distance = dist( x[i], y[i], x[j], y[j] )
      
      if (distance < 60) {
        stroke(circleColor[i] )
        line(x[i], y[i], x[j], y[j] )
        //point(x[i], y[i], x[j], y[j] )
        //arc(x[i], y[i], 50, 50, 0, PI+QUARTER_PI, PIE)
        //noFill()
      }
      
    }
    
   /* if(frameCount > 30){
      noLoop()
    }*/
  }  
}