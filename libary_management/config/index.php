<!DOCTYPE html>
<html>
<head>
    <title>Library Management System</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

<h2>Library Management System</h2>

<input type="hidden" id="book_id">

<input type="text" id="title" placeholder="Book Title">

<input type="text" id="author" placeholder="Author Name">

<input type="text" id="category" placeholder="Category">

<select id="status">
    <option value="Available">Available</option>
    <option value="Borrowed">Borrowed</option>
</select>

<button onclick="addBook()">Add Book</button>

<button onclick="updateBook()">Update Book</button>

<hr>

<table border="1" width="100%" cellpadding="10">

    <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Status</th>
            <th>Action</th>
        </tr>
    </thead>

    <tbody id="bookTable">

    </tbody>

</table>

<script src="script.js"></script>

</body>
</html>