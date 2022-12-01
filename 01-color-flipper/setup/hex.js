const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById('btn')
const color = document.querySelector('.color')


button.addEventListener('click', changeHex) 


function changeHex(){
    let newHex = []
    for (let index = 0; index < 6; index++) {
        const random = hex[Math.floor(Math.random() * 16)]
        newHex.push(random)
    } 
    let newColor = "#" + newHex.join("")
    console.log(newColor)
    color.innerHTML = newColor
    color.style.color = newColor
}
