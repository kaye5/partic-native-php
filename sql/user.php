<?php
    require_once __DIR__.'/../config.php';
    
    function addUser($name,$email,$password,$phone){
        global $pdo;
        $sth = $pdo->prepare('INSERT INTO user (name,email,password,phone) values(:name,:email,:password,:phone)');
        return $sth->execute(array(
            'email' => strtolower($email),
            'name' => $name,            
            'password' => $password,
            'phone' => $phone
        ));
    }

    function findUserWithPassword($email,$password){
        global $pdo;
        $sth = $pdo->prepare('SELECT * FROM user where email=:email and password=:password');
        $sth->execute(array(
            'email' => strtolower($email),
            'password' => $password
        ));
        return $sth->fetch();
    }
    function findUser($email){
        global $pdo;       
        // $sth = $pdo->prepare('SELECT FROM user where email=:email');
        $sth = $pdo->prepare("SELECT * FROM user where email=:email");
        $sth->execute(array(
            'email' => strtolower($email),
        ));
        return $sth->fetch();
    }

    function updateUser($email,$password,$name,$phone){
        global $pdo;
        $sth = $pdo->prepare("UPDATE user SET email=:email, password=:password, name=:name, phone=:phone WHERE email=:email");
        return $sth->execute(array(
            "email" => $email,
            "password" => $password,
            "name" => $name,
            "phone" => $phone
        ));
    }
?>