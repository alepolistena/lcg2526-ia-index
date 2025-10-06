let xMax = 1250;
let yMax = 620;

function setup() {
  createCanvas(xMax, yMax);
}

function draw() {
  background(10, 1, 1);
  //mostrare un testo bianco che mostra le coordinate del mouse sullo schermo
  fill(255); //bianco
  text("mouseX: " + mouseX + ", mouseY: " + mouseY,20,20); //mouseX è un contenitore che fa vedere le coordinate del mouse

  push();
  //cielo
  fill(200, 200, 255);
  rect(0, 20, 1250, 620);


  //terra
  fill(120, 60, 30);
  rect(0, 300, 1250, 300);

  //casa
  fill(255);
  rect(500, 170, 200, 130);

  //tetto
  fill(120, 70, 90);
  triangle(500,170, 700,170, 600,90);
}