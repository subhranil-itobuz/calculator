const input = document.getElementById('input')
const operatorBtn = document.querySelectorAll('.operator-btn')
const operandBtn = document.querySelectorAll('.operand-btn')
const clearBtn = document.getElementById('clearBtn')
const signBtn = document.getElementById('signBtn')
const deleteBtn = document.getElementById('deleteBtn')
const evalBtn = document.getElementById('evalBtn')

let operand1 = 0;
let operand2 = 0;
let operator = '';

input.value = ''

clearBtn.addEventListener('click', () => input.value = '')

deleteBtn.addEventListener('click', () => {
  if (input.value === 'Infinity')
    clearBtn.click()
  else
    input.value = input.value.substring(0, input.value.length - 1)
})

operandBtn.forEach(element => {
  element.addEventListener('click', () => {
    if (operator === '') {
      input.value += element.innerHTML
      operand1 = input.value
    }
    else {
      input.value = element.innerHTML
      operand2 += input.value
    }
  })
});

operatorBtn.forEach(element => {
  element.addEventListener('click', () => {
    input.value = element.innerHTML
    operator = input.value
  })
})

signBtn.addEventListener('click', () => {
  if (input.value.charAt(0) === '-')
    input.value = input.value.slice(1)
  else
    input.value = '-' + input.value
})