var canvas, ctx;
var screenWidth, screenHeight;
var curFingerX, curFingerY, FingerTouched;

window.onload = function(){
	canvas = document.getElementById('canvas');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	if ( ! canvas || ! canvas.getContext ) {
		return false;
	}
	ctx = canvas.getContext('2d');
	ctx.strokeStyle = 'rgb(15,34,61)';
	screenWidth = canvas.width;
	screenHeight = canvas.height;
	
	curFingerX = screenWidth/2;
	curFingerY = screenHeight/2;
	
	//SP
	canvas.addEventListener("touchstart",function(evt) {
		evt.preventDefault();
		var rect = canvas.getBoundingClientRect();
		var bai = screenWidth/rect.width;
		FingerTouched = true;
		curFingerX = (evt.changedTouches[0].pageX - (rect.left + window.pageXOffset))*bai;
		curFingerY = (evt.changedTouches[0].pageY - (rect.top + window.pageYOffset))*bai;
		touchStart();
	}, false);
	
	canvas.addEventListener("touchmove", function(evt) {
		evt.preventDefault();
		var rect = canvas.getBoundingClientRect();
		var bai = screenWidth/rect.width;
		curFingerX = (evt.changedTouches[0].pageX - (rect.left + window.pageXOffset))*bai;
		curFingerY = (evt.changedTouches[0].pageY - (rect.top + window.pageYOffset))*bai;
		touchMove();
	}, false);
	
	canvas.addEventListener("touchend",function(evt) {
		evt.preventDefault();
		var rect = canvas.getBoundingClientRect();
		var bai = screenWidth/rect.width;
		FingerTouched = false;
		curFingerX = (evt.changedTouches[0].pageX - (rect.left + window.pageXOffset))*bai;
		curFingerY = (evt.changedTouches[0].pageY - (rect.top + window.pageYOffset))*bai;
		touchEnd();
	}, false);
	
	//PC
	canvas.addEventListener("mousedown", function(evt){
		var rect = canvas.getBoundingClientRect();
		FingerTouched = true;
		var bai = screenWidth/rect.width;
		curFingerX = (evt.clientX - rect.left)*bai;
		curFingerY = (evt.clientY - rect.top)*bai;
		touchStart();
	}, false);
	
	canvas.addEventListener("mousemove", function(evt){
		var rect = canvas.getBoundingClientRect();
		var bai = screenWidth/rect.width;
		curFingerX = (evt.clientX - rect.left)*bai;
		curFingerY = (evt.clientY - rect.top)*bai;
		touchMove();
	}, false);
	
	canvas.addEventListener("mouseup", function(evt){
		var rect = canvas.getBoundingClientRect();
		FingerTouched = false
		var bai = screenWidth/rect.width;
		curFingerX = (evt.clientX - rect.left)*bai;
		curFingerY = (evt.clientY - rect.top)*bai;
		touchEnd();
	}, false);

	setup();
	
	function updateScreen() {
		loop()
		requestAnimationFrame(updateScreen);
	}
	updateScreen();
	
}
