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

function isBookInLibrary(title, author) {
    return myLibrary.some(book => book.title === title && book.author === author);
}


function defaultBooks(){
    console.log('default books')
    const book1 = new Book('Foundation', 'Isaac Asimov', 240, true);
    const book2 = new Book('The Poppy War', 'R.F. Kuang', 545, false);
    const book3 = new Book('The Book Of Disquiet', 'Fernando Pessoa', 432, false);
    addBookToLibrary(book1);
    addBookToLibrary(book2);
    addBookToLibrary(book3);
    insertIntoTable();
}

defaultBooks();



// Add to table
function insertIntoTable() {
    
    for(var i = insert_index; i < myLibrary.length; i++) {
        insert_index += 1;

        var book = myLibrary[i];
        var tr = document.createElement("tr");
        
        createCell(book.title, tr);
        createCell(book.author, tr);
        createCell(book.pages, tr, "center-text");

        // Clickable read cell
        createCellRead(book.read, tr);
    
        // Clickable remove cell
        createCellRemove("Remove", tr);

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

function createCellRead(text, row) {
    var read_cell = document.createElement("td");
    read_cell.classList.add("center-text");
    var read_text = document.createElement("text")
    read_text.appendChild(document.createTextNode(text));
    if (text) {
        read_text.classList.add("read");
    }
    else {
        read_text.classList.add("not-read");
    }
    read_text.addEventListener('click', (e) => {
        const cell = e.currentTarget;
        const row = cell.parentNode.parentNode;
        const index = Array.from(table.children).indexOf(row);
        console.log(index);
        console.log(myLibrary[index-1]);
        if (index >= 0 && index <= myLibrary.length) {
            // Change the text
            myLibrary[index-1].read = !myLibrary[index-1].read;
            cell.textContent = myLibrary[index-1].read; 
            // Change the class of the text
            if (myLibrary[index-1].read){
                cell.classList.remove("not-read");
                cell.classList.add("read");
            }
            else {
                cell.classList.remove("read");
                cell.classList.add("not-read");
            }
            console.log("read cell changed");
        }
    });
    read_cell.appendChild(read_text);
    row.appendChild(read_cell);
}

function createCellRemove(text, row) {
    var remove_cell = document.createElement("td");
    remove_cell.classList.add("center-text");
    var remove_text = document.createElement("text")
    remove_text.appendChild(document.createTextNode(text));
    remove_text.classList.add("remove-button");
    remove_text.addEventListener('click', (e) => {
        const cell = e.currentTarget;
        const row = cell.parentNode.parentNode;
        const index = Array.from(table.children).indexOf(row);
        console.log(index);
        console.log(myLibrary[index-1]);
        if (index >= 0 && index <= myLibrary.length) {
            myLibrary.splice(index-1, 1);
            table.deleteRow(index);
            console.log("book removed");
        }
    });
    remove_cell.appendChild(remove_text);
    row.appendChild(remove_cell);
}

// Add book form
const btnSubmit = document.querySelector("#submit");

btnSubmit.addEventListener('click', (e) => {
    let title = document.querySelector("#title");
    let author = document.querySelector("#author");
    let pages = document.querySelector("#pages");
    let read = document.querySelector("#read");

    console.log("Title:", title.value);
    console.log("Author:", author.value);
    console.log("Pages:", pages.value);

    if (title.value.trim() === "" || author.value.trim() === "" || pages.value.trim() === "" || isNaN(pages.value)) {
        alert("Please fill in all fields with valid values");
        return;
    }
    if (isBookInLibrary(title.value, author.value)) {
        alert("Book already exists in the library. Please choose a different book.");
        return;
    }

    newBook = new Book(title.value, author.value, pages.value, read.checked);
    addBookToLibrary(newBook);
    insertIntoTable();

    btnSubmit.setClass = "close"; // close the popup form
    btnSubmit.classList.remove("close");
    bookForm.style.display = "none";

});