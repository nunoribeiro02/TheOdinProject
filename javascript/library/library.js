var table = document.querySelector("table");
const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${read ? 'read' : 'not read yet'}`;
    }
} 

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function deafultBooks(){
    const book1 = new Book('Foundation', 'Isaac Asimov', 240, true);
    const book2 = new Book('The Poppy War', 'R.F. Kuang', 545, false);
    const book3 = new Book('The Book Of Disquiet', 'Fernando Pessoa', 432, false);
    addBookToLibrary(book1);
    addBookToLibrary(book2);
    addBookToLibrary(book3);
    insertIntoTable();
}

deafultBooks();



// Add to table
function insertIntoTable() {
    
    for(var i = 0; i < myLibrary.length; i++) {
        var title = myLibrary[i].title;
        var author = myLibrary[i].author;
        var pages = myLibrary[i].pages;
        var read = myLibrary[i].read;

        var tr = document.createElement("tr");
        var titleCell = document.createElement("td");
        var authorCell = document.createElement("td");
        var pagesCell = document.createElement("td");
        var readCell = document.createElement("td");

        titleCell.appendChild(document.createTextNode(title));
        authorCell.appendChild(document.createTextNode(author));
        pagesCell.appendChild(document.createTextNode(pages));
        readCell.appendChild(document.createTextNode(read));

        tr.appendChild(titleCell);
        tr.appendChild(authorCell);
        tr.appendChild(pagesCell);
        tr.appendChild(readCell);

        table.appendChild(tr);
    }
}