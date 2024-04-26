var agent;
var obj;

function setup() {
  createCanvas(400, 800);
  agent = new Agent(new p5.Vector(100,100), new p5.Vector(0,1));
  obj = new p5.Vector(300, 250);
}

function draw() {
  obj.set(mouseX, mouseY);
 background(220);
  
  circle(obj.x, obj.y, 10);
  agent.update();
  agent.show();
}