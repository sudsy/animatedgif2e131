var omggif = require('omggif');

/**
 * Constructor used to set up the animated gif to send to E131
 * @param  {buffer} aBuffer buffer containing the animated gif to use as the source
 * @param  {function} [mappingFunction] function for mapping pixels in the source to E131 universe, pixel numbers of form f(x,y){ return {universe:int,channel:int}}
 * @param  {string} [options.host] ip Address of the server (defaults to port 5568 for output)
 * @param  {string} [options.channelOrder] order of the channels in the E1.31 universe either RGB or RBG or GRY (defaults to RGB) - Note GRY maps 3 RGB Channels to one greyscale channel value, useful for mono lights
 * @param  {int} [options.port] port of the server (defaults to port 5568 for output)
 * @return {AnimatedGif2E131} an instance of the CanvastoE131 class
 */
function AnimatedGif2E131(aBuffer, options, mappingFunction){
  options = options || {};
	options.channelOrder = options.channelOrder || "RGB";
	options.port = options.port || 5568;
	options.host = options.host || "127.0.0.1";
  var gr = new omggif.GifReader(aBuffer);

  var frameCount = gr.numFrames();
  var num_pixels = gr.width * gr.height;
  this.frameData = [];
  //create the structure to hold the pixel data
  for(var frame_num=0; frame_num < frameCount; frame_num++ ){
    var pixels = new Uint8Array(num_pixels * 4);
    gr.decodeAndBlitFrameRGBA(frame_num, pixels);
    this.frameData.push(pixels);
  }

  return this;

}

module.exports = AnimatedGif2E131;
