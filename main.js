let color = 'black';

function reset(){
    let squares = document.querySelectorAll('.squares')
    squares.forEach(square => {
        square.style.backgroundColor='white';
    });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeSquare(){
    if(color == 'random'){
        this.style.backgroundColor = getRandomColor();
    }
    else{
        this.style.backgroundColor = color;
    }
}

function changeColor(choice){
    color = choice;
}


function populateBoard(numberOfSquares){
    reset();
    const container = document.querySelector('.container');
    container.style.gridTemplateColumns = `repeat(${numberOfSquares},1fr)`;
    container.style.gridTemplateRows = `repeat(${numberOfSquares},1fr)`;
    let amount = numberOfSquares * numberOfSquares;
    for(let i=0;i<amount;i++){
        let square = document.createElement('div');
        square.className = 'squares';
        square.style.backgroundColor = 'white';
        container.insertAdjacentElement('beforeend',square);
        square.addEventListener('mousedown',changeSquare);
    }
}

function changeSize(n){
    const slider = document.getElementById('slider');
    const changeValue = document.getElementById('value');

    changeValue.textContent = `Value: ${n}`;
    populateBoard(n);
}

populateBoard(16);