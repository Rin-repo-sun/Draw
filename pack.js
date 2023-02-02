let unitKyori;
let maru = new Array();

class Maru {
	constructor(xx, yy) {
    this.x = xx;
    this.y = yy;
  }
}

function setup(){
  let unitYokoKazu = 20;
  let yokoInterval = screenWidth / (unitYokoKazu - 1);

  let tateInterval = yokoInterval * Math.sin(Math.PI / 3);
  let unitTateKazu = Math.ceil(screenHeight / tateInterval);
  unitKyori = yokoInterval;
  for (let i = 0; i < unitYokoKazu * unitTateKazu; ++i) {
    let tateNum = parseInt(i / unitYokoKazu);
    let yokoNum = i % unitYokoKazu;
    let x = yokoInterval * yokoNum;
    let y = tateInterval * tateNum;
    if(tateNum % 2 == 1)  x += yokoInterval / 2;
    maru[i] = new Maru(x, y);
  }
}

function loop(){
  ctx.clearRect(0, 0, screenWidth, screenHeight);
  
  for(let i=0; i< maru.length; i++){
    let hankei = unitKyori / 2;

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(maru[i].x, maru[i].y, hankei, 0, Math.PI * 2, true);
    ctx.stroke();
  }
}

function touchStart(){
	
}

function touchMove(){
	
}

function touchEnd(){
	
}
