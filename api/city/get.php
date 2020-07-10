<?php
    require_once(__DIR__.'/../index.php');
    $data = new ArrayObject();
    foreach (getCity() as $row) {
        $data->append($row->name);
    }
    json($data);
?>