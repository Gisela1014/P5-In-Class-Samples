var number = 0
var x
var i = 1


function setup() {
  createCanvas(600,500)
  
  x = i + 1 
}

function draw() {
  background(180)
  textSize(32)
  text("Let's Count!", 200, 100)
  fill(0, 102, 153)
  
  textSize(62)
  text(number, 250, 300)
  
  //inp = createInput('number')
  
}

function mousePressed() {
  number = x ++
 
 //inp.value("number");
}

//function changeNumber() {
  //number = "0"
//}
