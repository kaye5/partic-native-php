<?php
    require_once __DIR__.'/../config.php';
    
    function addUser($name,$email,$password,$phone,$gender){
        global $pdo;
        $sth = $pdo->prepare('INSERT INTO user (name,email,password,phone,gender) values(:name,:email,:password,:phone,:gender)');
        $sth->execute(array(
            'email' => strtolower($email),
            'name' => $name,            
            'password' => $password,
            'phone' => $phone,
            'gender' => $gender
        ));
        if($sth->errorInfo()[1] == 0)
            return true;
        return false;
    }

    function findUserWithPassword($email,$password){
        global $pdo;
        $sth = $pdo->prepare('SELECT * FROM user where email=:email and password=:password');
        $sth->execute(array(
            'email' => $email,
            'password' => $password
        ));
        return $sth->fetch();
    }
    function findUser($email){
        global $pdo;       
        $sth = $pdo->prepare("SELECT * FROM user where email=:email");
        $sth->execute(array(
            'email' => strtolower($email),
        ));
        return $sth->fetch();
    }

    function updateUser($email,$password,$name,$phone,$instagram,$job,$company,$blog,$website){
        global $pdo;
        $sth = $pdo->prepare("UPDATE user SET email=:email, password=:password, name=:name, phone=:phone,instagram=:instagram,job=:job,company=:company,blog=:blog,website=:website WHERE email=:email");
        return $sth->execute(array(
            "email" => $email,
            "password" => $password,
            "name" => $name,
            "phone" => $phone,
            "instagram" => $instagram,
            "job" => $job,
            "company" => $company,
            "blog" => $blog,
            "website" => $website,
        ));
    }
    function deleteUser($email){
        global $pdo;
        $sth = $pdo->prepare("DELETE FROM user where email=:email");
        return $sth->execute(array(
            "email" => $email
        ));
    }
?>