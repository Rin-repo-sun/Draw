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

let shikiso;
let saido;
let meido;

let RED = 0;
let GREEN = 1;
let BLUE = 2;

function setup(){
	shikiso = 0;
	saido = 0;
	meido = 0;
}

function loop(){
	shikiso += 1;
	if(shikiso > 360){
		shikiso -= 360;
	}
	
	saido = curYubiX/screenWidth*255;

	meido = curYubiY/screenHeight*255;

	let rgbCol = hsbToRgb(shikiso, saido, meido);

	ctx.clearRect(0, 0, screenWidth, screenHeight);
	ctx.fillStyle = "rgb("+rgbCol[RED]+","+rgbCol[GREEN]+","+rgbCol[BLUE]+")";
	ctx.fillRect(screenWidth/4, screenHeight/2-screenWidth/4, screenWidth/2, screenWidth/2);
	
	ctx.fillStyle = "black";
	ctx.font = "36px serif";
	ctx.fillText("色相(sample)："+parseInt(shikiso)+" / 360", screenWidth/4*3+10, screenHeight/2+screenWidth/4-105);
	ctx.fillText("彩度(sample)："+parseInt(saido)+" / 255", screenWidth/4*3+10, screenHeight/2+screenWidth/4-55);
	ctx.fillText("明度(sample)："+parseInt(meido)+" / 255", screenWidth/4*3+10, screenHeight/2+screenWidth/4-5);
}

function touchStart(){
	
}

function touchMove(){
	
}

function touchEnd(){
	
}
