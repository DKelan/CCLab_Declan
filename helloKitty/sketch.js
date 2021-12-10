let img;

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage('assets/Meow.jpeg')
  frameRate(30);
}

function draw() {
  image(img, 0, -300);
  let r = random(240, 255);
  let g = random(182, 255);
  let b = random(193, 255);
  
  if (mouseIsPressed){
    background(r, g, b);
  } 
   drawKitty(mouseX, mouseY);
  
  function drawKitty(x, y) {
    translate(x - 200, y - 200);
    push();
    // drawThyArm(320, 0, false, sin(frameCount / 4) *3);
  
   // drawThyArm(-360, -20, true, cos(frameCount / 5) * 3);
    
    pop();
    
    push();
    drawThyArm(320, 0, false, sin(frameCount / 4) * 3);
    
    drawThyArm(310, 0, true, cos(frameCount / 5) * 3);
    pop();
    
    strokeWeight(2);
    push(); // Overalls
    beginShape();
    fill(103, 207, 240);
    vertex(135, 215);
    vertex(195, 215);
    vertex(205, 270);
    vertex(125, 270);
    vertex(135, 215);
    endShape();
    pop();

    push(); // Shirt
    ellipse(165, 220, 30, 30);
    circle(145, 235, 10); // Button L
    circle(185, 235, 10); // Button R
    stroke(255, 0, 0);
    strokeWeight(3.5);
    line(152, 224, 178, 224);
    line(156, 230, 174, 230);
    pop();

    beginShape(); // Leg L
    vertex(165, 270);
    bezierVertex(165, 300, 122, 290, 125, 270);
    endShape();

    beginShape(); // Leg R
    vertex(205, 270);
    bezierVertex(205, 300, 162, 290, 165, 270);
    endShape();
   
    //strokeWeight(5);
    triangle(100, 100, 120, 110, 100, 130); // Left Ear
    triangle(230, 100, 230, 130, 210, 110); // Right Ear
    ellipseMode(CENTER); // Head
    ellipse(165, 160, 160, 120);

    push(); // Bow
    fill(255, 0, 0);
    beginShape();
    vertex(200, 110);
    bezierVertex(170, 70, 150, 160, 195, 130);
    endShape();

    beginShape();
    vertex(205, 115);
    bezierVertex(240, 80, 245, 170, 206, 130);
    endShape();
    circle(200, 120, 22);
    pop();

    push(); // Eyes
    fill(0);
    ellipse(130, 170, 11, 15);
    ellipse(200, 170, 11, 15);
    pop();

    push(); // Nose
    fill(255, 243, 128);
    ellipse(165, 185, 15, 10);
    pop();

    beginShape(); // Whisker TL
    vertex(100, 170);
    bezierVertex(95, 169, 85, 168, 75, 171);
    endShape();

    beginShape(); // Whisker ML
    vertex(105, 180);
    bezierVertex(100, 179, 90, 180, 80, 185);
    endShape();

    beginShape(); // Whisker BL
    vertex(110, 190);
    bezierVertex(105, 189, 95, 192, 85, 199);
    endShape();

    beginShape(); // Whisker TR
    vertex(255, 170);
    bezierVertex(250, 169, 240, 168, 230, 171);
    endShape();

    beginShape(); // Whisker MR
    vertex(250, 180);
    bezierVertex(245, 180, 235, 175, 225, 179);
    endShape();

    beginShape(); // Whisker BR
    vertex(245, 190);
    bezierVertex(240, 190, 230, 185, 220, 189);
    endShape();
   
  }
/*
  function drawThyRightArm(x, y, rot) {
      rotate(radians(rot));
      translate(x, y);
      push(); // Arm R
      translate(211, 245);
      rotate(PI / 1.45);
      ellipse(-5, -5, 27, 12);
      pop();

      circle(216, 243, 20);

      beginShape();
      vertex(195, 215);
      vertex(190, 225);
      vertex(205, 240);
      vertex(215, 233);
      vertex(195, 215);
      endShape();

      push();
      stroke(255, 0, 0);
      strokeWeight(3);
      line(200, 220, 190, 225);
      line(205, 225, 195, 230);
      pop();
  */
  
  function drawThyArm(x, y, mirror, rot) { // Professor Leon's Mirrored Boolean Argument
    translate(x, y);
    if (mirror == true);{
      scale(-1, 1);
    }
    rotate(radians(rot));
    
    
    push(); // Arm L
    translate(111, 250);
    rotate(PI / 3);
    ellipse(-5, -5, 27, 12);
    pop();

    circle(114, 243, 20);

    beginShape();
    vertex(135, 215);
    vertex(140, 225);
    vertex(125, 240);
    vertex(115, 233);
    vertex(135, 215);
    endShape();

    push();
    stroke(255, 0, 0);
    strokeWeight(3);
    line(130, 220, 140, 225);
    line(125, 225, 135, 230);
    pop();
      
  }
}
