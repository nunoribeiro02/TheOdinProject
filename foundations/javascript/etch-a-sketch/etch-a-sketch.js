// Board Code
const board = document.querySelector(".board");

function createBoard(maxRows, maxColumns){
    if (maxRows > 100){ // Upper Limmit is 100
        maxRows = 100;
        maxColumns = 100;
    }
    else if (maxRows < 1 ){ // Lower Limmit is 1
        maxRows = 1;
        maxColumns = 1;
    }
    
    size = 400;
    blockSize = size / maxRows;
    for (i = 0; i < maxRows; i++){
        let div_row = document.createElement('div');
        
        for (j = 0; j < maxColumns; j++){
            let div_column = document.createElement('div');
            div_column.style.backgroundColor = 'white';
            div_column.style.height = blockSize + 'px';
            div_column.style.width = blockSize + 'px';
            
            div_column.addEventListener('mousedown', function(e){paint(e, mode)});
            div_column.addEventListener('mouseover', function(e){paint(e, mode)});
            
            div_row.append(div_column);
        }
        
        board.append(div_row);
    }   

    board.style.width = size + 'px';
    board.style.height = size + 'px';
}


function deleteBoard(){
    while (board.hasChildNodes()) {
        board.removeChild(board.firstChild);
    }
}

function newBoard(size){
    deleteBoard();
    createBoard(size, size)
}

//Create a 16x16 board
createBoard(16, 16);

// Paint Variables
mode = "Normal";

/* Colors used in Rainbow mode */
colors = [ "#70d61c" //Green
    , "#de0025" // Red
    , "#3b9dff" // Blue
    , "#ffa7a5" // Pink
    , "#73464c" // Brown
    , "#565a75" // Grey
    , "#ff8142" // Orange
    , "#fee761" // Yellow
    , "#ab58a8" // Purple
    , "#708028" // Darker Green
    , "#b6f5db" // Lighter Blue
    , "#942c4b" // Darker Red
]

alpha = 0; // Used in Darkning Mode


// Buttons code
let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

function revertColor(btn){
    btn.style.color = 'black'
    btn.style.backgroundColor = 'antiquewhite';
}

function selectButton(btn){
    btn.style.backgroundColor = 'black';
    btn.style.color = 'white';
}

const btnNormal = document.querySelector(".normal");
btnNormal.addEventListener('click', function (e) {
    mode = "Normal";
    selectButton(e.target);

    //Revert the color of the other buttons
    revertColor(btnRainbow);
    revertColor(btnDarkning);
    revertColor(btnEraser);
});

btnNormal.click(); // Click Normal so that it starts selected

const btnRainbow = document.querySelector(".rainbow");
btnRainbow.addEventListener('click', function (e) {
    mode = "Rainbow";
    selectButton(e.target);

    //Revert the color of the other buttons
    revertColor(btnNormal);
    revertColor(btnDarkning);
    revertColor(btnEraser);
});

const btnDarkning = document.querySelector(".darkening");
btnDarkning.addEventListener('click', function (e) {
    mode = "Darkening";
    alpha = 0;
    selectButton(e.target);

    //Revert the color of the other buttons
    revertColor(btnNormal);
    revertColor(btnRainbow);
    revertColor(btnEraser);
});

const btnEraser = document.querySelector(".eraser");
btnEraser.addEventListener('click', function (e) {
    mode = "Eraser";
    selectButton(e.target);

    //Revert the color of the other buttons
    revertColor(btnNormal);
    revertColor(btnRainbow);
    revertColor(btnDarkning);
});


const btnGrid = document.querySelector(".grid");
btnGrid.addEventListener('click', function () {
    const userInput = prompt("Insert the size of the new grid (eg. 8, 10, 16)");
    newBoard(userInput);
});


function paint(e, mode){
    if (e.type == "mouseover" && !mouseDown) return;

    switch (mode){
        case "Normal":
            e.target.style.backgroundColor = 'black';
            break;

        case "Rainbow":
            i = Math.round(Math.random()* colors.length);
            e.target.style.backgroundColor = colors[i];
            break;

        case "Darkening":
            if (alpha < 1) alpha += 0.05;
            e.target.style.backgroundColor = 'rgba(0, 0, 0 , ' + alpha + ')';
            break;

        case "Eraser":
            e.target.style.backgroundColor = 'white';
            break;
    }
}