numSquare = 9
squareRoot = Math.sqrt(numSquare)
fr1 = 1
h1 = (255, 0, 0)
fr2 = 4
h2 = (0, 255, 0)
fr3 = 7
h3 = (0, 0, 255)
fr4 = 2
h4 = (255, 0, 0)
fr5 = 5
h5 = (0, 0, 255)
fr6 = 8
h6 = (255, 0, 0)
fr7 = 3
h7 = (255, 0, 0)
fr8 = 6
h8 = (255, 0, 0)
fr9 = 9
h9 = (255, 0, 0)
// save this file as sketch.js
// Sketch One
fr = []
hues = []
xS = []
dax = 0
xSize = 320
ySize = 240
currLeft = 0
currTop = 0

r = 100
g = 50
b = 0

for(i=0; i<numSquare; i++){
  if(i<3){
    hues[i] = [216,110,0]
  }
  else if(i<6){
    hues[i] = [234,96,96]
  }
  else{
    hues[i] = [243,179,70]
  }

  
  
}
allwins = []



var xTracker = 0
for(i=0;i<numSquare;i++){
  

  var s = function( p ) { // p could be any variable name
    let capture;
    var x = 100; 
    var y = 100;
    const cntVal = i
    const myX = xTracker;
    if((cntVal+1)%squareRoot == 0){
      xTracker += (xSize/squareRoot)
      currLeft += xSize
      currTop -= 720
      console.log("XTRACKER")
      console.log(xTracker)
    }
    
    console.log("X")
    console.log(myX)
    
    p.setup = function() {
      
      p.createCanvas(320, 240);
      capture = p.createCapture(p.VIDEO);
      capture.size(320, 240);
      
      capture.hide();
      p.frameRate(Math.floor(Math.random() * numSquare*2)+1)
      
    };

  
    p.draw = function() {

      p.background(255);
      p.tint(hues[cntVal][0], hues[cntVal][1], hues[cntVal][2])
      p.image(capture, 0, 0)
      let c = p.get(myX, (cntVal%squareRoot)*(p.height/squareRoot), (p.width/squareRoot), (p.height/squareRoot))
      p.background(255)
      p.image(c, 0, 0, p.width, p.height);
    };
  };
  daName = "c"+String(i+1);
  d3.select("body").selectAll('div').append('div')
  //style('position','absolute').style('left', String(currLeft)+"px").style('top', String(currTop)+"px")
  allwins.push(new p5(s, daName));
  

}


