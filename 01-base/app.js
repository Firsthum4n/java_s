let num = 42
let firstName = 'Philipp'
const isProgrammer = true

// can do
// let $ = 'test'
// let $num = 42
// let num$ = 42
// let _ = 40

// firstName = 'Mateo'
// isProgrammer = false error  because of const

// console.log(num + 10)
// console.log(num - 10)
// console.log(num * 10)
// console.log(num / 10)
// console.log(num % 10)

// let num2 = num + 10

// console.log(num2)

// num = num + 1 
// console.log(num)

// let num3 = (num + 10) / 2
// console.log(num3)

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plustBtn = document.getElementById('plus')
const minustBtn = document.getElementById('minus')

plustBtn.onclick = function () {
    action = '+'
}

minustBtn.onclick = function () {
    action = '-'
}



submitBtn.onclick = function () {
    if (action == '+') {
        const sum = Number(input1.value) + Number(input2.value)
        if (sum < 0) {
            resultElement.style.color = 'red'
        } else {
            resultElement.style.color = 'green'
        }
        resultElement.textContent = sum
    } else if (action == '-') {
        const sum = Number(input1.value) - Number(input2.value)
        if (sum < 0) {
            resultElement.style.color = 'red'
        } else {
            resultElement.style.color = 'green'
        }
        resultElement.textContent = sum
    }

    
}

