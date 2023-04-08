function render() {
    drawLine(100, 100, 200, 200, '#f0000');
}

function drawRect(x, y, width, height, color) {
    if(color != null) {
        ctx.fillStyle = color;
    }
    ctx.fillRect(x, y, width, height);
}

function drawLine(x1, y1, x2, y2, color, width = 1) {
    if(color != null) {
        ctx.strokeStyle = color
    }

    ctx.lineWidth = width;

    ctx.beginPath();

    ctx.moveTo(x1, y1);

    ctx.lineTo(x2, y2);

    ctx.closePath();

    ctx.stroke();
}