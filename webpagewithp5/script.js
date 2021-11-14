console.log("You're killing it, babe!")

let circlePositionSlider = document.getElementById("circlePositionSlider");

function setup(){
  let canvas = createCanvas(200, 200);
  canvas.parent("canvasContainer");
}

function draw(){
  background(0);
  fill("lightyellow");
  let sliderVal = circlePositionSlider.value;
  console.log(sliderVal);

  let x = map(sliderVal, 0, 100, 0, width);

  circle(x, height/2, 50);
}
