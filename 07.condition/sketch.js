let x = 20, y = 80, w = 460, h = 50;
let size = 100, slider = 20;
function setup() {
  createCanvas(500, 500);
}
function draw() {
  background(0);
  if (mouseIsPressed) {
    if ((x <= mouseX && mouseX <= x+w) && (y <= mouseY && mouseY <= y+h)) {
      slider = mouseX;
      size = map(slider, x, x+w, 100, width);
    }
  }

  //원 그려주기
  fill(0, 0, 255);
  ellipse(width/2, height/2, size, size);
  
  
  //부수적인 것
  //txt
  fill(255); 
  textSize(30);
  textAlign(CENTER);
  text('Size: ' + int(size), width/2, 50);

  //흰 rect
  rect(x, y, w, h);
  
  //빨간 rect
  fill(255, 0, 0);
  rect(slider, y, 10, h); 


}
