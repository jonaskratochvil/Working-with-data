// when putting the data to json file you need to put {} around and put all in quotationmarks


let flower;

// I have to type it here as it takes some time to load a if in setup it would not have enough
// time for that, hence I execute it first
function preload() {
	flower = loadJSON("flower.json");
}


function setup() {
	createCanvas(600, 400)
	// this is a Javascript object of data 
	// flower = {
	// 	name: "sunflower",
	// 	col: color(200, 255, 0)
	// }
}

function draw() {
	background(0);
	fill(flower.r, flower.g, flower.b);
	text(flower.name, 10, 50);
}