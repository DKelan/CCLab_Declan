let img; // Professor Leon's Sketch: https://editor.p5js.org/DKelan/sketches/E3pCvYbEB
let buttons = [];
// let words = ['youngest', 'unrelenting', 'galvanized', 'roll up a sleeve', 'tirelessly'];

function preload(){
img = loadImage('images/B.png');
}

function setup(){
  let canvas = createCanvas(600, 300);
  canvas.parent("canvasContainer");
  for(let i = 0; i < 60; i++){
    let x = random(width);
    let y = random(height);
    buttons.push (new Button(x, y));
  }
}

function draw(){
  background(44);
  image(img, 0, 0, 600, 300);

  noStroke();

  for(let i = 0; i < buttons.length; i++){
    buttons[i].checkMouse();
    buttons[i].display();
  }

}

class Button{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.col = [255, 255, 255, 127];
    this.diameter = random(20, 50);
  }

  checkMouse(){
    let mouseDistance = dist(mouseX, mouseY, this.x, this.y);
    if(mouseDistance < this.diameter/2){
      fill(255);
      textSize(15);
      textStyle(BOLDITALIC);
      text('BiasBEverywhere',this.x - 30, this.y - 30);
      this.col = [0, 0, 0, 127];

    }
  }

  display(){
    push();
    translate(this.x, this.y);
    fill(this.col[0], this.col[1], this.col[2]);
    circle(0, 0, this.diameter);
    pop();
  }
}
