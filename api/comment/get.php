<?php
    require('../index.php');
    json(getComment($_GET['id']));
?>