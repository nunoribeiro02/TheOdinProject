function createBoard(maxRows, maxColumns){
    const board = document.querySelector(".board");

    // Limmit is 100
    if (maxRows > 100){
        maxRows = 100;
        maxColumns = 100;
    }

    for (i = 0; i < maxRows; i++){
        let div_row = document.createElement('div');

        for (j = 0; j < maxColumns; j++){
            let div_column = document.createElement('div');
            div_column.style.backgroundColor = 'white';
            div_column.style.height = '25px';
            div_column.style.width = '25px';
            div_row.append(div_column);

        }
        board.append(div_row);
    }   
}

//Create a 16x16 board
createBoard(16, 16);


mode = "Normal";

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