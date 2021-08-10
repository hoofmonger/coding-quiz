
var answerOne = document.querySelector("#answer1")
var answerTwo = document.querySelector("#answer2")
var answerThree = document.querySelector("#answer3")
var startButton = document.querySelector(".startbutton")
var starButtonId= document.querySelector("#startbutton")
var resetButton = document.querySelector(".resetbutton")
var saveButton = document.querySelector(".savebutton")
var timerId = 60
var timerEl = document.querySelector("#timer")
var possibleCorrectAnswers = [0, 1, 2, 3]
var highScores = []
var actualCorrectAnswers = []
var result = document.querySelector("#result");

//up next, defining the correct answers with if, if else, else statements.  


    




var submitButtonOne = document.querySelector("#submit1")
submitButtonOne.addEventListener("click", questionOneFun)
console.log(answerOne)
function questionOneFun(){
         var resultStatement;
       if (answerOne.value === "4"){
        resultStatement = "Correct!";
        window.alert("Correct");
       } else {
            resultStatement = "Incorrect";
            window.alert("Incorrect");
       } 
         result.innerText = resultStatement;
        }
        var submitButtonTwo = document.querySelector("#submit2")
submitButtonTwo.addEventListener("click", questionTwoFun)
        function questionTwoFun(){
            var resultStatement;
            if (answerTwo.value === "15"){
                resultStatement = "Correct!";
                window.alert("Correct")
               } else {
                    resultStatement = "Incorrect";
                    window.alert("Incorrect")
               } 
                 result.innerText = resultStatement;
                
          
            result.innerText = resultStatement;
           }
           var submitButtonThree = document.querySelector("#submit3")
submitButtonThree.addEventListener("click", questionThreeFun)
           function questionThreeFun(){
            var resultStatement;
            if (answerThree.value === "5"){
                resultStatement = "Correct!";
                console.log(resultStatement);
                window.alert("Correct")
               } else {
                    resultStatement = "Incorrect";
                    console.log(resultStatement)
                    window.alert("Incorrect")
               } 
                 result.innerText = resultStatement;
                
           }
            
         
startButton.addEventListener("click", countdown)
function countdown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining'; 
        timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
     }
    }, 1000)
   }   console.log(countdown)

resetButton.addEventListener("click", reset)

function reset(){
location.reload()
}


  
  
//setIntervalTimer
//create a var for score, increase by one for correct answers, save score in local storage their name and score. 