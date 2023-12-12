function createBoard(){
    const board = document.querySelector(".board");

    for (i = 0; i < 16; i++){
        let div_row = document.createElement('div');
        div_row.style.color = i + 1000;
        board.append(div_row);

        for (j = 0; j < 16; j++){
            let div_column = document.createElement('div');
            div_row.style.alpha = i + 1000;
            board.append(div_column);

        }
    }   
}


createBoard();