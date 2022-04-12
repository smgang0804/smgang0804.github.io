let theta = 0.0, r = 150;
function setup() {
  createCanvas(300, 300);
}
function draw() {
  background(0);
  let x = width/2 + r * cos(theta);
  let y = height/2 + r * sin(theta);
  noFill();
  stroke(255);
  ellipse(150,150, 300,300);
  ellipse(x, y, 30, 30);
  theta += 0.05;
}
