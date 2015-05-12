#Animated Gif to E1.31

This module lets you control lights by sending video output in the form of an animated gif. It was designed primarily for a grid of led strips.

##Features
* Use your favourite video editing software to create a video, convert it to an animated gif and then output to sAcn (E1.31)
* Supports common snaked cabling by default - supply a function to map in whatever way you like
* Includes a comprehensive test suite

##Usage

Command Line

```bash
Usage: animatedgif2e131 [options] <file>

 Options:

   -h, --help             output usage information
   -V, --version          output the version number
   -h, --host <value>     hostname or ip address
   -p, --port <n>         port
   -f --fps <n>           frames per second
   -m, --mapping <value>  mapping function - snake, rows, gryCols

```

The tool can also be accessed through it's api. For Example:

```javascript
var AnimatedGif2E131 = require("animatedgif2e131");

var fs = require("fs");

var options = {
  "port" : 5568,
  "host" : "127.0.0.1"
};

var buf = fs.readFileSync("myfile.gif");

var mappingFunction = AnimatedGif2E131.mapping.cols;

var theGif = new AnimatedGif2E131(buf, options, mappingFunction);

var fps = 25;

theGif.startAnimation(fps);
```
