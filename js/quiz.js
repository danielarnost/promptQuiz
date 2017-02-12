var questions = [
  ['How many states are in the United States?', 50],
  ['How many continents are there?', 7],
  ['How many legs does an insect have?', 6]
];
var correctAnswers = 0;
var question;
var answer;
var response;
var correct = [];
var wrong = [];
 // var html;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

//this function creates a list of the answers to 'questions'
//builds an ol after looping through questions and answers
function buildList(arr){
var listHTML = '<ol>';
for (var i = 0; i < arr.length; i++){
listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

//question postion 0 //answer postion 1
//response variable is updated to be user input from prompt
//answer is given in pisutio 1 above, then counters update
for (var i = 0; i < questions.length; i++) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswers += 1;
    correct.push(question);
  }else{
    wrong.push(question);
  } 
}

html = "You got " + correctAnswers + " question(s) right."
html += '<h2> You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2> You got these questions wrong:</h2>';
html += buildList(wrong);
print(html);




