<?php 
    function uploadFile(){
        global $rootDirectory;
        global $host;
        $img = $_FILES['image'];
        move_uploaded_file($img['tmp_name'],$rootDirectory.'/uploads/'.$img['name']);
        return $host.'/uploads/'.$img['name'];
    }
?>