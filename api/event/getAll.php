<?php
    require_once(__DIR__.'/../index.php');
    $event = getAllEvent();
    json($event);
?>