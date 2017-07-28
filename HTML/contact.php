<?php

require 'plugins/PHPMailer-master/PHPMailerAutoload.php';
$mail = new PHPMailer;
//$mail->SMTPDebug = 3;

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$okMessage = 'Contact form successfully submitted. Thank you, we will get back to you soon!';
$errorMessage = 'There was an error while submitting the form. Please try again later';


//Put the message together using info from the form fields
$message_final = 'From: ' . $name . ' ' . "\nemail: $email \n\nMessage: \n\n$message";

$mail->isSMTP();
$mail->SMTPSecure = 'ssl';
$mail->SMTPAuth = true;
$mail->Host = 'smtp.gmail.com';
$mail->Port = 465;
//Username to use for SMTP authentication - use full email address for gmail
$mail->Username = 'your_email_here@gmail.com'; //Enter your gmail address here
//Password to use for SMTP authentication
$mail->Password = 'your_password_here'; //Enter your gmail acount password here
//Set who the message is to be sent from
$mail->setFrom($email);
//Set who the message is to be sent to
$mail->addAddress('your_email_address_here@gmail.com');
//Set the subject line
$mail->Subject = 'Message from ' . $name;
$mail->Body = $message_final;
//send the message, check for errors

try
{
	if (!$mail->send())
	{
		$responseString = 'danger' . "|" . $errorMessage;
		echo $responseString;
	}
	else
	{
		$responseString = 'success' . "|" . $okMessage;
		echo $responseString;
	}
}
catch (\Exception $e)
{
	$responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

?>