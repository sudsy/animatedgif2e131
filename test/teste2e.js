var should = require("should");
var fs = require("fs");
var sinon = require("sinon");
var e131 = require("node-e131");

describe.skip('When starting animation for the test gif image',function(){

  var AnimatedGif2E131 = require('../');
  var thisGif;

  before(function(){

    var buf = fs.readFileSync("test/assets/testanimation.gif");
    thisGif = new AnimatedGif2E131(buf,{},AnimatedGif2E131.mapping.gryCols);


  });

  it('should call the e131 module send function more than 20 times in the first second', function(done){
    thisGif.startAnimation();
    setTimeout(function(){
      sinon.spy(thisGif.output.controller.universeControllers[1]._socket, "send");
    }, 40);

    setTimeout(function(){
      // thisGif.stopAnimation();
      // should(e131.send.callCount).be.greaterThan(25);
      // done();

      should(thisGif.output.controller.universeControllers[1]._socket.send.callCount).be.greaterThan(20);
      done();
    }, 1000);
  });

  it('should have the correct data going out on the udp port for frame 1', function(){
    console.log(thisGif.output.controller.universeControllers[1]._socket.send.getCall(0).args[0][126]);
    console.log(thisGif.output.controller.universeControllers[1]._socket.send.getCall(0).args[0][127]);
    console.log(thisGif.output.controller.universeControllers[1]._socket.send.getCall(0).args[0][128]);
    console.log(thisGif.output.controller.universeControllers[1]._socket.send.getCall(0).args[0][129]);
    console.log(thisGif.output.controller.universeControllers[1]._socket.send.getCall(0).args[0][136]);
    console.log(thisGif.output.controller.universeControllers[1]._socket.send.getCall(0).args[0][137]);
    console.log(thisGif.output.controller.universeControllers[1]._socket.send.getCall(0).args[0][138]);
    console.log(thisGif.output.controller.universeControllers[1]._socket.send.getCall(0).args[0][139]);
    console.l
  });

  it('should have the correct data going out on the udp port for frame 2', function(){
    console.log(thisGif.output.controller.universeControllers[1]._socket.send.getCall(1).args[0][126]);
    console.log(thisGif.output.controller.universeControllers[1]._socket.send.getCall(1).args[0][127]);
    console.log(thisGif.output.controller.universeControllers[1]._socket.send.getCall(1).args[0][128]);
    console.log(thisGif.output.controller.universeControllers[1]._socket.send.getCall(1).args[0][129]);
  });

  it('should have the correct data going out on the udp port for frame 3', function(){
    console.log(thisGif.output.controller.universeControllers[1]._socket.send.getCall(2).args[0][126]);
    console.log(thisGif.output.controller.universeControllers[1]._socket.send.getCall(2).args[0][127]);
    console.log(thisGif.output.controller.universeControllers[1]._socket.send.getCall(2).args[0][128]);
    console.log(thisGif.output.controller.universeControllers[1]._socket.send.getCall(2).args[0][136]);
    console.log(thisGif.output.controller.universeControllers[1]._socket.send.getCall(2).args[0][137]);
    console.log(thisGif.output.controller.universeControllers[1]._socket.send.getCall(2).args[0][138]);
    console.log(thisGif.output.controller.universeControllers[1]._socket.send.getCall(2).args[0][139]);
    console.log(thisGif.output.controller.universeControllers[1]._socket.send.getCall(2).args[0][140]);
  });

  it('should have the correct data going out on the udp port for frame 4', function(){
    console.log(thisGif.output.controller.universeControllers[1]._socket.send.getCall(3).args[0][126]);
  });
});
