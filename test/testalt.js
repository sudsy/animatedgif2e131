
var should = require("should");
var fs = require("fs");
var sinon = require("sinon");

describe('When loading the Alternate test gif image',function(){

  var AnimatedGif2E131 = require('../');
  var thisGif;

  before(function(){

    var buf = fs.readFileSync("test/assets/alttest.gif");
    thisGif = new AnimatedGif2E131(buf);
     sinon.spy(thisGif.output, "send");



  });

  it('should have an array of 12 frames stored',function(){

     // debugger;
     should(thisGif.frameData.length).equal(12);
  });

  it('should have black in all pixels of frame 1',function(){
    var frameNum = 0;


     // debugger;
     for (var i = 0; i < 36 * 5 * 4; i++ ){
       //Ignore transparency for this test
       if((i + 1) % 4 !== 0 ){
         should(thisGif.frameData[frameNum][i]).equal(0, "Array Element " + i);
       }

     }

  });

  it('should have black in all pixels of frame 2 except for a strip of white at the bottom',function(){
    var frameNum = 1;

     for (var i = 0; i < 36 * 5 * 4; i++ ){
       //Ignore transparency for this test
       if((i + 1) % 4 !== 0 ){
         if(i >= 631 && i <= 663){
           should(thisGif.frameData[frameNum][i]).equal(255, "Array Element " + i);
         }else{
           should(thisGif.frameData[frameNum][i]).equal(0, "Array Element " + i);
         }


       }

     }

  });

  it('should have black in all pixels of frame 3 except for 2 strips of white at the bottom',function(){
    var frameNum = 2;
     // debugger;
     for (var i = 0; i < 36 * 5 * 4; i++ ){
       //Ignore transparency for this test
       if((i + 1) % 4 !== 0 ){
         if((i >= 631 && i <= 663) || (i >= 488 && i <= 519)){
           should(thisGif.frameData[frameNum][i]).equal(255, "Array Element " + i);
         }else{
           should(thisGif.frameData[frameNum][i]).equal(0, "Array Element " + i);
         }


       }
      //  console.log(i + " - " + thisGif.frameData[frameNum][i]);
     }

  });

  it('should have black in all pixels of frame 4 except for 3 strips of white at the bottom',function(){
    var frameNum = 3;
     // debugger;
     for (var i = 0; i < 36 * 5 * 4; i++ ){
       //Ignore transparency for this test
       if((i + 1) % 4 !== 0 ){
         if((i >= 631 && i <= 663) || (i >= 487 && i <= 519) || (i >= 343 && i <= 375) ){
           should(thisGif.frameData[frameNum][i]).equal(255, "Array Element " + i);
         }else{
           should(thisGif.frameData[frameNum][i]).equal(0, "Array Element " + i);
         }


       }
      //  console.log(i + " - " + thisGif.frameData[frameNum][i]);
     }

  });

  


});
