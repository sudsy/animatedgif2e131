//testCanvastoE131.js

var should = require("should");
var sinon = require("sinon");
// var debug = require("debug")("tests");
// var before = should.before;

describe('When sending a one pixel white array',function(){

	var PixelArraytoE131 = require("../lib/PixelArray2E131.js");
	var output;


	before(function(){

		var pixelArray = [255,255,255,255]

		output = new PixelArraytoE131({arrayWidth : 1, arrayHeight : 1});
		output.controller.setChannel = sinon.spy();
		output.send(pixelArray);
		output.close();

	});

	it('controller setChannel should be called with universe 1 channel 1 set to 255',function(){

	 	// debugger;
	 	should(output.controller.setChannel.calledWith(1,1,255)).ok;
	});

	it('controller setChannel should be called with universe 1 channel 2 set to 255',function(){
		debugger;
	 	should(output.controller.setChannel.calledWith(1,2,255)).ok;
	});

	it('controller setChannel should be called with universe 1 channel 3 set to 255',function(){

	 	should(output.controller.setChannel.calledWith(1,3,255)).ok;
	});


});

describe('When sending a one pixel black canvas',function(){
	var PixelArraytoE131 = require("../lib/PixelArray2E131.js");
	var output;


	before(function(){

		var pixelArray = [0,0,0,255]

		output = new PixelArraytoE131({arrayWidth : 1, arrayHeight : 1});
		output.controller.setChannel = sinon.spy();
		output.send(pixelArray);
		output.close();

	});

	it('controller setChannel should be called with universe 1 channel 1 set to 0',function(){

	 	should(output.controller.setChannel.calledWith(1,1,0)).ok;
	});

	it('controller setChannel should be called with universe 1 channel 2 set to 0',function(){

	 	should(output.controller.setChannel.calledWith(1,2,0)).ok;
	});

	it('controller setChannel should be called with universe 1 channel 3 set to 0',function(){

	 	should(output.controller.setChannel.calledWith(1,3,0)).ok;
	});


});

describe('When sending a one pixel red canvas',function(){
	var PixelArraytoE131 = require("../lib/PixelArray2E131.js");
	var output;


	before(function(){

		var pixelArray = [255,0,0,255]

		output = new PixelArraytoE131({arrayWidth : 1, arrayHeight : 1});
		output.controller.setChannel = sinon.spy();
		output.send(pixelArray);
		output.close();

	});
	it('controller setChannel should be called with universe 1 channel 1 set to 255',function(){

	 	should(output.controller.setChannel.calledWith(1,1,255)).ok;
	});

	it('controller setChannel should be called with universe 1 channel 2 set to 0',function(){

	 	should(output.controller.setChannel.calledWith(1,2,0)).ok;
	});

	it('controller setChannel should be called with universe 1 channel 3 set to 0',function(){

	 	should(output.controller.setChannel.calledWith(1,3,0)).ok;
	});


});

describe('When sending a one pixel green canvas',function(){
	var PixelArraytoE131 = require("../lib/PixelArray2E131.js");
	var output;


	before(function(){

		var pixelArray = [0,255,0,255]

		output = new PixelArraytoE131({arrayWidth : 1, arrayHeight : 1});
		output.controller.setChannel = sinon.spy();
		output.send(pixelArray);
		output.close();

	});

	it('controller setChannel should be called with universe 1 channel 1 set to 0',function(){

	 	should(output.controller.setChannel.calledWith(1,1,0)).ok;
	});

	it('controller setChannel should be called with universe 1 channel 2 set to 255',function(){

	 	should(output.controller.setChannel.calledWith(1,2,255)).ok;
	});

	it('controller setChannel should be called with universe 1 channel 3 set to 0',function(){

	 	should(output.controller.setChannel.calledWith(1,3,0)).ok;
	});


});

