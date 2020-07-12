<?php
    function createTicket($status,$qty,$price,$eventid,$email){
        global $pdo;
        $sth = $pdo->prepare('insert into ticket (status,qty,price,event,email) values(
        :status,:qty,:price,:event,:email)');
        return $sth->execute(array(
            'status' => $status,
            'qty' => $qty,
            'price' => $price,
            'event' => $eventid,
            'email' => $email,
        ));
    }
    function getTicket($email){
        global $pdo;
        $sth = $pdo->prepare('select t.id,t.status,t.qty,t.price,t.datecreate,e.name,e.start,e.image,e.location
        from ticket as t
        join event as e on t.event = e.id
        where t.email=:email');
        $sth->execute(array(
            'email' => $email
        ));
        return $sth->fetchAll();
    }
?>