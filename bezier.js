function setup() { //First to be executed
	ctx.beginPath();
	ctx.moveTo(100, 100);
	ctx.lineTo(200, 100);
	//A cubic Bezier curve
	ctx.bezierCurveTo(900, 200, 0, 300, 200, 400);
	ctx.closePath();
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(200, 500);
	//Quadratic Bezier curve
	ctx.quadraticCurveTo(300, 600, 100, 700);
	ctx.closePath();
	ctx.stroke();
}

function loop() { //Always executed

}

function touchStart() { //When touched (mouse down)

}

function touchMove() { //When finger is moved (mouse is moved)

}

function touchEnd() { //When finger is released (mouse up)

}