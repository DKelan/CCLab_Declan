// CodePen Home
// Simple Typing Effect with Pure js
// A PEN BY Shankar
// let angle = 0;
// function setup() {
//   canvas1=createCanvas(400, 300, WEBGL);
//   canvas1.parent("IntroCanvas");
// }
// function draw() {
//   background(255,0,0);
//   ambientLight(100);
//   directionalLight(255,255,255,0,0,1);
//   rotateX(angle);
//   rotateY(angle*0.3);
//   rotateZ(angle*0.7);
//   box(100);
//   angle+=0.02;
// }
function typeWriter() {

var typeString = ['(n.) A traditional Chinese street food made from a wheat and grain batter, eggs, and a variety of toppings.'];
      var  i = 0;
      var count = 0
      var selectedText = '';
      var text = '';
      (function type() {
        if (count == typeString.length) {
          count = 0;
        }
        selectedText = typeString[count];
        text = selectedText.slice(0, ++i);
        document.getElementById('typing').innerHTML = text;
        if (text.length === selectedText.length) {
          count++;
          i = 0;
        }
        setTimeout(type, 100);
      }());

      function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
          if ((new Date().getTime() - start) > milliseconds){
            break;
          }
        }
      }
    }

    typeWriter();

    function showCode() {
        let src = "code.png";
        showImage("code.png", 100,100, "Code");

        var elementToChange = document.getElementsByTagName("body")[0];
elementToChange.style.cursor = "url('phone.png'), auto";
    }

    function showImage(src, width, height, alt) {
        let img = document.createElement("img");
        img.src = src;
        img.width = width;
        img.height = height;
        img.alt = alt;
        document.body.appendChild(img);
    }
