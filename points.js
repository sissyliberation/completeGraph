// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth *.8 ;
canvas.height = window.innerHeight*.8;
document.body.appendChild(canvas);

if(canvas.width > canvas.height)
	canvas.width = canvas.height;
var radius = canvas.width/2 - 20;
var nodes = 4;
points(nodes);
function points(n)  {
	canvas.width = canvas.width;
	var coords = [];
	coords.push(Math.cos(0) * radius, Math.sin(0) * radius);
	// get coordinates
	for(var i = 1; i < n; ++i) {
		angle = i * 360 * Math.PI / 180 / n;
		coords.push(Math.cos(angle) * radius, Math.sin(angle) * radius);
	}
	// draw connecting lines

	for(var i = 0; i < n*2; i+=2) {
		for(var j = 0; j< n*2; j+=2) {
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.moveTo(coords[i]+canvas.width/2, -1*coords[i+1]+canvas.width/2);
			ctx.lineTo(coords[j]+canvas.width/2, -1*coords[j+1]+canvas.width/2);
			ctx.stroke();
			ctx.closePath();
		}
	}
	// draw nodes
	for(var i = 0; i < n*2; i+=2) {
		ctx.beginPath();
		ctx.arc(coords[i]+canvas.width/2, -1*coords[i+1]+canvas.width/2, 8, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'red';	
		ctx.fill();		
		ctx.strokeStyle = '#000';
		ctx.stroke();
		ctx.closePath();
	}
	ctx.fillStyle = "black";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Vertices: "+n, 5, 5);
}

function newGraph(n) {
	if (n>=2 && n <=25) {
		nodes = n;
		points(nodes);
	}
}