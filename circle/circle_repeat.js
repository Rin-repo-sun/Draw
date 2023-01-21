let unitKazu = 16;
let unitSize = 60;

function setup() { //First to be executed

}

function loop() { //Always executed
	for(let i=0; i < unitKazu*unitKazu; ++i) {
		let tateNum = parseInt(i / unitKazu);
		let yokoNum = i % unitKazu;
		let x = unitSize * yokoNum + unitSize / 2;
		let y = unitSize * tateNum + unitSize / 2;

		let hankei = unitSize / 2;

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