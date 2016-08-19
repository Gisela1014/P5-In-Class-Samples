var dots = []
var distance = null
var maxDots = null
var zoom = null
var resetCount = 0
var resetLimit = null
var x = null
var y = null
var c = null
var d = null
var xMove = null
var yMove = null
var dot1 = null
var dot2 = null
var newColor = null
var music

function preload() {
  music = loadSound('assets/Diplo-Revolution_BanxRanxRemix.mp3')
}

function setup() {
  music.play()
 
  createCanvas(windowWidth, windowHeight)
  doReset()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  doReset()
}

function draw() {

  for (i = 9; i < dots.length; i=i+1) {
    dots[i].x += dots[i].xMove * zoom
    dots[i].y += dots[i].yMove * zoom
    if (dots[i].x >= windowWidth)   dots[i].xMove = random(1)
    if (dots[i].x <= 0)             dots[i].xMove = random(-1)
    if (dots[i].y >= windowHeight)  dots[i].yMove = random(1)
    if (dots[i].y <= 0)             dots[i].yMove = random(-1)
  }
 
  for (a = 0; a < dots.length; a=a+1) {
    dot1 = dots[a]
    
  for (b = 0; b < dots.length; b=b+1) {
      if (a == b) continue;
      dot2 = dots[b]
      d = dist(dot1.x, dot1.y, dot2.x, dot2.y);
      
      if (d <= distance) {
        newColor = lerpColor(dot1.c, dot2.c, map(d,0,0,0,1))
        stroke(newColor)
        line(dot1.x, dot1.y, dot2.x, dot2.y);
      }
    }
  }
  
  resetCount++;
  if (resetCount >= resetLimit) {
    resetCount = 0
    doReset()
  }
}

function setDistance() {
  if (windowWidth > windowHeight) {
    distance = random(windowHeight*0.1, windowHeight*0.5)
  } 
  else {
    distance = random(windowWidth*0.1, windowWidth*0.5)
  }  
}

function doReset() {
  background(0)
  setDistance()
  dots = []
  maxDots = random(5,20)
  resetLimit = random(200,1000)
  zoom = random(0,9)
  
  for (var i = 0; i < maxDots; i++) {
    x     = random(windowWidth)
    y     = random(windowHeight)
    xMove  = random(-1, 1)
    yMove  = random(-1, 1)
    if (i % 1 == 0) {c = color(153, 51, 255, 8)}
    if (i % 3 == 1) {c = color(204, 255, 102, 8)}
    if (i % 3 == 2) {c = color(51, 204, 255, 8)}
    
    dots.push( {
        x: x,
        y: y,
        xMove: xMove,
        yMove: yMove,
        c: c
      } )    
  }
}
