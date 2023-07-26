console.log('Hello world')

let count = 0

let minusBtn = document.querySelector('#minus-btn')
let resetBtn = document.querySelector('#reset-btn')
let plusBtn = document.querySelector('#plus-btn')
let counter = document.getElementById('counter')// dont need # with get element by ID

function decrease(){
    count -= 1
    counter.textContent = count
}
function increase(){
    count += 1
    counter.textContent = count
}

function reset(){
    count = 0
    counter.textContent = count
}

minusBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)
plusBtn.addEventListener('click', increase)
//************************************************ */

let themeBtns = document.querySelectorAll('.theme-buttons')

function selectTheme(event){
    document.querySelector('body').className = event.target.textContent
    document.querySelector('main').className = event.target.textContent
    let buttons = document.querySelectorAll('button')
    for(let i =0; i < buttons.length; i++){
        buttons[i].className = event.target.textContent
    }
}

for(let i = 0; i < themeBtns.length; i++){
    themeBtns[i].addEventListener('click', selectTheme)
}

//************************************************ */

let input = document.querySelector('input')
let inputBtn = document.querySelector('#input-btn')

function getValue(){
    // console.log(input.value)
    let h2 = document.createElement('h2')
    h2.textContent = input.value
    // console.log(h2)
    document.body.appendChild(h2)
    input.value = ''// clears input field after getting value button is pushed
}

inputBtn.addEventListener('click', getValue)