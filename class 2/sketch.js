let xMax = 400;
let yMax = 600;

let xrocket = xMax/2;
let yrocket = yMax*0.6;


function setup() {
  createCanvas(xMax, yMax);
}

function draw() {
  background(10, 1, 1);
  //mostrare un testo bianco che mostra le coordinate del mouse sullo schermo
  fill(255); //bianco
  text("mouseX: " + mouseX + ", mouseY: " + mouseY,20,20); //mouseX è un contenitore che fa vedere le coordinate del mouse
  
  //disegnare le 120 stelle
  //tre tipi: a, b, c
  //fino a che abbiamo 120 stelle
  //stelle ellipse
  
  push();

  for(let i=0;i<40;i++){
    let straX = (i*37) % width + (i%3) * 5;
    let starY = (i*73) % height + (i%7);
    if (i==0){
    fill(255,255,150);
    ellipse(straX,starY,10);
    }else if(i==1){
      fill(200,100,255);
      ellipse(straX,starY,10);
    }else{
      fill(255,255,100);
      ellipse(straX,starY,10);
    }
  }
  pop();
  
  //apro contesto di disegno
  push();
  fill(1000);
  stroke(40);
  rectMode(CENTER);
  rect(xrocket, yrocket+30, 80,180,20 );
  

  //triangolo
  fill(25, 100, 150);
  triangle(xrocket-40,yrocket-60, xrocket+40, yrocket-60, xrocket,yrocket-120);

  //triangoli
  fill(25, 100, 150);
  triangle(xrocket-70,yrocket+160, xrocket-20,yrocket+90, xrocket-40,yrocket+50);
  fill(25, 100, 150);
  triangle(xrocket+70,yrocket+160, xrocket+20,yrocket+90, xrocket+40,yrocket+50);

  //cerchio
  fill(40, 150, 220);
  stroke(100);
  strokeWeight(3);
  ellipse(xrocket, yrocket, 50,50);

  
  //chiudo contesto
  pop();

  yrocket= (yrocket-1);
  if(yrocket<-150){
    yrocket=yMax+120;
  }
  
  
}
