
var answerOne = document.querySelector("#answer1")
var answerTwo = document.querySelector("#answer2")
var answerThree = document.querySelector("#answer3")
var startButton = document.querySelector(".startbutton")
var resetButton = document.querySelector(".resetbutton")
var saveButton = document.querySelector(".savebutton")
var timeLeft = 60
var timer = document.querySelector("#timer")
var possibleCorrectAnswers = [0, 1, 2, 3]
var highScores = []
var actualCorrectAnswers = []
var result = document.getElementsByClassName("result");

//up next, defining the correct answers with if, if else, else statements.  

var submitButtonOne = document.querySelector("#submit1")
submitButtonOne.addEventListener("click", questionOneFun)
console.log(answerOne)
function questionOneFun(){
         var resultStatement;
       if (answerOne.value === "4"){
        resultStatement = "Correct";
        console.log(resultStatement);
       } else {
            resultStatement = "Incorrect";
            console.log(resultStatement)
       } 
         result.innerText = resultStatement;
        }
        var submitButtonTwo = document.querySelector("#submit2")
submitButtonTwo.addEventListener("click", questionTwoFun)
        function questionTwoFun(){
            var resultStatement;
            if (answerTwo.value === "15"){
                resultStatement = "Correct";
                console.log(resultStatement);
               } else {
                    resultStatement = "Incorrect";
                    console.log(resultStatement)
               } 
                 result.innerText = resultStatement;
                
          
            result.innerText = resultStatement;
           }
           var submitButtonThree = document.querySelector("#submit3")
submitButtonThree.addEventListener("click", questionThreeFun)
           function questionThreeFun(){
            var resultStatement;
            if (answerThree.value === "5"){
                resultStatement = "Correct";
                console.log(resultStatement);
               } else {
                    resultStatement = "Incorrect";
                    console.log(resultStatement)
               } 
                 result.innerText = resultStatement;
                
           }
            
         
startButton.addEventListener("click", timer)
function timer() {
    console.log()
    timer.value = "timeLeft" + timeLeft
    
}
//setIntervalTimer
//create a var for score, increase by one for correct answers, save score in local storage their name and score. 