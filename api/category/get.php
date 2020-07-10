<?php
    require_once(__DIR__.'/../index.php');
    $data = new ArrayObject();
    foreach (getCategory() as $row) {
        $data->append($row->category);
    }
    json($data);
?>