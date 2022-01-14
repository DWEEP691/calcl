var canvas;
var ui = '';
var result;
var dc,mc;
var r,posY;
var calc;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    calc = new cal();
}

function draw(){
    background("lightgreen");
    calc.display();
    fill("black");
    rect();
}

function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
}