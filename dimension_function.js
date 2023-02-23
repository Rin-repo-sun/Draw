class Choten {
	constructor(xx, yy, zz) {
    this.x = xx;
    this.y = yy;
    this.z = zz;
    this.tx = 0;
    this.ty = 0;
	this.sc = 2000;
	this.toei();
  }
  toei() {
	let gx = this.x;
	let gy = this.y;
	let gz = this.z + 3000;
	this.tx = this.sc * gx / gz;
	this.ty = this.sc * gy / gz;
  }
}
let choten = new Array();

function setup(){
	let henLength = 400;
	choten[0] = new Choten(henLength, henLength, henLength);
	choten[1] = new Choten(henLength, henLength, -henLength);
	choten[2] = new Choten(-henLength, henLength, -henLength);
	choten[3] = new Choten(-henLength, henLength, henLength);
	choten[4] = new Choten(henLength, -henLength, henLength);
	choten[5] = new Choten(henLength, -henLength, -henLength);
	choten[6] = new Choten(-henLength, -henLength, -henLength);
	choten[7] = new Choten(-henLength, -henLength, henLength);
}

function loop(){

  ctx.clearRect(0, 0, screenWidth, screenHeight);

	ctx.save();
	ctx.translate(screenWidth/2, screenHeight/2);

	ctx.lineWidth = 2;
	ctx.lineJoin = "round";
	
	ctx.strokeStyle = "black";
	ctx.beginPath();
	ctx.moveTo(choten[0].tx, choten[0].ty);
	ctx.lineTo(choten[1].tx, choten[1].ty);
	ctx.lineTo(choten[2].tx, choten[2].ty);
	ctx.lineTo(choten[3].tx, choten[3].ty);
	ctx.lineTo(choten[0].tx, choten[0].ty);
	ctx.lineTo(choten[4].tx, choten[4].ty);
	ctx.lineTo(choten[5].tx, choten[5].ty);
	ctx.lineTo(choten[6].tx, choten[6].ty);
	ctx.lineTo(choten[7].tx, choten[7].ty);
	ctx.lineTo(choten[4].tx, choten[4].ty);
	ctx.moveTo(choten[1].tx, choten[1].ty);
	ctx.lineTo(choten[5].tx, choten[5].ty);
	ctx.moveTo(choten[2].tx, choten[2].ty);
	ctx.lineTo(choten[6].tx, choten[6].ty);
	ctx.moveTo(choten[3].tx, choten[3].ty);
	ctx.lineTo(choten[7].tx, choten[7].ty);
	ctx.stroke();

	ctx.restore();
}

function touchStart(){

}

function touchMove(){
	
}

function touchEnd(){
	
}
