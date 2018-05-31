var x,
  y;
var angle1 = 0.0;
var angle2 = 0.0;
var legLength = 150;
var armLength = 100;

function setup() {
  createCanvas(1000, 1000);
  strokeWeight(30);

  //Stroke with a semi-transparent white
  stroke(255, 160);
  fill(255, 160);

  //Position the "shoulder" of the arm in the center of the canvas

}

function draw() {
  background(0);

  //Change the angle of the segments according to the mouse positions
  angle1 = (mouseX / float(width) - 0.5) * -TWO_PI;
  angle2 = (mouseY / float(height) - 0.5) * PI;

  //use push and pop to "contain" the transforms. Note that
  // even though we draw the segments using a custom function,
  // the transforms still accumulate

  // LEFT ARM
  push();
  segment(120, 120, angle1, armLength);
  segment(armLength, 0, angle2, armLength);
  ellipse(armLength, 0, 20, 20)
  pop();
  // LEFT LEG
  push();
  segment(120, 300, angle1, legLength);
  segment(legLength, 0, angle2, legLength);
  ellipse(legLength, 0, 20, 20)
  pop();
  // RIGHT ARM
  push();
  segment(280, 120, angle1, armLength);
  segment(armLength, 0, angle2, armLength);
  ellipse(armLength, 0, 20, 20)
  pop();
  // RIGHT LEG
  push();
  segment(280, 300, angle1, legLength);
  segment(legLength, 0, angle2, legLength);
  ellipse(legLength, 0, 20, 20)
  pop();
  // BODY
  push();
  rect(100, 100, 200, 200, 40);
  pop();
}

//a custom function for drawing segments
function segment(x, y, a, length) {
  translate(x, y);
  rotate(a);
  line(0, 0, length, 0);
  stroke(255, 160);
  fill(255, 160);
}
