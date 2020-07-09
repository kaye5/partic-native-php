<?php

session_start();
$host = 'http://localhost/partic';
$rootDirectory = 'C:\xampp\htdocs\partic';
date_default_timezone_set('Asia/Jakarta');
$emailAdmin = '';
// JWT Secret key
$_GLOBALS['JWT_KEY'] = 'sabu';
//database configuration
$dbuser = 'root';
$dbpass = '';
$dbname = 'partic';
//Mysql PDO  connection
$pdo = new PDO('mysql:dbname='.$dbname, $dbuser, $dbpass);
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
//uploads dir
$uploadDirectory = $rootDirectory . '/uploads/';

?>
