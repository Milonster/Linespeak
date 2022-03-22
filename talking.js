//declare variables
const canvas = document.querySelector('canvas');
const cxt = canvas.getContext('2d');
var canvasw = 500;
var maxr = canvasw/2;
var ra = 0;
var PI = Math.PI;
var binary = [];
var words=0;
var scale;
var midx=canvasw/2;
var midy=canvasw/2;
var english = [];
var xa;
var ya;
var xb;
var yb;

//functions start
function convert() {
  binary=[];
  var input = getText("text_input1");
  english = input.split(" ");
  words = english.length;
  scale = maxr/words;
  midy=midy;
  for (var i = 0; i < input.length; i++) {
  var that = input[i].charCodeAt(0).toString(2);
  while (that.length<8){
      that="0"+that;
  }
    binary.push(that);
  }
  console.log(binary);
}

function binaryCircles() {
  convert();
  var bonk;
  var rb;
  hide();
    for (var i = 0; i < binary.length; i++){  
    if (binary[i] !== "00100000"){
      bonk = binary[i];
      var hold = scale/bonk.length;
      var angle = 3/2*PI;
      for (var q=0; q < bonk.length;  q++){
          rb=ra+hold;
          var read = bonk.substr(q,1);
          cxt.arc(midx-rb, midy, rb, 0, 360, true);
        if (read==="1"){
          xa=midx+ra*Math.cos(angle);
          ya=midy+ra*Math.sin(angle);
          xb=midx+rb*Math.cos(angle);
          yb=midy+rb*Math.sin(angle);
          moveTo(xa,ya);
          cxt.beginPath();
          moveTo(xb,yb);
          cxt.stroke();
        }
        angle=angle+1/4*PI;
        }
        ra=rb;
      }
      else{
          ra=0;
          midy=midy-scale;
      }
      
    }
  };