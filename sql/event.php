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

    function editEvent($name,$desc,$price,$start,$open,$close,$loc,$img,$slot,$city,$cat,$id){
        global $pdo;
        $query = "update event set name=:name,slot=:slot,location=:loc,description=:desc,image=:img,start=:start,openregis=:open,closeregis=:close,
        price=:price,city_id=:city,category_id=:cat where id=:id";
        $sth = $pdo->prepare($query);
        $sth->execute(array(
            'name' => $name, 'slot' => $slot,'loc'=>$loc, 'desc' => $desc,
            'img' => $img, 'start' => $start, 'open' => $open, 'close' => $close,
            'price' => $price, 'city'=>$city, 'cat' => $cat,"id" =>$id
        ));
    }

    function deleteEvent($id,$email){
        global $pdo;
        $sth = $pdo->prepare('delete from event where id=:id and email=:email');
        $sth->execute(array('id'=>$id,'email'->$email));
    }

    function getAllEvent(){
        global $pdo;
        $query = "SELECT ev.* FROM event ev
        join city ci on ci.id = ev.city_id 
        join category ca on ca.id = ev.category_id";
        $city = '';
        $category = '';
        $bind = array();
        if(isset($_GET['city']) && $_GET['city']){
            $query.= " where ci.name = :city ";
            $city = $_GET['city'];
            $bind['city'] = $city;
        }
        if(isset($_GET['category']) && $_GET['category']){
            $query.= " and ca.category = :category ";
            $category = $_GET['category'];
            $bind['category'] = $category;
        }
        $query .= " order by ev.id desc";
        // var_dump($query,$bind);
        $sth = $pdo->prepare($query);
        $sth->execute($bind);
        return $sth->fetchAll();
    }

    function getEventDetail($id){
        global $pdo;
        $sth = $pdo->prepare("SELECT *,e.name as name, us.name as hostName FROM event e
        inner join user us on e.email = us.email
        where e.id = :id");
        $sth->execute(array(
            'id' => $id,
        ));
        return $sth->fetch();
    }
?>