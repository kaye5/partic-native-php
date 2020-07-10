<?php
    function getCity(){
        global $pdo;
        $sth = $pdo->prepare("SELECT * FROM city");
        $sth->execute();
        return $sth->fetchAll();
    }
    function getCategory(){
        global $pdo;
        $sth = $pdo->prepare("SELECT * FROM category");
        $sth->execute();
        return $sth->fetchAll();
    }
?>