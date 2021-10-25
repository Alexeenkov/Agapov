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
	$mail->Subject = 'У клиента остались вопросы после посещения Вашего сайта';

	//Тело письма
	$body = '<h1>Клиент на сайте заполнил форму на странице "Контакты"! Его данные:</h1>';
	
	if(trim(!empty($_POST['name-2']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['name-2'].'</p>';
	}
	if(trim(!empty($_POST['email-2']))){
		$body.='<p><strong>E-mail:</strong> '.$_POST['email-2'].'</p>';
	}
	if(trim(!empty($_POST['telNumber-2']))){
		$body.='<p><strong>Номер телефона:</strong> '.$_POST['telNumber-2'].'</p>';
	}
	
	if(trim(!empty($_POST['question-2']))){
		$body.='<p><strong>Его вопрос:</strong> '.$_POST['question-2'].'</p>';
	}

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		header('Location: /thanks.html');
	} else {
		header('Location: /thanks.html');
	}
?>