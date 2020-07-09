<?php
    use \Firebase\JWT\JWT;
    require_once(__DIR__.'/php-jwt/JWT.php');
    function authorize(){
        $token = getBearerToken(getallheaders()['Authorization']);
        $decode = JWT::decode($token,$_ENV['JWT'],array('HS256'));
        if(findUser($decode->email))
            return true;
        return false;
    }
    function authenticate(){
        $profile = findUserWithPassword($_POST['email'],$_POST['password']);
        return JWT::encode(array(
            "email" => $profile->email
        ),$_ENV['JWT']);
    }
    function getBearerToken($token){
        $bearer = explode(' ',$token);
        return $bearer[1];
    }
?>