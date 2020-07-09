<?php
    use \Firebase\JWT\JWT;
    require_once(__DIR__.'/php-jwt/JWT.php');
    /**
     * Authorize user using bearer jwt token send from header 
     */
    function authorize(){
        $token = getBearerToken(getallheaders()['Authorization']);
        $decode = JWT::decode($token,$_ENV['JWT'],array('HS256'));
        if(findUser($decode->email))
            return true;
        return false;
    }
    /**
     * get authentication token for access
     */
    function authenticate(){
        $profile = findUserWithPassword($_POST['email'],$_POST['password']);
        if($profile)
            return JWT::encode(array(
                "email" => $profile->email
            ),$_ENV['JWT']);
        else
            return false;
    }
    /**
     * Extract bearer token from header auth 
     */
    function getBearerToken($token){
        $bearer = explode(' ',$token);
        return $bearer[1];
    }
?>