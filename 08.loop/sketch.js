
let x = 150, y =150, d=30;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  stroke(255);

  ellipse(x, y, d, d);


  // if(keyCode ==LEFT_ARROW)
  // {
  //   x--;
  // }


  if(keyIsDown(LEFT_ARROW) && keyIsDown(UP_ARROW))
  {
    x--;
    y--;
  }

  if(keyIsDown(LEFT_ARROW) && keyIsDown(DOWN_ARROW))
  {
    x--;
    y++;
  }

  
  
  
}