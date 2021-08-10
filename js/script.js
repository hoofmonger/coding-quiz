
var answerOne = document.querySelector("#answer1")
var answerTwo = document.querySelector("#answer2")
var answerThree = document.querySelector("#answer3")
var startButton = document.querySelector(".startbutton")
var resetButton = document.querySelector(".resetbutton")
var saveButton = document.querySelector(".savebutton")
var timeLeft = 60
var possibleCorrectAnswers = [0, 1, 2, 3]
var actualCorrectAnswers = []
var result = document.getElementsByClassName("result");

//up next, defining the correct answers with if, if else, else statements.  

var submitButtonOne = document.querySelector("#submit1")
submitButtonOne.addEventListener("click", console.log("click"))

function questionOneFun(){
         var resultStatement;
       if (answerOne === 4){
        resultStatement = "Incorrect";
        console.log(resultStatement);
       } else if (answerOne !== 4){
            resultStatement = "Correct";
            console.log(resultStatement)
       } 
         result.innerText = resultStatement;
        }
        function questionTwoFun(){
            var resultStatement;
          if (answerTwoTwo.checked || answerFourTwo.che2cked || answerOneTwo.checked){
           resultStatement = "Incorrect";
           console.log(resultStatement)
          }
          else if (answerThreeTwo){
               resultStatement = "Correct";
               console.log(resultStatement)
              }
          
            result.innerText = resultStatement;
           }
           function questionThreeFun(){
            var resultStatement;
          if (answerFourThree.checked || answerThreeThree.checked || answerTwoThree.checked){
           resultStatement = "Incorrect";
           console.log(resultStatement)
          }
           else if (answerOneThree){
               resultStatement = "Correct";
               console.log(resultStatement)
              }
          
            result.innerText = resultStatement;
           }
            
            
                     
        function connected() {
            console.log("connected")
        }
 connected()