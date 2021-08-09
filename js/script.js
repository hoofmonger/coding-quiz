var questionOne = [answerOneOne, answerTwoOne, answerThreeOne, answerFourOne]
var questionTwo = [answerOneTwo, answerTwoTwo, answerThreeTwo, answerFourTwo]
var questionThree = [answerOneThree, answerTwoThree, answerThreeThree, answerFourThree]
var answerOneOne = document.getElementById("answer1-1")
var answerTwoOne = document.getElementById("answer2-1")
var answerThreeOne = document.getElementById("answer3-1")
var answerFourOne = document.getElementById("answer4-1")
var answerOneTwo = document.getElementById("answer1-2")
var answerTwoTwo = document.getElementById("question2-2")
var answerThreeTwo = document.getElementById("question3-2")
var answerFourTwo = document.getElementById("question4-2")
var answerOneThree = document.getElementById("question1-3")
var answerTwoThree = document.getElementById("question2-3")
var answerThreeThree = document.getElementById("question3-3")
var answerFourThree = document.getElementById("answer4-3")
var startButton = document.getElementsByClassName("startbutton")
var resetButton = document.getElementsByClassName("resetbutton")
var saveButton = document.getElementsByClassName("savebutton")
var timeLeft = 60
var possibleCorrectAnswers = [0, 1, 2, 3]
var actualCorrectAnswers = []

//up next, defining the correct answers with if, if else, else statements.  

startButton.addEventListener ("click", startQuiz)

function startQuiz (){
     function questionOneFun(){
         if (addEventListener("click", answerFourOne)){
         (correctAnswers++);
         console.log(correctAnswers);
         console.log(questionOneFun);}

         else (addEventListener("click", answerOneOne, answerOneTwo, answerThreeOne));{
             console.log("Wrong Answer")
         }

        }}
