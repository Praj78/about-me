var readlineSync = require("readline-sync");
var userName = readlineSync.question("Whats your name?");
console.log("Welcome! " + userName+"Do you know Prajwal?")
var score =0;
function play(question,answer){
  var game=readlineSync.question(question);
  if(game == answer){
    console.log("U are right");
score++;
  }else{
    console.log("U are wrong");
score;  
  }
  
 console.log( "current score is :" +score)
 console.log("---")
}
var questions =[{
  question :"Do  i stay in hubli ",
  answer:"yes"
},
{
  question :"Do i like choclates  or icecream ",
  answer:"choclates"
},
{
  question :"Do i like to drink tea or coffee ",
  answer:"coffee"
},
{
  question :"Do i like to eat  fruits  or veggies ",
  answer:"fruits"
},
{
  question :"Do i like to code  or read ",
  answer:"code"
}];
for(var i =0;i <questions.length;i++){
  var current = questions[i];
  play(current.question,current.answer);
}
console.log("YAY! You SCORED: " + score);
console.log("Check out the high scores, if you should be there ping me and I'll update it ");
console.log("Ravi : 4")
console.log("Rutwik : 3")
