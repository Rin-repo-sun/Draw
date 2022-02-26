function setup() { //First to be executed
	ctx.beginPath();
	// Arc
	ctx.arc(500, 200, 100, 30 / 180 * Math.PI, 120 / 180 * Math.PI, true);
	ctx.stroke();
	// Line width
	ctx.lineWidth = 1;

	ctx.beginPath();
	// Ellipse
	ctx.ellipse(500, 600, 200, 100, 45 / 180 * Math.PI, 30 / 180 * Math.PI, 120 / 180 * Math.PI, true);
	ctx.stroke();

	ctx.beginPath();
	// Rectangle (square)
	ctx.fillStyle = 'rgb(15,34,61)';
	ctx.rect(800, 100, 200, 400);
	ctx.fill();
}

function loop() { //Always executed

}

function touchStart() { //タッチ(マウスダウン)されたら

}

function touchMove() { //指が動いたら(マウスが動いたら)

}

function touchEnd() { //指が離されたら(マウスアップ)

}