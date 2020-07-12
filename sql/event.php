<?php
/**
 * Event status 
 * OPEN
 * SOLD
 * FREE
 */
    function createEvent($name,$desc,$price,$date,$start,$open,$close,$loc,$img,$slot,$city,$cat,$email){
        global $pdo;
        $query = "insert into event (name,slot,location,description,image,datecreate,start,openregis,closeregis,
        status,price,city_id,category_id,email) values(:name,:slot,:loc,:desc,
        :img,:date,:start,:open,:close,:status,:price,:city,:cat,:email)";
        $sth = $pdo->prepare($query);
        return $sth->execute(array(
            'name' => $name, 'slot' => $slot,'loc'=>$loc, 'desc' => $desc,
            'img' => $img, 'date' => $date, 'start' => $start, 'open' => $open, 'close' => $close,
            'status' => 'open', 'price' => $price, 'city'=>$city, 'cat' => $cat, 'email' => $email
        ));
    }
    
    function editEvent($name,$desc,$price,$date,$start,$open,$close,$loc,$img,$slot,$city,$cat){
        global $pdo;
        $query = "update event set name=:name,slot=:slot,location=:loc,description=:desc,image=:img,datecreate=:date,start:start,openregis=:open,closeregis=:close,
        status=:status,price=:price,city_id=:city,category_id=:cat) values(:name,:slot,:loc,:desc,
        :img,:date,:start,:open,:close,:status,:price,:city,:cat,:email)";
        $sth = $pdo->prepare($query);
        return $sth->execute(array(
            'name' => $name, 'slot' => $slot,'loc'=>$loc, 'desc' => $desc,
            'img' => $img, 'date' => $date, 'start' => $start, 'open' => $open, 'close' => $close,
            'status' => 'open', 'price' => $price, 'city'=>$city, 'cat' => $cat
        ));
    }

    function deleteEvent(){

    }

    function getAllEvent(){
        global $pdo;
        $sth = $pdo->prepare("SELECT * FROM event order by id desc");
        $sth->execute();        
        return $sth->fetchAll();
    }

    function getEventDetail($id){
        global $pdo;
        $sth = $pdo->prepare("SELECT *,e.name as name, us.name as hostName FROM event e
        inner join user us on e.email = us.email
        where e.id = :id");
        $sth->execute(array(
            'id' => $id
        ));
        return $sth->fetch();
    }
?>