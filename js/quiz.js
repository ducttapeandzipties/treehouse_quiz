var counter = 0;
var score = 0;

function print(message) {
  document.write(message);
}
var quizData = [           // array for qestions, answers and guesses.
  ["How many hours in a day?", 24],
  ["How many legs on a dog?", 4],
  ["How many days in a year?", 365],
  ["How many wheels on a car?", 4]
]

while (counter < quizData.length ){
  quizData[counter].push(prompt(quizData[counter][0]));
    if (quizData[counter][1] == quizData[counter][2]){
      score += 1;
    }

  counter += 1;
}
