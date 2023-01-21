function setup() { //First executed
	ctx.lineWidth = 40;
	//Designation of paint color
	ctx.fillStyle = 'blue';
	//Specify line color
	ctx.strokeStyle = 'red';
	ctx.beginPath();
	ctx.arc(400, 400, 200, 0, 180 * Math.PI * 2, true);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	// Fill color specification(CSS)
	ctx.fillStyle = 'rgb(0, 128, 255)';
	// Line color specification(CSS)
	ctx.strokeStyle = '#00FF00';
	ctx.beginPath();
	ctx.arc(700, 500, 300, 0, 180 * Math.PI * 2, true);
	ctx.fill();
	ctx.stroke();
	//Specify fill color(transparency (alpha value))
	ctx.fillStyle = 'rgba(121, 137, 255, 0.5)';
	ctx.beginPath();
	ctx.arc(550, 800, 300, 0, 180 * Math.PI * 2, true);
	ctx.fill();
}

function loop() { //Always executed

}

function touchStart() { //When touched(mouse down)

}

function touchMove() { //If the finger moves(or the mouse moves)

}

function touchEnd() { //When the finger is released (mouse up)

}