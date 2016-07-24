var source, fft, lowPass;
var doCenterClip = false;
var centerClipThreshold = 0.0;

var preNormalize = true;
var postNormalize = true;

var bg;
var y = 0;
var img

function preload(){
  img = loadImage("assets/mickey.png")
  tint(255,150)
}

function setup() {
  bg = loadImage("assets/bkgrnd01.jpg")
  createCanvas(windowWidth, windowHeight);

  source = new p5.AudioIn();
  source.start();

  lowPass = new p5.LowPass();
  lowPass.disconnect();
  source.connect(lowPass);

  fft = new p5.FFT();
  fft.setInput(lowPass);
}


function draw() {
  background(bg)
  
  image(img,mouseX,mouseY,100,115)
  
  //ellipse(mouseX,mouseY,50,50)
  
  var x = random(width)
  var y = random(height)
  var w = 20
  var h = 20
  ellipse(x,y,w,h)
  line(x,y,w,h)
  
  
  /* AMPLITUDE TRACKING */
  
  // Get the overall volume (between 0 and 1.0)
  var volume = source.getLevel();
  // Graph the overall potential volume, w/ a line at the threshold
  var x = map(volume, 0, 0.5, 0, 255,10)
  // Draw
  fill(x,y)
  rect(450,700,width,10)
  rect(400,650,width,10)
  rect(350,600,width,10)
  rect(300,550,width,10)
  rect(250,500,width,10)
  rect(300,450,width,10)
  rect(350,400,width,10)
  rect(400,350,width,10)
  rect(450,300,width,10)
  rect(500,250,width,10)
  rect(550,200,width,10)
  rect(600,150,width,10)
  rect(650,100,width,10)
  rect(700,50,width,10)
  
  /* PITCH TRACKING */
  // array of values from -1 to 1
  var timeDomain = fft.waveform(1024, 'float32')
  var corrBuff = autoCorrelate(timeDomain)
  var freq = findFrequency(corrBuff)
  
  
  if (y > 30) {
  colorMode(HSB)
  fill(freq/10,255,255)
  rect(0,500,50,height)  
  rect(50,400,50,height)
  rect(100,450,50,height)
  rect(150,500,50,height)
  rect(200,550,50,height)
  rect(250,480,50,height)
  rect(300,575,50,height)
  rect(350,480,50,height)
  rect(400,400,50,height) 
  rect(450,580,50,height)  
  rect(500,500,50,height)  
  rect(550,700,50,height)
  rect(600,650,50,height)
  rect(650,600,50,height)
  rect(700,675,50,height)
  rect(750,580,50,height)
  
  //var x = width/2
  //var y = random(height)
  //var w = 50
  //var h = 200
  //rect(x,y,w,h)
  
  
  }
    
}


// accepts a timeDomainBuffer and multiplies every value
function autoCorrelate(timeDomainBuffer) {
  
  var nSamples = timeDomainBuffer.length;

  // pre-normalize the input buffer
  if (preNormalize){
    timeDomainBuffer = normalize(timeDomainBuffer);
  }

  // zero out any values below the centerClipThreshold
  if (doCenterClip) {
    timeDomainBuffer = centerClip(timeDomainBuffer);
  }

  var autoCorrBuffer = [];
  for (var lag = 0; lag < nSamples; lag++){
    var sum = 0; 
    for (var index = 0; index < nSamples; index++){
      var indexLagged = index+lag;
      if (indexLagged < nSamples){
        var sound1 = timeDomainBuffer[index];
        var sound2 = timeDomainBuffer[indexLagged];
        var product = sound1 * sound2;
        sum += product;
      }
    }

    // average to a value between -1 and 1
    autoCorrBuffer[lag] = sum/nSamples;
  }

  // normalize the output buffer
  if (postNormalize){
    autoCorrBuffer = normalize(autoCorrBuffer);
  }

  return autoCorrBuffer;
}


// Find the biggest value in a buffer, set that value to 1.0,
// and scale every other value by the same amount.
function normalize(buffer) {
  var biggestVal = 0;
  var nSamples = buffer.length;
  for (var index = 0; index < nSamples; index++){
    if (abs(buffer[index]) > biggestVal){
      biggestVal = abs(buffer[index]);
    }
  }
  for (var index = 0; index < nSamples; index++){

    // divide each sample of the buffer by the biggest val
    buffer[index] /= biggestVal;
  }
  return buffer;
}

// Accepts a buffer of samples, and sets any samples whose
// amplitude is below the centerClipThreshold to zero.
// This factors them out of the autocorrelation.
function centerClip(buffer) {
  var nSamples = buffer.length;

  // center clip removes any samples whose abs is less than centerClipThreshold
  centerClipThreshold = map(mouseY, 0, height, 0,1); 

  if (centerClipThreshold > 0.0) {
    for (var i = 0; i < nSamples; i++) {
      var val = buffer[i];
      buffer[i] = (Math.abs(val) > centerClipThreshold) ? val : 0;
    }
  }
  return buffer;
}

// Calculate the fundamental frequency of a buffer
// by finding the peaks, and counting the distance
// between peaks in samples, and converting that
// number of samples to a frequency value.
function findFrequency(autocorr) {

  var nSamples = autocorr.length;
  var valOfLargestPeakSoFar = 0;
  var indexOfLargestPeakSoFar = -1;

  for (var index = 1; index < nSamples; index++){
    var valL = autocorr[index-1];
    var valC = autocorr[index];
    var valR = autocorr[index+1];

    var bIsPeak = ((valL < valC) && (valR < valC));
    if (bIsPeak){
      if (valC > valOfLargestPeakSoFar){
        valOfLargestPeakSoFar = valC;
        indexOfLargestPeakSoFar = index;
      }
    }
  }
  
  var distanceToNextLargestPeak = indexOfLargestPeakSoFar - 0;

  // convert sample count to frequency
  var fundamentalFrequency = sampleRate() / distanceToNextLargestPeak;
  return fundamentalFrequency;
}