<?php
    use \Firebase\JWT\JWT;
    require_once('../lib/php-jwt/JWT.php');
    require('./index.php');
    require('../lib/pdf/fpdf.php');
    $token = $_GET['token'];
    $ticketid = $_GET['ticket'];
    $decode = JWT::decode($token,$_ENV['JWT'],array('HS256'));
    $user = findUser($decode->email);
    if($user){
        $data = getTicketDetail($ticketid,$user->email);
        $pdf = new FPDF('P','mm','A4');
        // membuat halaman baru
        $pdf->AddPage();
        // setting jenis font yang akan digunakan
        $pdf->SetFont('Arial','B',16);
        // mencetak string 
        $pdf->Cell(40,10,'Partic Ticket',0,1);
        $pdf->Cell(40,10,'Participant: '.$user->name,0,1);
        $pdf->Cell(40,10,'Email: '.$user->email,0,1);
        $pdf->Cell(40,10,'Event name : '.$data->name,0,1);
        $pdf->Cell(40,10,'Status     : '.$data->t_status,0,1);        
        $pdf->Output();
    }    
?>