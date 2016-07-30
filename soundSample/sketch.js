var song;

function preload() {
  song = loadSound('assets/lucky_dragons_-_power_melody.mp3')
}

function setup() {
  createCanvas(720, 200)
  background(0)
  
  slider = createSlider(0, 255, 100);
  slider.position(10, 10);
  slider.style('width', '80px');
  
  song.loop()
  song.rate( 1 )
}

function draw() {
  console.log( slider.value() )
  var speed = map(slider.value(), 0, 255, 0, 4 )
  song.rate(speed)
}
