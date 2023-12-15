function createBoard(){
    const board = document.querySelector(".board");

    for (i = 0; i < 16; i++){
        let div_row = document.createElement('div');

        for (j = 0; j < 16; j++){
            let div_column = document.createElement('div');
            div_column.style.backgroundColor = 'white';
            div_column.style.height = '25px';
            div_column.style.width = '25px';
            div_row.append(div_column);

        }
        board.append(div_row);
    }   
}


createBoard();