<?php
    function handleError($err){
        http_response_code(500);
        echo $err;
    }
?>