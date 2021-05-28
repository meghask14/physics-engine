//Namespacing
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, wor, ground

function setup() {
  createCanvas(400, 400);
  engine = Engine.create()
  wor = engine.world

  var ball_options = {
    restitution: 1.0
  }

  ball = Bodies.circle(200, 100, 50, ball_options)
  World.add(wor, ball)
  var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200, 380, 400, 40, ground_options)
  World.add(wor, ground)
  console.log(ball)

}

function draw() {
  background(0);
  Engine.update(engine)
  rectMode(CENTER)
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 50, 50);
  rect(ground.position.x, ground.position.y, 400, 40)
  drawSprites();
}