class Point {
	constructor(xx, yy) {
    this.x = xx;
    this.y = yy;
  }
}

let ten = new Array();

function setup(){
  for(let i=0; i<4; i++) {
    ten[i] = new Point(screenWidth / 2, screenHeight / 2);
  }
}

function loop(){
  for(let i=0; i<ten.length; i++) {
    if(i==0){
      if(yubiTouched){
        ten[i].x = curYubiX;
        ten[i].y = curYubiY;
      }
    } else {
      ten[i].x += (ten[i-1].x - ten[i].x) / 10;
      ten[i].y += (ten[i-1].y - ten[i].y) / 10;
    }
  }

  ctx.clearRect(0, 0, screenWidth, screenHeight);

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.strokeStyle = "black";
  ctx.moveTo(ten[0].x, ten[0].y);
  ctx.bezierCurveTo(ten[1].x, ten[1].y, ten[2].x, ten[2].y, ten[3].x, ten[3].y);
  ctx.stroke();

  ctx.begnPath();
  ctx.lineWidth = 1;
  ctx.moveT(ten[0].x, ten[0].y);
  ctx.lineTo(ten[1].x, ten[1].y);
  ctx.lineTo(ten[2].x, ten[2].y);
  ctx.lineTo(ten[3].x, ten[3].y);
  ctx.stroke();

  let hankei = 35;
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";
  ctx.lineWidth = 4;
  for(let i=0; i<ten.length; ++i) {
    ctx.beginPath();
    ctx.arc(ten[i].x, ten[i].y, hankei, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.stroke();
  }
}

function touchStart(){

}

function touchMove(){
	
}

function touchEnd(){
	
}
