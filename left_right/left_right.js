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
