<?php


if (isset($_POST['submit'])) {

    $name =$_POST['name'];

    $subject =$_POST['subject'];

    $emailFrom =$_POST['email'];

    $message =$_POST['message'];


$mailto = "cw66786@gmail.com";
$header = "From: ".$emailFrom;
$txt = "Portfolio email from ".$name.".\n\n".$message;


mail($mailto,  $subject, $txt, $header);

header("Location: index.php?mailsend");


}