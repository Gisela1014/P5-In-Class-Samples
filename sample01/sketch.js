var x = 0
var y = 15

function setup() {
  createCanvas(400,400)
  background(153, 204, 255)
  frameRate(5)
}

function draw() {
  //background(153, 204, 255)
  fill(0, 0, 0, 50)
  stroke(255)
  ellipse(mouseX,mouseY,120,120)
  ellipse(x,y,25,25) 
  fill(0,0,120,20)
  rect(x,y,50,50)
  line(x,250,100,50,10)
  fill(0,0,200,20)
  ellipse(170,165,100,100)
  ellipse(370, 450, 550,550)
  fill(255,255,0,10)
  line(450,y,150,70,5)
  ellipse(250,80,40,40)
  ellipse(80,250,40,40)
  x = x + 5
  y = y + 4
  console.log(x)
  
  text("Digital Media Programming",220,330)

}