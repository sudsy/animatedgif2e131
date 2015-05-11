//grycols.js

module.exports = function(sourceX, sourceY, width, height, options){
  //set this to merge rgb into one grayscale channel;
  options.greyscale = true;
  var channelNumber = (sourceY) + (sourceX * height) + 1;
	return{universe: (Math.floor(channelNumber / 512) + 1), channel: channelNumber % 512};
};
