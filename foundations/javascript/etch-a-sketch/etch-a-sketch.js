function createBoard(maxRows, maxColumns){
    const board = document.querySelector(".board");

    // Limmit is 100
    if (maxRows > 100){
        maxRows = 100;
        maxColumns = 100;
    }

    blockSize = 25;
    size = maxColumns * blockSize;
    for (i = 0; i < maxRows; i++){
        let div_row = document.createElement('div');
        
        for (j = 0; j < maxColumns; j++){
            let div_column = document.createElement('div');
            div_column.style.backgroundColor = 'white';
            div_column.style.height = blockSize + 'px';
            div_column.style.width = blockSize + 'px';
            
            div_column.addEventListener('mouseover', function(e){paint(e, mode)});
            
            div_row.append(div_column);
            
        }
        
        board.append(div_row);
    }   
}

//Create a 16x16 board
createBoard(16, 16);

// Color Variables
mode = "Normal";

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

alpha = 0;


// Buttons code
const btnNormal = document.querySelector(".normal");
btnNormal.addEventListener('click', function (e) {
    mode = "Normal";
    e.target.style.backgroundColor = 'rgb(174, 170, 92)';
    btnRainbow.style.backgroundColor = 'rgb(253, 248, 192)';
    btnDarkning.style.backgroundColor = 'rgb(253, 248, 192)';

});

const btnRainbow = document.querySelector(".rainbow");
btnRainbow.addEventListener('click', function (e) {
    mode = "Rainbow";
    e.target.style.backgroundColor = 'rgb(174, 170, 92)';
    btnNormal.style.backgroundColor = 'rgb(253, 248, 192)';
    btnDarkning.style.backgroundColor = 'rgb(253, 248, 192)';


});

const btnDarkning = document.querySelector(".darkening");
btnDarkning.addEventListener('click', function (e) {
    mode = "Darkening";
    alpha = 0;
    //e.target.style.backgroundColor = 'rgb(255, 248, 132)';
    e.target.style.backgroundColor = 'rgb(174, 170, 92)';
    btnNormal.style.backgroundColor = 'rgb(253, 248, 192)';
    btnRainbow.style.backgroundColor = 'rgb(253, 248, 192)';

});

const btnGrid = document.querySelector(".grid");
btnGrid.addEventListener('click', function () {
    const userInput = prompt("Insert the size of the new grid (eg. 8, 10, 16)");
    createBoard(userInput, userInput);

});


function paint(e, mode){
    console.log(mode)
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
    }
}