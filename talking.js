//declare variables
const canvas = document.querySelector('canvas');
const cxt = canvas.getContext('2d');
var canvasw;
var maxr = canvasw/2;
var ra = 0;
var rb;
var PI = Math.PI;
var binary = [];
var words=0;
var scale;

//functions start
function convert() {
    binary=[];
    var input = document.getElementById("ti1").value;
    var english = input.split(" ");
    words = english.length;
    scale = maxr/words;
    rb = ra+scale;
    for (var i = 0; i < input.length; i++) {
        binary.push(input[i].charCodeAt(0).toString(2));
    }
    print(binary);
  }

function binaryCircles() {
convert()
  for (var i = 0; i < binary.length; i++){  
  if (binary[i] !== 00100000){
    bonk = binary.toString[i]
    cxt.arc(midx, midy, ra, 0, 2*PI)
    for (var i=0; i < bonk.length;  i++){
        var hold = scale/bonk.length;
        var rb=ra+hold;
        var angle = 270;
        var read = bonk.substr(i,1);
      if (read==="1"){
        var xa=midx+ra(Math.cos(angle));
        var ya=midy+ra(Math.sin(angle));
        var xb=midx+rb(Math.cos(angle));
        var yb=midy+rb(Math.sin(angle));
        cxt.moveTo(xa,ya);
        cxt.beginPath();
        cxt.moveTo(xb,yb);
        cxt.stroke();
      }
      angle=angle+45;
      }
    }
    else{
        ra=0.01;
        midy=midy+2*rb;
    }
    
  }
}