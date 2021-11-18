let winds = [];
let snows = [];
let value = 0;
let colorWell;
// let defaultColor = "#0000ff";
// window.addEventListener("load", startup, false);
let colorSlider = document.getElementById("colorSlider");
let elt = document.getElementById("btn");
elt.addEventListener("click", clickFunction);

function setup(){
  let canvas = createCanvas(400, 400);
  canvas.parent("box2");
  for(let i = 0; i < 30; i++){
    winds.push(new Wind(random(-width, 2*width), random(0, height)));
  }
}


function draw(){
  let colorVal = colorSlider.value;
  background(value);
  let freq = frameCount * 0.05 ;
  let amp = 1;
  let sinValue = sin(freq) * amp;
  let cosValue = cos(freq) * amp;
  let r1 = map(sin(colorVal), -1, 1, 0, 255); // Professor Moon's Uses of Sin Example https://editor.p5js.org/MOQN/sketches/8_ko8tso4
  let g1 = 0;
  let b1 = map(cos(colorVal), -1, 1, 255, 0);
  let r2 = map(cosValue, -1, 1, 0, 255);
  let g2 = 0;
  let b2 = map(cosValue, -1, 1, 255, 0);
  let r3 = map(sin(frameCount/20), -1, 1, 255, 0);
  let g3 = 0;
  let b3 = map(sin(frameCount/20), -1, 1, 0, 255);

  push();
  if(mouseX > 0 && mouseX < 50 && mouseY > 350){
    background(255, 0, 0);
  }else if (mouseX > 100 && mouseX < 150 && mouseY > 350){
    background(255, 255, 0);
  }else if (mouseX > 250 && mouseX < 300 && mouseY > 350){
    background(0, 255, 0);
  }else if (mouseX > 350 && mouseX < 400 && mouseY > 350){
    background(0, 0, 255);
  }else
    background(0);
  pop();


 snows.push(new Snow(random()*width, random(-height, 0)));
    for(let i = 0; i< snows.length; i++){
      snows[i].update();
      snows[i].display();
    }

  for(let i = 0; i < winds.length; i++){
    winds[i].update();
    winds[i].display();
  }

  push(); // Skyline
      if (keyIsPressed == true){
        fill(r2, g2, b2);
      }else{
        fill(255);
      }
  strokeWeight(4);
  rect(80, 200, 50, 50); // CITGO Sign
  triangle(105, 210, 90, 240, 120, 240);
  rect(280, 215, 50, 100);
  pop();

  // push();
  // if (keyIsPressed == true){
  //   fill(r1, g1, b1);
  // }else{
  //   fill(255);
  // }

  fill(r1, g1, b1);

  arc(80, 310, 50, 50, PI + HALF_PI, TWO_PI); // Bridge Semicircles
  arc(130, 310, 30, 50, PI, TWO_PI);
  arc(170, 310, 30, 50, PI, HALF_PI - HALF_PI);
  arc(305, 216, 30, 30, PI, TWO_PI);
  beginShape(); // Hancock Building
  vertex(140, 150);
  vertex(175, 160);
  vertex(175, 260);
  vertex(140, 260);
  vertex(140, 150);
  endShape();
  rect(185, 200, 40, 110); // Prudential
  pop();


  push();
  if (keyIsPressed == true){
    stroke(r3, g3, b3);
  }else{
    stroke(255);
  }
  strokeWeight(4);
  line(95, 245, 95, 260); // CITGO Legs
  line(115, 245, 115, 260);
  line(80, 270, 180, 270); // Bridge Top
  line(80, 280, 180, 280);
  line(188, 180, 222, 180); // Prudential Top
  line(188, 190, 222, 190);
  line(204, 170, 204, 150);
  beginShape(); // Drawstring Bridge
  vertex(225, 277);
  vertex(245, 257);
  vertex(245, 260);
  vertex(225, 280);
  vertex(225, 277);
  endShape();
  beginShape();
  vertex(225, 292);
  vertex(245, 272);
  vertex(245, 275);
  vertex(225, 295);
  vertex(225, 292);
  endShape();
  beginShape();
  vertex(225, 292 + 15);
  vertex(245, 272 + 15);
  vertex(245, 275 + 15);
  vertex(230, 295 + 12);
  vertex(225, 292 + 15);
  endShape();
  beginShape();
  vertex(250, 307);
  vertex(252, 245);
  vertex(255, 240);
  vertex(255, 307);
  vertex(250, 307);
  endShape();
  beginShape();
  vertex(250 + 5, 307);
  vertex(252 + 5, 240);
  vertex(255 + 5, 245);
  vertex(255 + 5, 307);
  vertex(250 + 5, 307);
  endShape();
  beginShape(); // Drawstring Bridge Pt. 2
  vertex(265, 257);
  vertex(285, 277);
  vertex(285, 280);
  vertex(265, 260);
  vertex(265, 257);
  endShape();
  beginShape();
  vertex(265, 257 + 15);
  vertex(285, 277 + 15);
  vertex(285, 280 + 15);
  vertex(265, 260 + 15);
  vertex(265, 257 + 15);
  endShape();
  beginShape();
  vertex(265, 257 + 30);
  vertex(285, 277 + 30);
  vertex(285, 280 + 29);
  vertex(265, 260 + 30);
  vertex(265, 257 + 30);
  endShape();
  stroke(0);
  line(165, 165, 165, 260);
  line(310, 235, 330, 235);
  line(310, 235 + 20, 330, 235 + 20);
  line(310, 235 + 40, 330, 235 + 40);
  pop();

  push(); // Center Office (Right-most building)
  fill(0);
  rect(303, 192, 3, 24);
  beginShape();
  vertex(300, 200 + 13);
  vertex(303, 198 + 13);
  vertex(304, 200 + 13);
  vertex(302, 202 + 13);
  vertex(300, 200 + 13);
  endShape();
  beginShape();
  vertex(300 + 4.8, 200 + 13);
  vertex(302 + 4.8, 198 + 13);
  vertex(304 + 4.8, 200 + 13);
  vertex(302 + 4.8, 202 + 13);
  vertex(300 + 4.8, 200 + 13);
  endShape();
  pop();

  push();
  fill(255, 0, 0);
  square(0, 350, 50);
  fill(255, 255, 0);
  square(100, 350, 50);
  fill(0, 255, 0);
  square(250, 350, 50);
  fill(0, 0, 255);
  square(350, 350, 50);
  pop();
}

