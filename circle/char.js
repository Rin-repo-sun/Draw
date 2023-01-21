function setup() { //First executed
	// Drawing text with fill
	ctx.fillText("TEST TEXT", screenWidth / 2, 200);

	ctx.strokeStyle = 'black';
	// Typeface
	ctx.font = "60px Serif";
	// Alignment
	ctx.textAlign = "right";
	// Drawing text with a border
	ctx.strokeText("TESTTEXT2.", screenWidth / 2, 400);

	ctx.fillStyle = 'grey';
	ctx.strokeStyle = 'red';
	ctx.lineWidth = 4;
	// Typeface
	ctx.font = "80px Helvetica";
	// Alignment
	ctx.textAlign = "center"
	// Draw a border before painting
	ctx.strokeText("TESTTEXT3.", screenWidth / 2, 600);
	ctx.fillText("TESTTEXT3.", screenWidth / 2, 600);
	// Paint and then draw the border
	ctx.fillText("TESTTEXT4.", screenWidth / 2, 800);
	ctx.strokeText("TESTTEXT4.", screenWidth / 2, 800);
}

function loop() { //Always executed

}

function touchStart() { //When touched (mouse down)

}

function touchMove() { //When the finger moves (or the mouse moves)

}

function touchEnd() { //When finger is released (mouse up)

}