var colors = ["green", "blue"]
  

function setup() {
  createCanvas(500,500)
  frameRate(5)
}

function draw() {
  if(random(0,1) > 0.1 ) {
  background( "red" )
  } else {
    background( "blue" )
  }
}