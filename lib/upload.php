<?php 
    function uploadFile($event){
        global $rootDirectory;
        global $host;
        
        if(isset($_FILES['image'])){
            $img = $_FILES['image'];
            move_uploaded_file($img['tmp_name'],$rootDirectory.'/uploads/'.$event.$img['name']);
            return $host.'/uploads/'.$event.$img['name'];
        }
        return false;     
    }
?>