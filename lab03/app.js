
(function() {
    let myScreen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let eq = document.querySelector('.btn-eq');
  
    buttons.forEach(function(button) {
      button.addEventListener('click', function(e) {
        if (e.target.dataset.hasOwnProperty('num')) {
          let value = e.target.dataset.num;
          myScreen.value += value;
        }
      });
    });
  
    eq.addEventListener('click', function(e) {
      if (myScreen.value === "") {
        myScreen.value = "";
      } else {
        try {
          let answer = evaluateExpression(myScreen.value);
          myScreen.value = answer;
        } catch (error) {
          myScreen.value = "Invalid expression";
        }
      }
    });
  
    clear.addEventListener('click', function(e) {
      myScreen.value = "";
    });
  
    // Function to evaluate the expression using custom logic
    function evaluateExpression(expression) {
      // Replace trigonometric functions with their calculated values
      expression = expression.replace(/sin/g, "Math.sin");
      expression = expression.replace(/cos/g, "Math.cos");
      expression = expression.replace(/tan/g, "Math.tan");
  
  
      // Replace square root function with its calculated value
      expression = expression.replace(/sqrt/g, "Math.sqrt");
  
      // Evaluate the expression using JavaScript's built-in math functions
      return Function('"use strict";return (' + expression + ')')();
    }
  })();
  