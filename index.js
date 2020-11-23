var chalk = require('chalk');
var readlineSync = require ('readline-sync');
var score=0;
var counter=0;
const log = console.log;
console.log(chalk.red('Welcome to IPL 2020 Quiz'));
console.log(chalk.white('NOTE : Input answers as abbreviations, If answers is Kolkata Knight Riders, you give answer input as KKR '));

var starting = readlineSync.question('Are you Ready ? ');
console.log(chalk.green('You Entered ----> ' + starting));
if (starting === 'yes')
{
console.log(chalk.blue('Let us get started'));
}
else
{
console.log(chalk.red('Good Bye'));
}
function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer)
  {
    console.log(chalk.green('Right ! '));
    score = score+1;
  }
  else {
    console.log(chalk.red('Wrong ! '));
  }
  console.log("Current Score is ",score);
  console.log('---------------------------');
}
var hiscore =
[
  {
    name:"Madhav",
    score:5
  },
  {
    name:"Virat",
    score:4
  }
]
var questions = [{
  question:'Virat Kohli is captain of ? ',
  answer:'RCB'
},{
  question:'IPL 2020 was held in ? ',
  answer:'UAE'
},{
  question:'Shah Rukh Khan is the Owner of ? ',
  answer:'KKR'
},{
  question:'IPL 2020 is won by ',
  answer:'MI'
},{
  question:'Which team wear Yellow Jersey ',
  answer:'CSK'
},{
  question:'Which team has most IPL Trophies ? ',
  answer:'MI'
}];
for (var i = 0;i<questions.length;i++)
{
  var currentQuestion = questions[i];
  play (currentQuestion.question, currentQuestion.answer)
}
for(var j=0;j<hiscore.length;j++)
{
  if(hiscore[j].score<score)
  {
    counter=counter+1;
  }
}
console.log('Final score is '+score);
if(counter>0)
{
  console.log("you beaten high score");
}
console.log('-------');