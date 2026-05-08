<?php

require_once "../model/BookModel.php";

function createBook(){
    $title = $_POST['title'];
    $author = $_POST['author'];
    $category = $_POST['category'];
    $status = $_POST['status'];

    addBook($title, $author, $category, $status);
}

function showBooks(){

    $result = getBooks();

    while($row = mysqli_fetch_assoc($result)){

        echo "
        <tr>
            <td>{$row['id']}</td>
            <td>{$row['title']}</td>
            <td>{$row['author']}</td>
            <td>{$row['category']}</td>
            <td>{$row['status']}</td>

            <td>
                <button onclick='editBook(
                    {$row['id']},
                    \"{$row['title']}\",
                    \"{$row['author']}\",
                    \"{$row['category']}\",
                    \"{$row['status']}\"
                )'>Edit</button>

                <button onclick='deleteBook({$row['id']})'>Delete</button>
            </td>
        </tr>
        ";
    }
}

function editBookData(){

    $id = $_POST['id'];
    $title = $_POST['title'];
    $author = $_POST['author'];
    $category = $_POST['category'];
    $status = $_POST['status'];

    updateBook($id, $title, $author, $category, $status);
}

function removeBook(){

    $id = $_POST['id'];

    deleteBook($id);
}

?>