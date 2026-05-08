window.onload = function(){
    loadBooks();
}

function loadBooks(){

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "../ajax/handler.php", true);

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onload = function(){

        document.getElementById("bookTable").innerHTML = this.responseText;
    }

    xhr.send("action=fetch");
}

function addBook(){

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let category = document.getElementById("category").value;
    let status = document.getElementById("status").value;

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "../ajax/handler.php", true);

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onload = function(){

        loadBooks();
        clearForm();
    }

    xhr.send(
        "action=add"
        + "&title=" + title
        + "&author=" + author
        + "&category=" + category
        + "&status=" + status
    );
}

function editBook(id, title, author, category, status){

    document.getElementById("book_id").value = id;
    document.getElementById("title").value = title;
    document.getElementById("author").value = author;
    document.getElementById("category").value = category;
    document.getElementById("status").value = status;
}

function updateBook(){

    let id = document.getElementById("book_id").value;
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let category = document.getElementById("category").value;
    let status = document.getElementById("status").value;

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "../ajax/handler.php", true);

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onload = function(){

        loadBooks();
        clearForm();
    }

    xhr.send(
        "action=update"
        + "&id=" + id
        + "&title=" + title
        + "&author=" + author
        + "&category=" + category
        + "&status=" + status
    );
}

function deleteBook(id){

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "../ajax/handler.php", true);

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onload = function(){

        loadBooks();
    }

    xhr.send(
        "action=delete&id=" + id
    );
}

function clearForm(){

    document.getElementById("book_id").value = "";
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("category").value = "";
}