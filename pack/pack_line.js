let unitKyori;
let maru = new Array();

class Maru {
	constructor(xx, yy) {
    this.x = xx;
    this.y = yy;
    this.kyori = 0;
    this.kakudo = 0;
    this.touched = false;
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
  for(let i = 0; i < maru.length; i++) {
    maru[i].kyori = Math.sqrt(Math.pow(curYubiX - maru[i].x, 2) + Math.pow(curYubiY - maru[i].y, 2));
    maru[i].kakudo = Math.atan2(curYubiY - maru[i].y, curYubiX - maru[i].x);
    if(maru[i].kyori < unitKyori / 2) {
      maru[i].touched = true;
    }
  }

  let screenSize = Math.min(screenWidth, screenHeight);

  ctx.clearRect(0, 0, screenWidth, screenHeight);
  
  for(let i=0; i< maru.length; ++i){
    let par = maru[i].kyori / screenSize;
    par = Math.min(par, 1);
    let parR = 1 - par;

    let hankei = unitKyori / 2;
    hankei = hankei * parR;

    ctx.filStyle = "rgb(" + parR * 255 + "," + parR * 255 + "," + parR * 255 + ")";
    if(maru[i].touched) ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(maru[i].x, maru[i].y, hankei, maru[i].kakudo - Math.PI / 2, maru[i].kakudo + Math.PI / 2, true);
    ctx.fill();

    ctx.strokeStyle = "black";
    //ctx.lineWidth = 2;
    ctx.lineWith = parR * 5;
    let xl = hankei * Math.cos(maru[i].kakudo);
    let yl = hankei * Math.sin(maru[i].kakudo);
    ctx.beginPath();
    ctx.moveTo(maru[i].x, maru[i].y);
    ctx.lineTo(maru[i].x + xl, maru[i].y + yl);
    //ctx.arc(maru[i].x, maru[i].y, hankei, 0, Math.PI * 2, true);
    ctx.stroke();
  }
}

function touchStart(){
  for(let i=0; i < maru.length; i++){
    maru[i].touched = false;
  }	
}

function touchMove(){
	
}

function touchEnd(){
	
}
