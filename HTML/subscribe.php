<?php

require 'plugins/PHPMailer-master/PHPMailerAutoload.php';
$mail_subscriber = new PHPMailer;
$mail_company = new PHPMailer;
//$mail->SMTPDebug = 3;

$email = $_POST['email'];
$okMessage = 'Subscribed successfully. Thank you, we will get back to you soon!';
$errorMessage = 'There was an error while trying to subscribe. Please try again later';


//Put the message together using info from the form fields
$message_final_subscriber = "You are now subscribed to Allura Template news with the following Email address: $email";
$message_final_company = "New subscriber to Allura Template. Email address: $email";

//Set up mail that is to be sent to the subscriber to notify them of a successful subscription.
$mail_subscriber->isSMTP();
$mail_subscriber->SMTPSecure = 'ssl';
$mail_subscriber->SMTPAuth = true;
$mail_subscriber->Host = 'smtp.gmail.com';
$mail_subscriber->Port = 465;
//Username to use for SMTP authentication - use full email address for gmail
$mail_subscriber->Username = 'your_email_here@gmail.com'; //Enter your gmail address here
//Password to use for SMTP authentication
$mail_subscriber->Password = 'your_password_here'; //Enter your gmail acount password here
//Set who the message is to be sent from
$mail_subscriber->setFrom('your_email_address_here@gmail.com', 'Allura Template');
//Set who the message is to be sent to
$mail_subscriber->addAddress($email);
//Set the subject line
$mail_subscriber->Subject = 'Subscribed to Allura Template!';
$mail_subscriber->Body = $message_final_subscriber;

//Set up mail that is to be sent to the site owner to notify them of a new subscription
$mail_company->isSMTP();
$mail_company->SMTPSecure = 'ssl';
$mail_company->SMTPAuth = true;
$mail_company->Host = 'smtp.gmail.com';
$mail_company->Port = 465;
//Username to use for SMTP authentication - use full email address for gmail
$mail_company->Username = 'your_email_here@gmail.com'; // Enter your gmail address here
//Password to use for SMTP authentication
$mail_company->Password = 'your_password_here'; //Enter your gmail acount password here
//Set who the message is to be sent from
$mail_company->setFrom($email);
//Set who the message is to be sent to
$mail_company->addAddress('youremailaddresshere@gmail.com');
//Set the subject line
$mail_company->Subject = 'New Allura Template Subscription';
$mail_company->Body = $message_final_company;

//send the message, check for errors
try
{
	if (!$mail_subscriber->send())
	{
		$responseString = 'danger' . "|" . $errorMessage;
		echo $responseString;
	}
	else
	{
		$responseString = 'success' . "|" . $okMessage;
		echo $responseString;
	}

	if (!$mail_company->send())
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