function clickFunction(){
  for(let i = 0; i < snows.length; i++){
    snows[i].blizzard();
  }
}

class Wind{ // Source: Professor Leon
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.angle = random(180, 0);
    this.angleInc = 9.9;

    this.angleCount = 180 - this.angle;
    this.radius = 30;
    this.radiusInc = 0.6;
    this.followers = 0;
    this.maxFollowers = 120;
    this.maxAngle = 440;
  }

  update() {
    if(this.angleCount < this.maxAngle){
      this.angle -= this.angleInc;

      this.angleCount += this.angleInc;
      this.radius -= this.radiusInc;
      this.followers += 1;
      if(this.followers >= this.maxFollowers){
        this.followers = this.maxFollowers;
      }
    }else{
      this.followers -= 1;
      if(this.followers <= 0){
        this.reset();
      }
    }
  }

  reset(){
    this.angle = 180;
    this.angleInc = 9.9;
    this.angleCount = 0;
    this.radius = 30;
    this.radiusInc = 0.6;
    this.followers = 0;
    this.maxFollowers = 120;
    this.maxAngle = 440;

    // move swirl onwards
    this.x += 100;
    this.y -= 50;

    if(this.x > width + 100 || this.y < -100){
      this.x = -500;

      this.y = random(0, height);
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    noFill();

    for(let i = 0; i< this.followers; i++){
      let x = cos(radians(this.angle + i * this.angleInc))*(this.radius+i*this.radiusInc);
      let y = sin(radians(this.angle+i*this.angleInc))*(this.radius+i*this.radiusInc);
      noStroke();
      fill(131, 238, 255, 255-(i*5));
      circle(x, y, 2);
    }
    pop();
  }
}

class Snow{
  constructor(startX, startY){
    this.x = random()*width;
    this.y = random(-height, 0);
    this.scaleFactor = random(0.1, 0.3);
    this.speed = map(this.scaleFactor, 0.1, 0.3, 15, 7);
  }

  update(){
    this.y = this.y + this.speed;
  }

  blizzard(){
    this.speed = this.speed * 3;
    this.x = this.x + random(0, 5);
    this.y = this.y + random(0, 5);
  }

  display(){
    push();
    fill(255);
    translate(this.x, this.y);
    scale(this.scaleFactor);
    ellipse(0, random(20, 30), random(10, 20));
    pop();
  }
}

// function startup(){
//   colorWell = document.querySelector("#colorWell");
//   colorWell.value = defaultColor;
//   colorWell.addEventListener("input", updateFirst, false);
//   colorWell.addEventListener("change", updateAll, false);
//   colorWell.select();
// }
//
// function updateFirst(){
//   let p = document.querySelector("p");
//
//   if p{
//     p.style.color = event.target.value;
//   }
// }
//
// function updateAll(event){
//   document.querySelectorAll("p").forEach(function(p)){
//     p.style.color = event.target.value);
//   }
// }
