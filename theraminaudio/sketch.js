var bg
var img
var osc
var soundFile, reverb;
var playing = false


function preload() {
  img = loadImage("assets/musicnote01.png")
  soundFile = loadSound('assets/DJsoundplane.mp3')
}

function setup() {
  bg = loadImage("assets/bkgrnd02.jpg")
  createCanvas(windowWidth, windowHeight)
  reverb = new p5.Reverb()
  soundFile.disconnect()
  reverb.process(soundFile, 2, 4)
  soundFile.play()
  osc = new p5.Oscillator()
  osc.setType('triangle')
  osc.freq(240)
  osc.amp(0)
  osc.start()
}

function draw() {
  background(bg)

  osc.freq( mouseX, 0.01 )

  fill(255,100,255,80)
  stroke(226, 204, 0)
  image(img,mouseX,mouseY,40,40)
  tint(255,150)
  
  var x = random(width)
  var y = random(height)
  var w = 30
  var h = 30
  rect(x,y,w,h)
}

function mouseClicked(){
  if (mouseX > 0 && mouseX < width && mouseY < height && mouseY >0){
    if (!playing){
      osc.amp(0.5,0.5)
      playing = true
    } else{
      osc.amp(0,0.5)
      playing = false
    }
  }
  
  
}




