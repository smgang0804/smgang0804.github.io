

// // let x1=50, x2;
// // let y;

// // x1 = 50;
// // x2 = 250;
// // y = 60;

// let x = 0;
// let y = 0;
// let d = 10;
// let c = 0;
// let r= 0,g= 0,b= 0 ;

// function setup() {
//   createCanvas(300, 300);

// }
// function draw()
// {
//   background(200);
//   // line(x1, y, x2, y);
//   // line(x1, y*2, x2, y*2);
//   // line(x1, y*3, x2, y*3);
//   // line(x1, y*4, x2, y*4);
//   // y=y+5;
//   // y = y%300;

//   //noFill();
//   //fill(c);
//   fill(r,b,g); // 0 ~ 255

//   ellipse(x,y,d,d);
//   //d = d+5;
//   d++; // d = d+1;

//   d %= 300; // d = d %300;

//   //c++;
//   r = r+20;
//   r %= 255;

//   x++;
//   y++;
//   x %=300;
//   y %=300;
// }

let x = 300, y = 200, c = 0, d = 100;
function setup() {
  createCanvas(700, 400);
}
function draw() {
  background(0);

  push();
  stroke(255, 255, 0);
  strokeWeight(5);
  line(0, y+d/2, 700, y+d/2);
  fill(c, 0, 0);
  ellipse(x, y, d, d);
  ellipse(x+d, y, d, d);
  noFill();
  triangle(x, y, x+d/2, y-d, x+d, y);
  pop();

  //x++;
  x += 5;
  x %= 700;
  c +=5;
  c %= 255;

  stroke(255);
  fill(255);
  textSize(30);
  text("distance:"+x, 50, 50);
  text("color:"+c, 500, 50);

}
