const table = document.querySelector("table");
const bookForm = document.querySelector(".book-form");
const bookFormContent = document.querySelector(".book-form-content");
const btnAddBook = document.querySelector("#add-book");
const span = document.querySelector(".close");

const myLibrary = [];
let insert_index = 0;

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
    
    for(var i = insert_index; i < myLibrary.length; i++) {
        insert_index += 1;

        var book = myLibrary[i];
        var tr = document.createElement("tr");
        
        createCell(book.title, tr);
        createCell(book.author, tr);
        createCell(book.pages, tr, "center-text");
        createCell(book.read, tr, "center-text");
        
        var button_cell = document.createElement("td");
        button_cell.classList.add("center-button");
        
        var removeBtn = document.createElement("button");
        removeBtn.appendChild(document.createTextNode("Remove"));
        removeBtn.addEventListener('click', (e) => {
            const btn = e.currentTarget;
            const row = btn.parentNode;
            const index = Array.from(table.children).indexOf(row);
            if (index > -1) {
                removeBookFromLibrary(myLibrary[index]);
                table.removeChild(table.children[index]);
                insert_index -= 1;
            }
        });

        button_cell.appendChild(removeBtn);
        tr.appendChild(button_cell);

        table.appendChild(tr);
    }
}

function createCell(text, row, className = "") {
    var cell = document.createElement("td");
    if (className) {
        cell.classList.add(className);
    }
    cell.appendChild(document.createTextNode(text));
    row.appendChild(cell);
}


// Add book form
const btnSubmit = document.querySelector("#submit");

btnSubmit.addEventListener('click', (e) => {
    let title = document.querySelector("#title");
    let author = document.querySelector("#author");
    let pages = document.querySelector("#pages");
    let read = document.querySelector("#read");

    newBook = new Book(title.value, author.value, pages.value, read.checked);
    addBookToLibrary(newBook);
    insertIntoTable();

    btnSubmit.setClass = "close"; // close the popup form
    btnSubmit.classList.remove("close");
});