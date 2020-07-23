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
        where t.email=:email order by t.id desc');
        $sth->execute(array(
            'email' => $email
        ));
        return $sth->fetchAll();
    }
    /**
     * email > user email
     */
    function getTicketDetail($ticketid,$email){
        global $pdo;
        $sth = $pdo->prepare('select t.id as ticketid,t.status as t_status, e.*,
        tr.name as biller_name,tr.email as biller_email,tr.payment_method 
        from ticket t
        inner join event e on e.id = t.event
        left join transaction tr on tr.ticket= t.id
        where t.id = :id and t.email = :email');
        $sth->execute(array(
            'id' => $ticketid,
            'email' => $email
        ));
        return $sth->fetch();
    }
    function updateStatus($status,$ticket){
        global $pdo;
        $sth = $pdo->prepare('update ticket set status=:status where id=:id');
        return $sth->execute(array(
            "status"=>$status,
            "id"=>$ticket
        ));
    }
    
    function getPrice($ticket){
        global $pdo;
        $sth = $pdo->prepare('select price from ticket where id = :id');
        $sth->execute(array('id'=>$ticket));
        return $sth->fetch();
    }
    function getParticipant($event,$email){
        global $pdo;
        $sth = $pdo->prepare('select t.*,u.*,tr.name as biller_name,tr.email as biller_email,tr.payment_method from ticket t
        inner join user u on u.email  = t.email
        inner join event e on e.id = t.event
        left join transaction tr on tr.ticket= t.id
        where t.event = :event and e.email = :email');
        $sth->execute(array(
            'event' => $event,
            'email' => $email
        ));
        return $sth->fetchAll();
    }
?>