let cheese = false;
let chicken=false;
let ham= false;
let yog=false;
let meh=false;
let what= false;

let sale;
function setup() {
  let canvas=createCanvas(500,500);
  canvas.parent("canvasContainer");
sale = new JianBing();

}

function draw() {
  background(248,240,198);
  //the sign
  push();
  translate(-40,10);
  scale(2);
  fill(202,164,114);
  rect(40,30,120,40,3);
  fill(255);
  textSize(30);
  text('煎饼',70,59);
pop();

  //the counter
  counter();
  //the grill
  grill();
  //the jianbingguy
  bingGuy();
  sale.update();
  sale.display();
  sale.addCheese();
  sale.addChicken();
  sale.addHam();
  sale.addYogurt();
  sale.addWhat();
  sale.addMeh();
}
function grill(){
  push();
  translate(90,60);
  strokeWeight(3);
  fill(219,228,235);
  rect(80,320,200,40);
  beginShape();
  vertex(280,320);
  vertex(280,360);
  vertex(320,300);
  vertex(320,280);
  endShape(CLOSE);
  beginShape();
  vertex(80,320);
  vertex(150,280);
  vertex(150,280);
  vertex(320,280);
  vertex(280,320);
  endShape(CLOSE);
  pop();
}
function counter(){

  fill(190,194,203);
  strokeWeight(4);
  rect(-2,height*0.69-2, width+5, 170);

}
function bingGuy(){
  push();
  translate(90,70);
  strokeWeight(2);
  fill(232,190,172);
  circle(300, 100,82);
  strokeWeight(4);
  line(275,133,240,271);
  line(325,133,350,274);
  push();
  fill(20);
  noStroke();
  beginShape();
  vertex(240,272);
  vertex(275,132);
  vertex(325, 132);
  vertex(350,274);
  endShape(CLOSE);
  pop();
  pop();

  //eyes
  strokeWeight(2);
  line(370,150,385,150);
  line(410,150,425,150);
  line(377,150,377,170);
  line(417,150,417,170);
}

// announces that something should happen on button press
document.getElementById("cheeseButton").addEventListener("click", cheeseButtonPressed);
document.getElementById("chickenButton").addEventListener("click", chickenButtonPressed);
document.getElementById("hamButton").addEventListener("click", hamButtonPressed);
document.getElementById("milkButton").addEventListener("click", milkButtonPressed);
document.getElementById("mehButton").addEventListener("click", mehButtonPressed);
document.getElementById("whatButton").addEventListener("click", whatButtonPressed);


// a function that is bound to a button event:
function cheeseButtonPressed(){
  cheese = true;
  Jianbing.addCheese();
}

function chickenButtonPressed(){
  chicken = true;
  Jianbing.addChicken();
}
function hamButtonPressed(){
  ham=true;
  Jianbing.addHam();
}

function milkButtonPressed(){
  yog=true;
  Jianbing.addYogurt();
}
function mehButtonPressed(){
  meh=true;
  Jiangbing.addMeh();
}
function whatButtonPressed(){
  what=true;
  Jiangbing.addWhat();
}

class JianBing{
  constructor(){
    this.cheese = false;
    this.chicken=false;
    this.ham=false;
    this.yog=false;
    this.meh=false;
    this.what=false;
    this.size=20;
  }
  update(){

}
  display(){
    push();
    translate(90,60);
    strokeWeight(2);
    fill(255,255,167);
    ellipse(205,295,180,50);
    pop();
}
  addCheese(){
    this.cheese = true;
    if(cheese == true){
      fill("yellow");
      rect(300,325, 20, 20,2);
      rect(308,325,20,20,2);
    }
}
  addChicken(){
    this.chicken = true;
    if(chicken==true){
      fill("brown");
      circle(280,335,30);
    }
  }
  addHam(){
    this.ham=true;
    if(ham==true){
      fill("pink");
      rect(250,340,this.size)
    }
  }
    addYogurt(){
      this.yog=true;
      if(yog==true){
        fill("white");
        ellipse(300,345,this.size)
      }
  }
    addMeh(){
      this.meh=true;
      if(meh==true){
        fill("brown");
        rect(250,360,80,3);
      }
    }
    addWhat(){
      this.what=true;
      if(what==true){
        fill("red");
        ellipse(350,355,this.size+20,this.size);
    }
  }
}
