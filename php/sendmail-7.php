<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require '../phpmailer/src/Exception.php';
	require '../phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->setFrom('agapovre@agapov-realtor.ru');
	//Кому отправить
	$mail->addAddress('iwan.agapov2015@gmail.com');
	//Тема письма
	$mail->Subject = 'Клиент заполнил форму "Разместить объявление на 60 площадках" на Вашем сайте!';

	//Тело письма
	$body = '<h1>Клиент на сайте заполнил форму "Разместить объявление на 60 площадках"! Его данные:</h1>';
	
	if(trim(!empty($_POST['name-7']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['name-7'].'</p>';
	}
	if(trim(!empty($_POST['telNumber-7']))){
		$body.='<p><strong>Номер телефона:</strong> '.$_POST['telNumber-7'].'</p>';
	}

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		header('Location: /thanks.html');
	} else {
		header('Location: /thanks.html');
	}
?>