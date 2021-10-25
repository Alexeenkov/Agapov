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
	$mail->Subject = 'Клиент заполнил форму ПЕРВИЧНАЯ БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ на Вашем сайте';

	//Тело письма
	$body = '<h1>Клиент на сайте заполнил форму "Первичная бесплатная консультация"! Его данные:</h1>';
	
	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
	}
	
	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
	}

	if(trim(!empty($_POST['telNumber']))){
		$body.='<p><strong>Номер телефона:</strong> '.$_POST['telNumber'].'</p>';
	}
	
	if(trim(!empty($_POST['question']))){
		$body.='<p><strong>Его вопрос:</strong> '.$_POST['question'].'</p>';
	}

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		header('Location: /thanks.html');
	} else {
		header('Location: /thanks.html');
	}
?>