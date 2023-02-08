// balls variables
let xBall = 300;
let yBall = 200;
let diameter = 15;
let radius = diameter / 2;

// balls velocity
let velocityXBall = 5;
let velocityYBall = 5;

// My Racket
let xRacket = 5;
let yRacket = 150;
let brRacket = 20;

// variables my racket
let wRacket = 10;
let hRacket = 90;

// racket opponent variables
let xOpponentRacket = 580;
let yOpponentRacket = 150;
let velocityYOpponent;

//placar do jogo
let myPoints = 0;
let opponentPoints = 0;

//songs
let racketsound;
let point;
let song;

function preload(){
  cat = loadSound("cat.mp3");
  point = loadSound("point.mp3");
  racketsound = loadSound("racket.mp3");
}

function setup() {
  createCanvas(600 , 400);
  cat.loop();
}

function draw() {
  background(0);
  showBall();
  moveBall();
  checkCollision();
  showRacket(xRacket, yRacket);
  moveMyRacket();
  checkCollisionRacket();
  checkCollisionOpponent();
  showOpponentRacket(xOpponentRacket, yOpponentRacket);
  moveOpponentRacket();
  scoreboard();
  checkPoint()
  ballNoBug()
}

function showBall() {
  circle(xBall, yBall, diameter);
  fill(255, 0, 0);
  //change color of My Racket
}

function moveBall() {
  xBall += velocityXBall;
  yBall += velocityYBall;
}

function checkCollision() {
  if (xBall + radius > width ||
    xBall - radius < 0) {
    velocityXBall *= -1;
  }

  if (yBall + radius > height ||
    yBall - radius < 0) {
    velocityYBall *= -1;
  }
}

function showRacket(x,y) {
  rect(x, y, wRacket, hRacket, brRacket);
  fill(0, 0, 255);
  //change color of Opponent
}

function moveMyRacket() {
  if (keyIsDown(UP_ARROW)) {
    yRacket -= 8;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRacket += 8;
  }
}

function checkCollisionRacket(){
  if (xBall - radius < xRacket + wRacket && yBall - radius < yRacket + hRacket && yBall + radius < yRacket + hRacket){ 
    velocityXBall *= -1; 
    racketsound.play();
  } 
}

function checkCollisionOpponent(){ 
  if (xBall + radius > xOpponentRacket && yBall + radius < yOpponentRacket + hRacket && yBall + radius > yOpponentRacket - hRacket){ 
    velocityXBall *= -1; 
    racketsound.play();
  } 
}

function showOpponentRacket(x,y) {
  rect(x, y, wRacket, hRacket, brRacket);
  fill(color(255,255,255));
  //change color of ball
}


function moveOpponentRacket() {
  if (keyIsDown(87)) {
    yOpponentRacket -= 8;
    //87 = W
  }
  if (keyIsDown(83)) {
    yOpponentRacket += 8;
    //83 = S
  }
}
//  velocityYOpponent = yBall - yOpponentRacket - wRacket / 2 - 30
//  yOpponentRacket += velocityYOpponent
//}

function scoreboard() {
  stroke(225);
  textAlign(CENTER);
  textSize (16);

  fill(color(238,130,238));
  rect(200, 10, 40, 20, 5);
  fill(255);
  text(myPoints, 220, 25);
  fill(color(238,130,238));
  rect(400, 10, 40, 20, 5);
  fill(255);
  text(opponentPoints, 420, 25);
}

function checkPoint(){
  if (xBall > 590){
    myPoints += 1;
    point.play();
  }
  if (xBall < 13) {
    opponentPoints += 1;
    point.play();
  }
}


function ballNoBug(){
  if (xBall - radius < 0){
    xBall = 23
  }
  if (xBall + radius > 600){
    xBall = 577
  }
}
