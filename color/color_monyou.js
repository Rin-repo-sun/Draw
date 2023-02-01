function hsbToRgb(hue, sat, bri){
	hue = hue % 360;
	if(hue < 0){
		hue += 360;
	}
	
	sat = Math.min(Math.max(sat, 0), 255);
	
	bri = Math.min(Math.max(bri, 0), 255);
	
	let red, green, blue;

	let maxVal = bri;
	let minVal = maxVal - ((sat / 255) * maxVal);
	if(hue < 60){

		red = maxVal;
		green = minVal + ((hue-0)/60)*(maxVal-minVal);
		blue = minVal;
	}else if(hue < 120){

		red = maxVal - ((hue-60)/60)*(maxVal-minVal);
		green = maxVal;
		blue = minVal;
	}else if(hue < 180){

		red = minVal;
		green = maxVal;
		blue = minVal + ((hue-120)/60)*(maxVal-minVal);
	}else if(hue < 240){

		red = minVal;
		green = maxVal - ((hue-180)/60)*(maxVal-minVal);
		blue = maxVal;
	}else if(hue < 300){

		red = minVal + ((hue-240)/60)*(maxVal-minVal);
		green = minVal;
		blue = maxVal;
	}else{

		red = maxVal;
		green = minVal;
		blue = maxVal - ((hue-300)/60)*(maxVal-minVal);
	}
	return [red, green, blue];
}

function drawUnitSankuzushi(hsbCol, cx, cy, hankei, muki) {
  ctx.lineWidth = hankei * 0.45;

  let rgbCol1 = hsbToRgb(hsbCol[HUE], hsbCol[SATURATION],hsbCol[BRIGHTNESS]);

  ctx.strokeStyle = "rgb(" + rgbCol1[RED] + ","+rgbCol1[GREEN]+","+rgbCol1[BLUE]+")";

  ctx.beginPath();

  if(muki) {
	  ctx.moveTo(cx - hankei * 0.76, cy - hankei * 0.36);
	  ctx.lineTo(cx + hankei * 0.36, cy + hankei * 0.76);
  }else{
    ctx.moveTo(cx + hankei * 0.76, cy - hankei * 0.36);
    ctx.lineTo(cx - hankei * 0.36, cy + hankei * 0.76);
  }

  ctx.stroke();

  let rgbCol2 = hsbToRgb(hsbCol[HUE] + 180, hsbCol[SATURATION], hsbCol[BRIGHTNESS]);

  ctx.strokeStyle = "rgb(" + rgbCol2[RED] + "," + rgbCol2[GREEN] + "," + rgbCol2[BLUE] + ")";
  
  ctx.beginPath();

  if(muki) {
	  ctx.moveTo(cx - hankei * 0.36, cy - hankei * 0.76);
	  ctx.lineTo(cx + hankei * 0.76, cy + hankei * 0.36);
  }else{
	  ctx.moveTo(cx + hankei * 0.36, cy - hankei * 0.76);
	  ctx.lineTo(cx - hankei * 0.76, cy + hankei * 0.36);
  }
  ctx.stroke();
}

function drawUnit(hsbCol, cx, cy, hankei) {
  let rgbCol = hsbToRgb(hsbCol[HUE], hsbCol[SATURATION], hsbCol[BRIGHTNESS]);
  ctx.fillStyle = "rgb(" + rgbCol[RED] + "," + rgbCol[GREEN] + "," + rgbCol[BLUE] + ")";
  ctx.beginPath();
  ctx.arc(cx, cy, hankei, 0, Math.PI * 2, true);
  ctx.fill();
}

let HUE = 0;
let SATURATION = 1;
let BRIGHTNESS = 2;
let unitKazu = 8;

let unitYokoKazu = unitKazu + 1;
let unitTateKazu = unitKazu * 2 + 1;
let unitSize, offsetX, offsetY;

let RED = 0;
let GREEN = 1;
let BLUE = 2;

function setup(){
  unitSize = Math.min(screenWidth, screenHeight) / unitKazu;
  offsetX = screenWidth / 2 - (unitKazu * unitSize) /2;
  offsetY = screenHeight / 2 - (unitKazu * unitSize) / 2 - unitSize / 2;
}

function loop(){

  let passedTime = new Date().getTime();

  ctx.clearRect(0, 0, screenWidth, screenHeight);
  for(let i=0; i<unitTateKazu * unitYokoKazu; ++i) {
    let tateNum = parseInt(i / unitYokoKazu);
    let yokoNum = i % unitYokoKazu;
    let x = offsetX + unitSize * yokoNum + unitSize / 2;
    if(tateNum % 2 == 1) x -= unitSize / 2;
    let y = offsetY + unitSize / 2 * tateNum + unitSize / 2;
    
    // let shikiso = i / (unitYokoKazu * unitTateKazu) * 360 + passedTime / 1000 * 60;
	  let shikiso = i / (unitYokoKazu * unitTateKazu) * 360 + passedTime / 1000 * 60;
    let saido = curYubiX / screenWidth * 255;
	  //let saido = 255;
    //let meido = curYubiY / screenHeight * 255;
	  let meido =((Math.sin(yokoNum / unitYokoKazu * Math.PI * 2) + 1) / 2 * 0.6 + 0.4) * 255;

    let hsbCol1 = [shikiso, saido, meido];
	  let muki = true;
	  if(tateNum % 2 == 1){
      muki = false;
	  }
    //drawUnit(hsbCol1, x, y, unitSize / 2);
    drawUnitSankuzushi(hsbCol1, x, y, unitSize / 2, muki);
  }

  ctx.fillStyle = "white";
  if(screenWidth < screenHeight) {
    let ookisa = (screenHeight - screenWidth) / 2;
    ctx.fillRect(0, 0, screenWidth, ookisa);
    ctx.fillRect(0, screenHeight - ookisa, screenWidth, ookisa);
  } else {
    let ookisa = (screenWidth - screenHeight) / 2;
    ctx.fillRect(0, 0, ookisa, screenHeight);
    ctx.fillRect(screenWidth - ookisa, 0, ookisa, screenHeight);
  }
}

function touchStart(){
	
}

function touchMove(){
	
}

function touchEnd(){
	
}
