var questions = [
  ['How many states are in the United States?', 50],
  ['How many continents are there?', 7],
  ['How many legs does an insect have?', 6]
];
var correctAnswers = 0;
var question;
var answe
var response;
var correct = [];
var wrong = [];
 

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList(arr){
var listHTML = '<ol>';
for (var i = 0; i < arr.length; i++){
listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}








  for(var i=0; i < questions.length; i++) {
  }
}