var ib = document.querySelectorAll(".inputBtn");
var res = document.getElementById("display").value;
var ob = document.querySelectorAll(".lastbtn");
document.getElementById("clear").addEventListener("click", clear);
var isMouseclick = 0;

var isEmpty = false;
var stack = [];

ib.forEach((button) => {
  button.addEventListener("click", function () {
    var op1 = button.innerText;
    isMouseclick = 1;
    if (isEmpty) {
      document.getElementById("display").value = "";
      isEmpty = false;
    }
    document.getElementById("display").value += op1;
  });
});

ob.forEach((button) => {
  button.addEventListener("click", function () {
    var operator = button.innerText;
    if (isOperator() ) {
      var op2 = document.getElementById("display").value;
      var opr = stack.pop();
      var op1 = stack.pop();
      var result = calculation(parseInt(op1), parseInt(op2), opr);
      console.log(`${op1} ${opr} ${op2} = ${result}`);
      document.getElementById("display").value = result;
      isMouseclick=0;
    }
    // else{
    //     stack[stack.length -1]=operator;
    // }
    if(operator !== "="){
    stack.push(document.getElementById("display").value);
    stack.push(operator);
    isEmpty = true;
        if (isEmpty) {
        document.getElementById("display").value = stack[0];
        }
    }
  });
});


function clear() {
  document.getElementById("display").value = "";
  stack.length = 0;
}


function tos() {
  return stack[stack.length - 1];
}


function isOperator() {
  if (tos() == "+" || tos() == "-" || tos() == "*" || tos() == "/") {
    return true;
  } else {
    return false;
  }
}


function calculation(op1, op2, temp) {
  switch (temp) {
    case "+":
      return op1 + op2;
    case "-":
      return op1 - op2;
    case "*":
      return op1 * op2;
    case "/":
      return op1 / op2;
  }
}