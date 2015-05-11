// canvastoE131.js
var Controller = require("./E131Controller.js");


/**
 * Constructor used to set up the pixelarray to send to E131
 * @param  {function} [mappingFunction] function for mapping pixels in the source to E131 universe, pixel numbers of form f(x,y){ return {universe:int,channel:int}}
 * @param  {string} [options.host] ip Address of the server (defaults to port 5568 for output)
 * @param  {string} [options.inputChannelOrder] order of the channels in the input array, at teh moment always RGBA
 * @param  {string} [options.outputChannelOrder] order of the channels in the E1.31 universe either RGB or RBG (defaults to RGB)
 * @param  {int} [options.port] port of the server (defaults to port 5568 for output)
 * @param  {int} [options.arrayWidth] how many pixels wide is the grid that generated the pixel array
 * @param  {int} [options.arrayHeight] how many pixels high is the grid that generated the pixel array
 * @return {PixelArraytoE131} an instance of the CanvastoE131 class
 */
function PixelArraytoE131(options, mappingFunction){
	options = options || {};
	options.inputChannelOrder = options.inputChannelOrder || "RGBA";
	options.outputChannelOrder = options.outputChannelOrder || "RGB";
	options.port = options.port || 5568;
	options.host = options.host || "127.0.0.1";
	options.greyscale = false;

	mappingFunction = mappingFunction || require("./mapping/snake.js");


	if(!options.arrayWidth || !options.arrayHeight){
		throw new Error("Must Set Width and Height");
	}


	this.options = options;


	//Create an Array to hold the mapping data
	this.mappingArray = new Array(options.arrayWidth * options.arrayHeight);

	var that = this;

	var mapPixel = function(x,y){
		//get the starting universe and channel
		// console.log((x+1)*(y+1));
		var arrayPosition = x + (y * options.arrayWidth);
		// console.log(arrayPosition);
		that.mappingArray[arrayPosition] = mappingFunction(x,y, options.arrayWidth, options.arrayHeight, that.options);


	};

	var y = 0;
	while(y < options.arrayHeight){
		var x = 0;
		while(x < options.arrayWidth){
			mapPixel(x,y);
			x++;
		}
		y++;
	}


	//Create a new controller for this port and host
	this.controller = new Controller(options.host, options.port);


}
//
PixelArraytoE131.prototype.send = function(pixelArray){

	if(!pixelArray){
		throw new Error("Must Send Pixel Array");
	}

	for(var i = 0; i < this.mappingArray.length; i++){
		//set the RGB values
		var mappingElement = this.mappingArray[i];
		var transparency = pixelArray[i*4 + 3] / 255;
		var universe = mappingElement.universe;
		var channel =  mappingElement.channel;

		if(this.options.greyscale){
			//Set one grayscale value if the greyscale option is set
			this.controller.setChannel(universe, channel, (pixelArray[i*4] + pixelArray[i*4 + 1] + pixelArray[i*4 + 2]) / 3 * transparency);
		}else{
			this.controller.setChannel(universe, channel, pixelArray[i*4] * transparency);
			channel++;
			if(channel > 512){ universe++; channel = 1;}
			this.controller.setChannel(universe, channel, pixelArray[i*4 + 1] * transparency);
			channel++;
			if(channel > 512){ universe++; channel = 1;}
			this.controller.setChannel(universe, channel, pixelArray[i*4 + 2] * transparency);
		}

	}

	this.controller.send();
};

PixelArraytoE131.prototype.close = function(callback) {
	this.controller.close(callback);
};

module.exports = PixelArraytoE131;
