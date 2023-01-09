let unitKazu = 16;
let unitSize, offsetX, offsetY;

function setup() { //First to be executed
	unitSize = Math.min(screenWidth, screenHeight) / unitKazu;
	offsetX = screenWidth / 2 - unitKazu * unitSize / 2;
	offsetY = screenHeight / 2 - unitKazu * unitSize / 2;
}

function loop() { //Always executed
	for(let i=0; i < unitKazu*unitKazu; ++i) {
		let tateNum = parseInt(i / unitKazu);
		let yokoNum = i % unitKazu;
		let x = offsetX + unitSize * yokoNum + unitSize / 2;
		let y = offsetY + unitSize * tateNum + unitSize / 2;

		let par1 = (i % (unitKazu +1)) / unitKazu;
		let hankei = par1 * unitSize / 2;

		ctx.beginPath();
		ctx.arc(x, y, hankei, 0, Math.PI * 2, true);
		ctx.fill();
	}
}

function touchStart() { //タッチ(マウスダウン)されたら

}

function touchMove() { //指が動いたら(マウスが動いたら)

}

function touchEnd() { //指が離されたら(マウスアップ)

}