/*
var s = function( p ) { // p could be any variable name
  let capture;
  var x = 100; 
  var y = 100;
  p.setup = function() {
    p.createCanvas(320, 240);
    capture = p.createCapture(p.VIDEO);
    capture.size(320, 240);
    capture.hide();
  };

  p.draw = function() {
    p.frameRate(fr1)
    p.background(255);
    p.tint(247,110,17)
    p.image(capture, 0, 0, 320, 240);
    let c = p.get(0, 0, 106.667, 80)
    p.background(255)
    p.image(c, 0, 0, 320, 240);
  };
};
var myp5 = new p5(s, 'c1');

// Sketch Two
var t = function( p ) { 
  var x = 100.0; 
  var y = 100; 
  var speed = 2.5; 
  p.setup = function() {
    p.createCanvas(320, 240);
    capture = p.createCapture(p.VIDEO);
    capture.size(320, 240);
    capture.hide();
  };

  p.draw = function() {
    p.frameRate(fr2)
    p.background(255);
    p.tint(255,159,69)
    p.image(capture, 0, 0, 320, 240);
    let c = p.get(0, 80, 106.667, 80)
    p.background(255)
    p.image(c, 0, 0, 320, 240);

  };
};
var myp5 = new p5(t, 'c2');

// Sketch Three
var t = function( p ) { 
  var x = 100.0; 
  var y = 100; 
  var speed = 2.5; 
  p.setup = function() {
    p.createCanvas(320, 240);
    capture = p.createCapture(p.VIDEO);
    capture.size(320, 240);
    capture.hide();
  };

  p.draw = function() {
    p.frameRate(fr3)
    p.background(255);
    p.tint(255,188,128)
    p.image(capture, 0, 0, 320, 240);
    let c = p.get(0, 160, 106.667, 80)
    p.background(255)
    p.image(c, 0, 0, 320, 240);
  };
};
var myp5 = new p5(t, 'c3');


// Sketch Four
var t = function( p ) { 
  var x = 100.0; 
  var y = 100; 
  var speed = 2.5; 
  p.setup = function() {
    
    p.createCanvas(320, 240);
    capture = p.createCapture(p.VIDEO);
    p.translate(320,-720);
    capture.size(320, 240);
    capture.hide();
  };

  p.draw = function() {
    p.frameRate(fr4)
    p.background(255);
    p.tint(247,110,17)
    p.image(capture, 0, 0, 320, 240);
    let c = p.get(106.667, 0, 106.667, 80)
    p.background(255)
    p.image(c, 0, 0, 320, 240);
  };
};
var myp5 = new p5(t, 'c4');

// Sketch Five
var t = function( p ) { 
  var x = 100.0; 
  var y = 100; 
  var speed = 2.5; 
  p.setup = function() {
    p.createCanvas(320, 240);
    capture = p.createCapture(p.VIDEO);
    capture.size(320, 240);
    capture.hide();
  };

  p.draw = function() {
    p.frameRate(fr5)
    p.background(255);
    p.tint(255,159,69)
    p.image(capture, 0, 0, 320, 240);
    let c = p.get(106.667, 80, 106.667, 80)
    p.background(255)
    p.image(c, 0, 0, 320, 240);
  };
};
var myp5 = new p5(t, 'c5');


// Sketch Six
var t = function( p ) { 
  var x = 100.0; 
  var y = 100; 
  var speed = 2.5; 
  p.setup = function() {
    p.createCanvas(320, 240);
    capture = p.createCapture(p.VIDEO);
    capture.size(320, 240);
    capture.hide();
  };

  p.draw = function() {
    p.frameRate(fr6)
    p.background(255);
    p.tint(255,188,128)
    p.image(capture, 0, 0, 320, 240);
    let c = p.get(106.667, 160, 106.667, 80)
    p.background(255)
    p.image(c, 0, 0, 320, 240);
  };
};
var myp6 = new p5(t, 'c6');

translate(320,-720) 

// Sketch Seven
var t = function( p ) { 
  var x = 100.0; 
  var y = 100; 
  var speed = 2.5; 
  p.setup = function() {
    p.createCanvas(320, 240);
    capture = p.createCapture(p.VIDEO);
    capture.size(320, 240);
    capture.hide();
  };

  p.draw = function() {
    p.frameRate(fr7)
    p.background(255);
    p.tint(247,110,17)
    p.image(capture, 0, 0, 320, 240);
    let c = p.get(213.334, 0, 106.667, 80)
    p.background(255)
    p.image(c, 0, 0, 320, 240);
  };
};
var myp5 = new p5(t, 'c7');

// Sketch Eight
var t = function( p ) { 
  var x = 100.0; 
  var y = 100; 
  var speed = 2.5; 
  p.setup = function() {
    p.createCanvas(320, 240);
    capture = p.createCapture(p.VIDEO);
    capture.size(320, 240);
    capture.hide();
  };

  p.draw = function() {
    p.frameRate(fr8)
    p.background(255);
    p.tint(255,159,69)
    p.image(capture, 0, 0, 320, 240);
    let c = p.get(213.334, 80, 106.667, 80)
    p.background(255)
    p.image(c, 0, 0, 320, 240);
  };
};
var myp5 = new p5(t, 'c8');


// Sketch Nine
var t = function( p ) { 
  var x = 100.0; 
  var y = 100; 
  var speed = 2.5; 
  p.setup = function() {
    p.createCanvas(320, 240);
    capture = p.createCapture(p.VIDEO);
    capture.size(320, 240);
    capture.hide();
  };

  p.draw = function() {
    p.frameRate(fr9)
    p.background(255);
    p.tint(255,188,128)
    p.image(capture, 0, 0, 320, 240);
    let c = p.get(213.334, 160, 106.667, 80)
    p.background(255)
    p.image(c, 0, 0, 320, 240);
  };
};
var myp5 = new p5(t, 'c9');
*/
