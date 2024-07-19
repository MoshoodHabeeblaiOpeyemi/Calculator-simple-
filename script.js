document.addEventListener("DOMContentLoaded", function() {
  
  alert("This Calc is glitchy currently, we urge you to click on the Reset button before starting the arithmetic operation");
  
});

var num =document.querySelectorAll(".keypad");
var answerSpace = document.getElementById('answerSpace');

let answerDisplayed=false

num.forEach(function(key){
    key.addEventListener('click', function(){
        var buttonText=key.textContent;
        if(answerSpace.textContent.length <=11)
        {answerSpace.textContent+=buttonText}
        else{
            alert("INPUT SPACE FULL");
            
        }
    });
});
const multiply = document.querySelector(".keyPad.x")
      multiply.addEventListener("click", function(){
        answerSpace.textContent+= "*"
      })


const resetButton=document.querySelector ('.keySp.reset')
     resetButton.addEventListener("click", function(){
        answerSpace.textContent=" ";
     })

const delButton = document.querySelector(".keyPadD.del")
      delButton.addEventListener("click", function(){
        var currentText= answerSpace.textContent;
        answerSpace.textContent=currentText.slice(0,-1);
      })     

const equalsButton = document.querySelector(".keySp.equals");
      equalsButton.addEventListener("click", function(){
        const expression=answerSpace.textContent;
        const operator =getOperator(expression);
        if(operator){
            const result=evaluateExpression(expression, operator);
            answerSpace.textContent=result;
        }
      });      
      function getOperator(expression) {
        const operators = ['+', '-','/','*'];
        for(let i=0; 1<operators.length; i++){
            if(expression.includes(operators[i])){
                return operators[i];
            }
        }
        return null;
      }

      function evaluateExpression (expression, operator){
        const num1 = parseFloat(expression.split(operator)[0]);
        const num2 = parseFloat(expression.split(operator)[1]);
        switch(operator){
            case '+':return num1 + num2;
            case '-':return num1 - num2;
            case '/':return num1 / num2;
            case '*':return num1 * num2;
            default:return 'Error';
        }
      }
       var theme1=document.getElementById('toggle1');
       var theme2=document.getElementById('toggle2');
       var theme3=document.getElementById('toggle3');
       var body =document.querySelector('body');
       var header=document.querySelector('.header');
       var themes=document.querySelector(".themes");
       var keyPane=document.querySelector(".keyPane");
       var x=document.querySelector(".keyPad.x")
       
       




theme2.addEventListener("click", function(){
        body.classList.remove("bodyForTheme3");
        header.classList.remove("headerForTheme3");
        themes.classList.remove("themesForTheme3");
        theme1.style.background=" "
        theme2.style.background=" "
        theme3.style.background=" ";
        answerSpace.classList.remove("answerForTheme3");
        keyPane.classList.remove("keyPaneForTheme3");
        for (var i=0; i<num.length; i++){
          num[i].classList.remove("keypadForTheme3")
        }
        x.classList.remove("keyPadForTheme3");
        delButton.style.background=''
        delButton.classList.remove('delBackground')
        resetButton.classList.remove('delBackground')
        equalsButton.classList.remove('eqlBackground')
        resetButton.style.background=''
        equalsButton.style.background=''

        body.classList.add("bodyForTheme2");
        header.classList.add("headerForTheme2");
        themes.classList.add("themesForTheme2");
        theme1.style.background="hsl(0, 5%, 81%)"
        theme3.style.background="hsl(0, 5%, 81%)"
        theme2.style.background="brown";
        answerSpace.classList.add("answerForTheme2");
        keyPane.classList.add("keyPaneForTheme2");
        for (var i=0; i<num.length; i++){
          num[i].classList.add("keypadForTheme2")
        }
        x.classList.add("keyPadForTheme2");
        delButton.style.background='hsl(185, 42%, 37%)'
        resetButton.style.background='hsl(185, 42%, 37%)'
        equalsButton.style.background='hsl(25, 98%, 40%)'
        theme1.onmouseover=function(){
       this.style.background='red'
       };
       theme1.onmouseout=function(){
        this.style.background='hsl(0, 5%, 81%)'
       };
       theme3.onmouseover=function(){
        this.style.background='red'
       };
       theme3.onmouseout=function(){
        this.style.background='hsl(0, 5%, 81%)'
       };
       })

       



       theme3.addEventListener("click", function(){
        body.classList.add("bodyForTheme3");
        header.classList.add("headerForTheme3");
        themes.classList.add("themesForTheme3");
        theme1.style.background=" hsl(268, 71%, 12%)"
        theme2.style.background=" hsl(268, 71%, 12%)"
        theme3.style.background="hsl(177, 92%, 70%)";
        answerSpace.classList.add("answerForTheme3");
        keyPane.classList.add("keyPaneForTheme3");
        for (var i=0; i<num.length; i++){
          num[i].classList.add("keypadForTheme3")
        }
        x.classList.add("keyPadForTheme3");
        delButton.style.background=' hsl(281, 89%, 26%)'
        delButton.classList.add('delBackground')
        resetButton.classList.add('delBackground')
        equalsButton.classList.add('eqlBackground')
        resetButton.style.background=' hsl(281, 89%, 26%)'
        equalsButton.style.background='hsl(176, 100%, 44%)'
        theme1.onmouseover=function(){
       this.style.background='hsl(177, 92%, 70%)'
       };
       theme1.onmouseout=function(){
        this.style.background='hsl(268, 71%, 12%)'
       };
       theme2.onmouseover=function(){
        this.style.background='hsl(177, 92%, 70%)'
       };
       theme2.onmouseout=function(){
        this.style.background='hsl(268, 71%, 12%)'
       };
       })

       


       theme1.addEventListener("click", function(){
        body.classList.remove("bodyForTheme3");
        header.classList.remove("headerForTheme3");
        themes.classList.remove("themesForTheme3");
        theme1.style.background=" "
        theme2.style.background=" "
        theme3.style.background=" ";
        answerSpace.classList.remove("answerForTheme3");
        keyPane.classList.remove("keyPaneForTheme3");
        for (var i=0; i<num.length; i++){
          num[i].classList.remove("keypadForTheme3")
        }
        x.classList.remove("keyPadForTheme3");
        delButton.style.background=''
        delButton.classList.remove('delBackground')
        resetButton.classList.remove('delBackground')
        equalsButton.classList.remove('eqlBackground')
        resetButton.style.background=''
        equalsButton.style.background=''

        body.classList.remove("bodyForTheme2");
        header.classList.remove("headerForTheme2");
        themes.classList.remove("themesForTheme2");
        theme1.style.background=""
        theme3.style.background=""
        theme2.style.background="";
        answerSpace.classList.remove("answerForTheme2");
        keyPane.classList.remove("keyPaneForTheme2");
        for (var i=0; i<num.length; i++){
          num[i].classList.remove("keypadForTheme2")
        }
        x.classList.remove("keyPadForTheme2");
        delButton.style.background=''
        resetButton.style.background=''
        equalsButton.style.background=''
       })

























      

      
