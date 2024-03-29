let unitKazu = 8;

let unitYokoKazu = unitKazu + 1;
let unitTateKazu = unitKazu * 4 + 1;
let unitSize, offsetX, offsetY;

function setup() { //First to be executed
	unitSize = Math.min(screenWidth, screenHeight) / unitKazu;
	offsetX = screenWidth / 2 - unitKazu * unitSize / 2;
	offsetY = screenHeight / 2 - unitKazu * unitSize / 2 - unitSize / 4;
}

function loop() { //Always executed

	for(let i=0; i < unitTateKazu*unitYokoKazu; ++i) {
		let tateNum = parseInt(i / unitYokoKazu);
		let yokoNum = i % unitYokoKazu;
		let x = offsetX + unitSize * yokoNum + unitSize / 2;
		if (tateNum % 2 == 1) x -= unitSize / 2;
		let y = offsetY + (unitSize / 4) * tateNum + unitSize / 2;

		let hankei = unitSize / 2;

		ctx.fillStyle = "rgba(255, 220, 220, 0.7)";
		ctx.strokeStyle = "red"
		ctx.beginPath();
		ctx.arc(x, y, hankei, 0, Math.PI * 2, true);
		ctx.fill();
		ctx.stroke();
	}
}

function touchStart() { //タッチ(マウスダウン)されたら

}

function touchMove() { //指が動いたら(マウスが動いたら)

}

function touchEnd() { //指が離されたら(マウスアップ)

}