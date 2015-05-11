// snake.js


module.exports = function(sourceX, sourceY, width, height){
	var channelNumber;
	if(sourceY % 2){
		//We are on an odd row
		channelNumber = ((width - sourceX - 1) * 3) + (sourceY * width * 3) + 1;
	}else{
		channelNumber = (sourceX * 3) + (sourceY * width * 3) + 1;
	}

	return{universe: (Math.floor(channelNumber / 512) + 1), channel: channelNumber % 512};
};
