let img;

function preload(){
  img = createImage(640, 480)
}

function setup(){
  createCanvas(640, 480);
  cam = createCapture(VIDEO);
}

function draw(){
  background(0);

  img.loadPixels();
  cam.loadPixels();

  let gridSize = 15;
  noStroke();
  for(let y = 0; y < 480; y+= gridSize){
    beginShape();
    for(let x = 0; x < 640; x+= gridSize){
      let index = (y * width + x) * 4;

      let red = cam.pixels[index + 0];
      let green = cam.pixels[index + 1];
      let blue = cam.pixels[index + 2];
      // let alpha = cam.pixels[index + 3];

      let avg = (red + green + blue) / 3;
      let size = map(avg, 0, 255, 1, gridSize);
      curveVertex(x, y + size/2);

      fill(255);
      ellipse(x * frameCount/2, y * frameCount/2, size * 8, size * 8);

      img.pixels[index + 0] = red; // r
      img.pixels[index + 1] = green; // g
      img.pixels[index + 2] = blue; // b
      img.pixels[index + 3] = 0; // a
      endShape();
    }
  }
  img.updatePixels();

  image(img, 0, 0);
}
