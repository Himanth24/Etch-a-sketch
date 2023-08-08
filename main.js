let numberOfSquares = prompt('enter the number');
const container = document.querySelector('.container');
container.style.gridTemplateColumns = `repeat(${numberOfSquares},1fr)`;
container.style.gridTemplateRows = `repeat(${numberOfSquares},1fr)`;
let amount = numberOfSquares * numberOfSquares;
for(let i=0;i<amount;i++){
    let square = document.createElement('div');
    square.style.backgroundColor = 'white';
    container.insertAdjacentElement('beforeend',square);
    square.addEventListener('mousedown',()=>{
        square.style.backgroundColor = 'black';
    })
}



