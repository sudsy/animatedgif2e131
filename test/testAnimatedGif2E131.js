
var should = require("should");
var fs = require("fs");

describe('When loading the test gif image',function(){

  var AnimatedGif2E131 = require('../lib/AnimatedGif2E131.js');
  var thisGif;

  before(function(){

    var buf = fs.readFileSync("test/assets/testanimation.gif");
    thisGif = new AnimatedGif2E131(buf);

  });

  it('should have an array of 4 frames stored',function(){

     // debugger;
     should(thisGif.frameData.length).equal(3);
  });

  it('should have white in the top left corner of frame 1',function(){

     // debugger;
     for (var i = 0; i < 3; i++ ){
       should(thisGif.frameData[0][i]).equal(255);
     }

  });

  it('should have black in the bottom right corner of frame 1',function(){

     // debugger;
     for (var i = 396; i < 399; i++ ){
       should(thisGif.frameData[0][i]).equal(0);
     }

  });

  it('should have black in the top left corner of frame 2',function(){

     // debugger;
     for (var i = 0; i < 3; i++ ){
       should(thisGif.frameData[1][i]).equal(0);
     }

  });

  it('should have white in the top right corner of frame 2',function(){

     // debugger;
     for (var i = 37; i < 39; i++ ){
       should(thisGif.frameData[1][i]).equal(255);
     }

  });

  it('should have black in the top right corner of frame 3',function(){

     // debugger;
     for (var i = 37; i < 39; i++ ){
       should(thisGif.frameData[2][i]).equal(0);
     }

  });

  it('should have red in the bottom right corner of frame 3',function(){

     // debugger;

       should(thisGif.frameData[2][396]).equal(255);
       should(thisGif.frameData[2][397]).equal(0);
       should(thisGif.frameData[2][398]).equal(0);
       should(thisGif.frameData[2][399]).equal(255);

  });


});
