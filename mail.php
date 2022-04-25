<?php


    $_POST['submit'];

    $name =$_POST['name'];

    $subject =$_POST['subject'];

    $emailFrom =$_POST['email'];

    $message =$_POST['message'];


$mailto = "craig@craigwilson1.com";
$header = "From: ".$emailFrom;
$txt = "Portfolio email from ".$name.".\n\n".$message;


mail($mailto,  $subject, $txt, $header) or die("Oh no, something went wrong!");


echo '

<!DOCTYPE html>
<html>
    <head>
        <style>
            *{
                padding: 0;
                margin: 0;
                
            }

            .container {
                padding:0;
                margin:0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                background-color: #1c1c1c;
                height: 100vh;
                width: 100vw;

            }
            .thanks {
                color: #9d9d9d;
            font-family: "Merienda", cursive;
            font-size: 80px;
            }


            .thanks p {
                color: #9d9d9d;
            font-family: "Merienda", cursive;
            font-size: 40px;
            }

            .thanks a {
                color: white;
            }
        </style>
    </head>
    <body>
    <div id="contaner" class="container">
    <h1 id="thanks" class="thanks">Thank you for your time.</h1>
    <h1 id="thanks" class="thanks>I'll get back to you as soon as possible.</h1>
    <p>Return to<a href="index.html">Portfolio</a>.</p>
</div>
</body>
    </html>
    
    '

}

?>