describe('When sending a one pixel blue canvas',function(){
	var PixelArraytoE131 = require("../lib/PixelArray2E131.js");
	var output;


	before(function(){

		var pixelArray = [0,0,255,255]

		output = new PixelArraytoE131({arrayWidth : 1, arrayHeight : 1});
		output.controller.setChannel = sinon.spy();
		output.send(pixelArray);
		output.close();

	});
	it('controller setChannel should be called with universe 1 channel 1 set to 0',function(){

	 	should(output.controller.setChannel.calledWith(1,1,0)).ok;
	});

	it('controller setChannel should be called with universe 1 channel 2 set to 0',function(){

	 	should(output.controller.setChannel.calledWith(1,2,0)).ok;
	});

	it('controller setChannel should be called with universe 1 channel 3 set to 255',function(){

	 	should(output.controller.setChannel.calledWith(1,3,255)).ok;
	});


});

describe('When sending a one pixel transparent white canvas',function(){
	var PixelArraytoE131 = require("../lib/PixelArray2E131.js");
	var output;


	before(function(){

		var pixelArray = [255,255,255,0]

		output = new PixelArraytoE131({arrayWidth : 1, arrayHeight : 1});
		output.controller.setChannel = sinon.spy();
		output.send(pixelArray);
		output.close();

	});

	it('controller setChannel should be called with universe 1 channel 1 set to 0',function(){

	 	should(output.controller.setChannel.calledWith(1,1,0)).ok;
	});

	it('controller setChannel should be called with universe 1 channel 2 set to 0',function(){

	 	should(output.controller.setChannel.calledWith(1,2,0)).ok;
	});

	it('controller setChannel should be called with universe 1 channel 3 set to 0',function(){

	 	should(output.controller.setChannel.calledWith(1,3,0)).ok;
	});


});

describe('When sending a one pixel half transparent white canvas',function(){
	var PixelArraytoE131 = require("../lib/PixelArray2E131.js");
	var output;


	before(function(){

		var pixelArray = [255,255,255,127]

		output = new PixelArraytoE131({arrayWidth : 1, arrayHeight : 1});
		output.controller.setChannel = sinon.spy();
		output.send(pixelArray);
		output.close();

	});
	it('controller setChannel should be called with universe 1 channel 1 set to 127',function(){

	 	should(output.controller.setChannel.calledWith(1,1,127)).ok;
	});

	it('controller setChannel should be called with universe 1 channel 2 set to 127',function(){

	 	should(output.controller.setChannel.calledWith(1,2,127)).ok;
	});

	it('controller setChannel should be called with universe 1 channel 3 set to 127',function(){

	 	should(output.controller.setChannel.calledWith(1,3,127)).ok;
	});


});

describe('When sending a 4 pixel canvas with each pixel different colours',function(){


	var PixelArraytoE131 = require("../lib/PixelArray2E131.js");
	var output;


	before(function(){

		var pixelArray = [255,255,255,255,255,0,0,255,0,255,0,255,0,0,255,255]

		output = new PixelArraytoE131({arrayWidth : 2, arrayHeight : 2});
		output.controller.setChannel = sinon.spy();
		output.send(pixelArray);
		output.close();
		// Remember default is snake cabling
	});

	it('controller setChannel should be called with first channelgroup white',function(){

	 	should(output.controller.setChannel.calledWith(1,1,255)).ok;
	 	should(output.controller.setChannel.calledWith(1,2,255)).ok;
	 	should(output.controller.setChannel.calledWith(1,3,255)).ok;
	});

	it('controller setChannel should be called with second channelgroup red',function(){

	 	should(output.controller.setChannel.calledWith(1,4,255)).ok;
	 	should(output.controller.setChannel.calledWith(1,5,0)).ok;
	 	should(output.controller.setChannel.calledWith(1,6,0)).ok;
	});

	it('controller setChannel should be called with third channelgroup blue',function(){

	 	should(output.controller.setChannel.calledWith(1,7,0)).ok;
	 	should(output.controller.setChannel.calledWith(1,8,0)).ok;
	 	should(output.controller.setChannel.calledWith(1,9,255)).ok;
	});

	it('controller setChannel should be called with forth channelgroup green',function(){

	 	should(output.controller.setChannel.calledWith(1,10,0)).ok;
	 	should(output.controller.setChannel.calledWith(1,11,255)).ok;
	 	should(output.controller.setChannel.calledWith(1,12,0)).ok;
	});


});

