#!/usr/bin/env node

var program = require("commander");

var pjson = require('../package.json');

var AnimatedGif2E131 = require("../");

var fs = require("fs");


program
  .version(pjson.version)
  .usage('[options] <file>')
  .option('-h, --host <value>', 'hostname or ip address', "127.0.0.1")
  .option('-p, --port <n>', 'port', 5568)
  .option('-f --fps <n>', 'frames per second', 25)
  .option('-m, --mapping <value>', 'mapping function - snake, rows, gryCols', "gryCols")
  .parse(process.argv);

if(program.args.length !== 1){
  console.error("Expecting the filename of an animated gif as a parameter");
  process.exit();
}

var options = {
  "port" : program.port,
  "host" : program.host
};

var buf = fs.readFileSync(program.args[0]);

var mappingFunction = AnimatedGif2E131.mapping[program.mapping];
if(!mappingFunction){
  console.error("Mapping Function " + program.mapping + " is not valid");
  process.exit();
}

var theGif = new AnimatedGif2E131(buf, options, mappingFunction);

theGif.startAnimation(program.fps);
