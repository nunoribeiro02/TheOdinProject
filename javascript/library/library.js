var table = document.querySelector("table");
var bookForm = document.querySelector(".book-form");
var bookFormContent = document.querySelector(".book-form-content");
var btnAddBook = document.querySelector("#add-book");
var span = document.querySelector(".close");

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

// Add books

btnAddBook.onclick = function() {
    bookForm.style.display = "block";
}

span.onclick = function() {
    bookForm.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == bookForm) {
        bookForm.style.display = "none";
    }
}
  
function addBookToLibrary(book) {
    myLibrary.push(book);
}

function removeBookFromLibrary(book) {
    myLibrary.splice(myLibrary.indexOf(book), 1);
}

function deafultBooks(){
    console.log('default books')
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
        var book = myLibrary[i];
        var tr = document.createElement("tr");
        
        createCell(book.title, tr);
        createCell(book.author, tr);
        createCell(book.pages, tr);
        createCell(book.read, tr);

        var removeBtn = document.createElement("button");
        removeBtn.appendChild(document.createTextNode("Remove"));
        removeBtn.addEventListener('click', (e) => {
            const btn = e.currentTarget;
            const row = btn.parentNode;
            const index = Array.from(table.children).indexOf(row);
            if (index > -1) {
                removeBookFromLibrary(myLibrary[index]);
                table.removeChild(table.children[index]);
            }
        });

        tr.appendChild(removeBtn);

        table.appendChild(tr);
    }
}

function createCell(text, row) {
    var cell = document.createElement("td");
    cell.appendChild(document.createTextNode(text));
    row.appendChild(cell);
}
