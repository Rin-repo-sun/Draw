let unitKyori;
let maru = new Array();

class Maru {
	constructor(xx, yy) {
    this.x = xx;
    this.y = yy;
  }
}

function setup(){
  let unitYokoKazu = 10;
  let yokoInterval = screenWidth / (unitYokoKazu - 1);

  let tateInterval = yokoInterval * Math.sin(Math.PI / 3);
  let unitTateKazu = Math.ceil(screenHeight / tateInterval) + 1;
  unitKyori = yokoInterval;
  for (let i = 0; i < unitYokoKazu * unitTateKazu; ++i) {
    let tateNum = parseInt(i / unitYokoKazu);
    let yokoNum = i % unitYokoKazu;
    let x = yokoInterval * yokoNum;
    let y = tateInterval * tateNum;
    if(tateNum % 2 == 0)  x -= yokoInterval / 2;
    maru[i] = new Maru(x, y);
  }
}

function loop(){

  for(let i=0; i < maru.length; ++i) {
    if(yubiTouched) {
      let xx1 = maru[i].x - curYubiX;
      let yy1 = maru[i].y - curYubiY;
      let xx2 = xx1 * Math.cos(Math.PI / 36) - yy1 * Math.sin(Math.PI / 36);
      let yy2 = xx1 * Math.sin(Math.PI / 36) + yy1 * Math.cos(Math.PI / 36);
      let xx3 = xx2 + curYubiX;
      let yy3 = yy2 + curYubiY;
      maru[i].x = xx3;
      maru[i].y = yy3;
    }
  }

  ctx.clearRect(0, 0, screenWidth, screenHeight);

  for(let i=0; i< maru.length; ++i){
    let hankei = unitKyori / 4;
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(maru[i].x, maru[i].y, hankei, 0, Math.PI * 2, true);
    ctx.fill();
  }

}

function touchStart(){

}

function touchMove(){
	
}

function touchEnd(){
	
}
