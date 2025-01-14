const input = document.getElementById("input");
const operatorBtn = document.querySelectorAll(".operator-btn");
const operandBtn = document.querySelectorAll(".operand-btn");
const clearBtn = document.getElementById("clearBtn");
const signBtn = document.getElementById("signBtn");
const deleteBtn = document.getElementById("deleteBtn");
const evalBtn = document.getElementById("evalBtn");
const percentageBtn = document.getElementById("percentageBtn");
const decimalBtn = document.getElementById("decimalBtn");
const squareBtn = document.getElementById('squareBtn')
const cubeBtn = document.getElementById('cubeBtn')
const factorialBtn = document.getElementById('factorialBtn')

let operand1 = 0;
let operand2 = 0;
let operator = "";

input.value = "";

const factorial = (n) => (n < 1) ? 1 : factorial(n - 1) * n;

clearBtn.addEventListener("click", () => {
  input.value = "";
  operand1 = 0;
  operand2 = 0;
  operator = "";
});

deleteBtn.addEventListener("click", () => {
  if (input.value === "Infinity" || input.value === "NaN" || input.value === '-Infinity') clearBtn.click();
  else input.value = input.value.substring(0, input.value.length - 1);
});

signBtn.addEventListener("click", () => {
  if (operator === "") {
    input.value = -Number(input.value);
    operand1 = input.value;
  }
});

operandBtn.forEach((element) => {
  element.addEventListener("click", () => {
    if (operator === "") {
      input.value += element.innerHTML;
      operand1 = input.value;
    } else {
      input.value += element.innerHTML;
      operand2 = input.value;
    }
  });
});

operatorBtn.forEach((element) => {
  element.addEventListener("click", () => {
    input.value = element.innerHTML;
    operator = input.value;
  });
});

evalBtn.addEventListener("click", () => {
  let result = 0;
  operand2 = operand2.toString().slice(1);
  switch (operator) {
    case "+":
      result = Number(operand1) + Number(operand2);
      break;
    case "-":
      result = Number(operand1) - Number(operand2);
      break;
    case "*":
      result = Number(operand1) * Number(operand2);
      break;
    case "/":
      result = Number(operand1) / Number(operand2);
      break;

    default:
      result = Number(operand1);
  }

  if (!Number.isInteger(result)) result = result.toFixed(2);

  input.value = result;
  operand1 = result;
  operator = "";
});

percentageBtn.addEventListener("click", () => {
  input.value = Number(operand1) / 100;
  operand1 = input.value;
});

decimalBtn.addEventListener("click", () => {
  if (!input.value.includes(".")) input.value += ".";
});

squareBtn.addEventListener('click', () => {
  operand1 = Math.pow(operand1, 2)
  evalBtn.click()
  operand1 = input.value
})

cubeBtn.addEventListener('click', () => {
  operand1 = Math.pow(operand1, 3)
  evalBtn.click()
  operand1 = input.value
})

factorialBtn.addEventListener('click', () => {
  operand1 = factorial(operand1)
  evalBtn.click()
  operand1 = input.value
})