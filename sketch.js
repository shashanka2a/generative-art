var Spacing = 125;
var Offset = 100;
var minSize = 30;
var maxSize = 90;
var colors = ['#2a9d8f', '#e9c46b', '#f4a161', '#e76F21'];
var rectSize = 25;

function setup() {
	createCanvas(windowWidth, windowHeight,SVG);
	rectMode(CENTER);
	background("#264653");
	noStroke();

	var circleCountx = (windowWidth - 100) / Spacing;
	var circleCounty = (windowHeight - 100) / Spacing;

	for (let c = 0; c < 12; c++) {
		for (let i = 0; i < circleCountx; i++) {
			for (let j = 0; j < circleCounty; j++) {
				let colorpicker = int(random(colors.length));
				fill(colors[colorpicker]);
				let size = random(minSize, maxSize);
				ellipse(Offset + Spacing * i, Offset + Spacing * j, size, size);
				rect(Offset + Spacing * i, Offset + Spacing * j, size - rectSize, size - rectSize);
			}
		}
	}
}
function keyPressed() {
	if(keyCode === LEFT_ARROW){
		save("mySVG.svg");
		noLoop() ;
	}
}
