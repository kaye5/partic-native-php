<?php
    require_once(__DIR__.'/../index.php');
    $event = getEventDetail($_GET['id']);
    json($event);
?>