#!/usr/bin/env node

var program = require("commander");

var pjson = require('../package.json');

var AnimatedGif2E131 = require("../");

var inquirer = require("inquirer");

var fs = require("fs");


program
  .version(pjson.version)
  .usage('[options] <file>')
  .option('-h, --host <value>', 'hostname or ip address', "127.0.0.1")
  .option('-p, --port <n>', 'port', 5568)
  .option('-f, --fps <n>', 'frames per second', 25)
  .option('-m, --mapping <value>', 'mapping function - snake, rows, gryCols', "gryCols")
  .option('-i, --interactive', 'interactive mode - allows start, pause and restart commands')
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

if (!program.interactive){
  var theGif = new AnimatedGif2E131(buf, options, mappingFunction);

  theGif.startAnimation(program.fps);

}else{

  var theGif = new AnimatedGif2E131(buf, options, mappingFunction);
  console.log("Animation Loaded");

  var startedStateQuestions = function() {
    var questions = [
      {
        type: "list",
        name: "action",
        message: "Please Select an Option",
        choices: [ "Pause", "Pause and Lights Off", "Exit" ]
      }
    ];
    inquirer.prompt(questions, function(answers){
      switch (answers.action){
        case "Exit":
          theGif.lightsOff();
          process.exit();
          break;
        case "Pause":
          theGif.stopAnimation();
          stoppedStateQuestions();
          break;
        case "Pause and Lights Off":
          theGif.stopAnimation();
          theGif.lightsOff();
          stoppedStateQuestions();
          break;
        default:
          console.log("Unknown Option");
          process.exit();
      }

    });
  };
  var stoppedStateQuestions = function(){
    var questions = [
      {
        type: "list",
        name: "action",
        message: "Please Select an Option",
        choices: [ "Start", "All Lights Off", "Exit" ]

      }
    ];

    inquirer.prompt(questions, function(answers){
      switch (answers.action){
        case "Exit":
          theGif.lightsOff();
          process.exit();
          break;
        case "Start":
          theGif.startAnimation(program.fps);
          startedStateQuestions();
          break;
        case "All Lights Off":
          theGif.lightsOff();
          stoppedStateQuestions();
          break;
        default:
          console.log("Unknown Option");
          process.exit();
      }
    });


  };



  stoppedStateQuestions();

}
