<?php

require_once "../controller/BookController.php";

if(isset($_POST['action'])){

    $action = $_POST['action'];

    if($action == "add"){
        createBook();
    }

    elseif($action == "fetch"){
        showBooks();
    }

    elseif($action == "update"){
        editBookData();
    }

    elseif($action == "delete"){
        removeBook();
    }
}

?>