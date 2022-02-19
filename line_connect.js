function setup() { //First to be executed
	ctx.beginPath();
	//Connect and draw lines
	ctx.moveTo(0, 0);
	//Screen width is screenWidth, screen height is screenHeight
	ctx.lineTo(screenWidth, screenHeight);
	ctx.lineTo(screenWidth / 3, screenHeight);
	ctx.lineTo(0, screenHeight);
	ctx.lineTo(0, 0);
	//stroke is a border
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(screenWidth * 0.5, screenHeight * 0.1);
	ctx.lineTo(screenWidth, 0);
	ctx.lineTo(screenWidth * 0.8, screenHeight * 0.6);
	ctx.lineTo(screenWidth * 0.4, screenHeight * 0.2);
	ctx.lineTo(screenWidth * 0.1, screenHeight * 0.1);
	//fill is fill
	ctx.fill();
}

function loop() { //Always executed

}

function touchStart() { //When touched (mouse down)

}

function touchMove() { //When finger is moved (mouse is moved)

}

function touchEnd() { //When finger is released (mouse up)

}