var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

var listType = prompt('Add to Home (h), School (s), or Play (p)? Or Quit (q).  ');
var home = [];
var school = [];
var play = [];
var task;

while ( listType != 'q'){
  task = prompt('What is your task?  ');

  if(listType === "h"){
    home.push(task);

  } else if(listType === "s") {
    school.push(task);

  } else {
    play.push(task);

  }
  var listType = prompt('Add to Home (h), School (s), or Play (p)? Or Quit (q).  ');
}

    console.log(chalk.magenta('Play: ' + play.toString()));
    console.log(chalk.yellow('Home: ' + home.toString()));
    console.log(chalk.cyan('School: ' + school.toString()));



