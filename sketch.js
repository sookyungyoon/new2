
var ball = {
  x:310,
  y:425,
  xspeed:-3,
  yspeed:-3,
}

var col = {
  r:0,
  g:0,
  b:0
};


var on  = false;

var away = -4;

var back = -2;

function setup() {
  createCanvas(400,550);
};

  
function draw() {
  
  
  if (on) {
    background(247,254,141);
  }else {
    background(255,81,162);
  }

  move();
  bounce();
  
  
  //circle (blue)
  noStroke()
  fill(8,202,237);
    if (on) {
    ellipse(away,780,1050,1050)
    if(away>width || away<0) {
      back = back * 1;
    }
    away = away + back
  }else {
    ellipse(400,780,1050,1050);
  }

  //rectangle (black1)
  fill(0);
  rotate(radians(315));
    if (on) {
    rect(60,away,60,360);
    if(away>width || away<0) {
      back = back * -1;
    }
    away = away + back
  }else {
    rect(60,20,60,360);
  }

  //rectangle (white1)
  noStroke (0)
  fill(255);
  rect(73,5,60,360);
  
  //rectangle (pink)
  stroke(254,149,217)
  strokeWeight(2)
  fill(255,172,226)
  rotate(radians(-315))
  rotate(radians(13))
  rect(230,7,65,200);

  //rectangle (blue)
  stroke(34,179,205)
  strokeWeight(2)
  fill(8,202,237)
  rotate(radians(-13))
  rotate(radians(-15))
  rect(100,180,75,230);
  
  //circle (pink)
  noStroke()
  col.r = random(0,255)
  col.g = random(0,255)
  col.b = random(0,255)
    if (on) {
    fill(255,81,162);
  }else {
    fill (col.r, col.g, col.b,255);
  }
  rotate(radians(15))
  ellipse(310,425,213,213);
  
  //small ball 
    if (on) {
    fill(col.r, col.g, col.b,255);
    ellipse(ball.x,ball.y,25,25)
  }
  
  
  //rectangle (black2)
  noStroke()
  fill(0)
  rotate(radians(30))
    if (on) {
    rect(345,away,60,360);
    if (away>width || away<0) {
      back = back * -1;
    }
    away = away + back
  }else {
    rect(345,345,60,360);
  }
  rect(345,345,60,360);
  
  
  //rectangle (white2)
  noStroke()
  fill(255,255,255)
  rect(330,330,60,362);
  
  //line (1)
  stroke(0);
  strokeWeight(6);
  rotate(radians(-30));
   if (on) {
     stroke(255)
     line (-away, away,350,-10);
      if (away>width || away<0) {
        back = back*-1;
      }
      away = away+back
   }else {
     stroke(0)
   }
  line(310,60,350,-10);
 
  //line (2)
  stroke(0);
  strokeWeight(6);
     if (on) {
     stroke(255)
     line (away, away,235,403);
      if (away>width || away<0) {
        back = back*-1;
      }
      away = away+back
   }else {
     stroke(0)
   }
  line(120,300,235,403);
  
}

function mousePressed(){
  if (mouseX>200 && mouseX<450 && mouseY>310 && mouseY<530) {
    if (on) {
      on = false;
    }else {
      on = true;
    }
  }
}

function move() {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}

function bounce() {
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
}
