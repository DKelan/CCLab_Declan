let img;
let imgArray = [];
let horseIndex = 0;
let horseX = 100;

function preload(){
  // img = loadImage("asset/images/horse1.jpg")
  for(let i = 1; i < 12; i++){
    let path = "asset/images/horse"+i+".jpg";
    console.log("loading", path);
    loadImage(path);
    imgArray.push(img);
  }
  console.log("imgArray");
}

function setup(){
  createCanvas(800, 300);
}


function draw(){
  background(0);
  image(imgArray[horseIndex], horseX, 0, 200, 150);
  horseIndex++;
  // image(img, horseX, 0, 200, 150);
  // horseX+=5;
  // if(horseX > width){
  //   horseX = -200;
  // }
}
