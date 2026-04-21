<?php
session_start();

// Check if user is logged in
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
</head>
<body>
    <h2>Dashboard</h2>

    <p>Welcome, <?php echo $_SESSION['username']; ?>!</p>

    <a href="logout.php">Logout</a>
</body>
</html>