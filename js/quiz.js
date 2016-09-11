var counter = 0;
var score = 0;
var htmlTrue = '<h3>You got these correct:</h3><ol type="I">';
var htmlFalse = '<h3>You got these wrong:<h3><ol type="I">';

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}
var quizData = [                                          // array for qestions, answers and guesses.
  ["How many hours in a day?", 24],
  ["How many legs on a dog?", 4],
  ["How many days in a year?", 365],
  ["How many wheels on a car?", 4]
]

while (counter < quizData.length ){
  quizData[counter].push(prompt(quizData[counter][0]));   // prompt user for response, store in array
    if (quizData[counter][1] == quizData[counter][2]){    //check response against data in array
      htmlTrue += "<li>" + quizData[counter][0] + " " + quizData[counter][1] + "</li>";     // construct ordered list (true)
      score += 1;                                         // add to numberical score
    }
    else {
      htmlFalse += "<li>" + quizData[counter][0] + " " + quizData[counter][1] + "</li>";    //construct orded list (false)

    }

  counter += 1;                                           //increment loop
}

htmlTrue += "</ol>";                                      //close ordered lists
htmlFalse += "</ol>";

print("You got " + score + " correct.<br>" + htmlTrue + htmlFalse);                  //output
// print(htmlTrue);
// print(htmlFalse);