describe('When sending a 4 pixel canvas with each pixel different colours to a gray cols mapping function',function(){


	var PixelArraytoE131 = require("../lib/PixelArray2E131.js");
	var output;


	before(function(){

		var pixelArray = [255,255,255,255,255,0,0,255,0,0,0,255,255,255,255,127]

		output = new PixelArraytoE131({arrayWidth : 2, arrayHeight : 2}, require("../lib/mapping/grycols.js"));
		output.controller.setChannel = sinon.spy();
		output.send(pixelArray);
		output.close();
		// Remember default is snake cabling
	});

	it('controller setChannel should be called with first channelgroup white',function(){

	 	should(output.controller.setChannel.calledWith(1,1,255)).ok;
	});

	it('controller setChannel should be called with second channelgroup black',function(){

	 	should(output.controller.setChannel.calledWith(1,2,0)).ok;
	});

	it('controller setChannel should be called with third channelgroup grey',function(){

	 	should(output.controller.setChannel.calledWith(1,3,85)).ok;
	});

	it('controller setChannel should be called with forth channelgroup mid grey because of transparency',function(){

	 	should(output.controller.setChannel.calledWith(1,4,127)).ok;
	});


});

describe('When sending a 16 by 16 pixel canvas with a single white pixel',function(){


	var PixelArraytoE131 = require("../lib/PixelArray2E131.js");
	var output;


	before(function(){

		var pixelArray = Array.apply(null, new Array(1024)).map(Number.prototype.valueOf,0);
		pixelArray[680] = 255;
		pixelArray[681] = 255;
		pixelArray[682] = 255;
		pixelArray[683] = 255;

		output = new PixelArraytoE131({arrayWidth : 16, arrayHeight : 16});
		output.controller.setChannel = sinon.spy();
		output.send(pixelArray);
		output.close();
		// Remember default is snake cabling
	});


	it('controller setChannel should be called with the pixel before the white one black',function(){

	 	should(output.controller.setChannel.calledWith(1,508,0)).ok;
	 	should(output.controller.setChannel.calledWith(1,509,0)).ok;
	 	should(output.controller.setChannel.calledWith(1,510,0)).ok;
	});

	it('controller setChannel should be called with the white pixel on the boundary of two universes',function(){

	 	should(output.controller.setChannel.calledWith(1,511,255)).ok;
	 	should(output.controller.setChannel.calledWith(1,512,255)).ok;
	 	should(output.controller.setChannel.calledWith(2,1,255)).ok;
	});

	it('controller setChannel should be called with the pixel after the white one black',function(){

	 	should(output.controller.setChannel.calledWith(2,2,0)).ok;
	 	should(output.controller.setChannel.calledWith(2,3,0)).ok;
	 	should(output.controller.setChannel.calledWith(2,4,0)).ok;
	});




});

describe('When sending a 48 by 50 pixel canvas ',function(){
	var PixelArraytoE131 = require("../lib/PixelArray2E131.js");
	var output;

	var start;
	var end;


	before(function(){

		var pixelArray = new Buffer(9600);


		output = new PixelArraytoE131({arrayWidth : 48, arrayHeight : 50});

		start = new Date().getTime();
		output.send(pixelArray);
		end = new Date().getTime();


		output.close();
		// Remember default is snake cabling
	});


	it('should send the canvas in less than 5 miliseconds', function(){
		(end - start).should.be.below(5);
	});

});
