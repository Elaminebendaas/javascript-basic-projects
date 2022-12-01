const decreaseBtn = document.getElementById('decrease')
const resetBtn = document.getElementById('reset')
const increaseBtn = document.getElementById('increase')
const value = document.getElementById('value')
let counter = 0

//Reaction to button click
increaseBtn.addEventListener('click', increase)
decreaseBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)

//Functions
function increase(){
    counter ++ 
    console.log(counter)
    value.innerHTML = `${counter}`
    if (counter < 0) {
        value.style.color = '#bb2525'
    }else if (counter > 0) {
        value.style.color = "#25bb32"
    }
    if(counter == 0){
        value.style.color = '#222'
    }
}
function decrease(){
    counter --
    value.innerHTML = `${counter}`
    if (counter < 0) {
        value.style.color = '#bb2525'
    }else if (counter > 0) {
        value.style.color = "#25bb32"
    }
    if(counter == 0){
        value.style.color = '#222'
    }
}
function reset(){
    counter = 0
    value.innerHTML = `${counter}`
    if (counter < 0) {
        value.style.color = '#bb2525'
    }else if (counter > 0) {
        value.style.color = "#25bb32"
    }
    if(counter == 0){
        value.style.color = '#222'
    }
}


console.log(counter)
