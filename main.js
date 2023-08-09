let numberOfSquares = prompt('Enter the number of pixels needed for the sketchbook');
const container = document.querySelector('.container');
container.style.gridTemplateColumns = `repeat(${numberOfSquares},1fr)`;
container.style.gridTemplateRows = `repeat(${numberOfSquares},1fr)`;
let amount = numberOfSquares * numberOfSquares;
for(let i=0;i<amount;i++){
    let square = document.createElement('div');
    square.className = 'squares';
    square.style.backgroundColor = 'white';
    container.insertAdjacentElement('beforeend',square);
    square.addEventListener('mousedown',()=>{
        square.style.backgroundColor = 'black';
    })
}

let squares = document.querySelectorAll('.squares')

function reset(){
    squares.forEach(square => {
        square.style.backgroundColor='white';
    });
}

function eraser(){
    squares.forEach(square=>{
        square.addEventListener('mousedown',()=>{
            square.style.backgroundColor='white';
        })
    })
}

function black(){
    squares.forEach(square=>{
        square.addEventListener('mousedown',()=>{
            square.style.backgroundColor='black';
        })
    })
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function random(){
    squares.forEach(square=>{
        square.addEventListener('mousedown',()=>{
            let randomColor = getRandomColor();
            square.style.backgroundColor=randomColor;
        })
    })
}
