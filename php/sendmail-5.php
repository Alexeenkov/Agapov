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
	$mail->Subject = 'Клиент заполнил форму ПОДОБРАТЬ КВАРТИРУ на Вашем сайте';

	// Сколько комнат в квартире
	if($_POST['how-many-rooms__buy'] == "studio"){
		$how_many_rooms__buy = "Студия";
	} else if($_POST['how-many-rooms__buy'] == "one"){
		$how_many_rooms__buy = "1-комнатная квартира";
	} else if($_POST['how-many-rooms__buy'] == "two"){
		$how_many_rooms__buy = "2-комнатная квартира";
	} else if($_POST['how-many-rooms__buy'] == "three"){
		$how_many_rooms__buy = "3-комнатная квартира";
	} else if($_POST['how-many-rooms__buy'] == "four"){
		$how_many_rooms__buy = "4-комнатная квартира";
	} else if($_POST['how-many-rooms__buy'] == "other"){
		$how_many_rooms__buy = "Клиент выбрал 'Другой вариант' при указании количества комнат";
	};

	//Тело письма
	$body = '<h1>Клиент на сайте заполнил форму "Подобрать квартиру"! Его данные:</h1>';
	
	if(trim(!empty($_POST['how-many-rooms__buy']))){
		$body.='<p><strong>Квартира:</strong> '.$how_many_rooms__buy.'</p>';
	}
	if(trim(!empty($_POST['to']))){
		$body.='<p><strong>Желаемая площадь квартиры:</strong> от '.$_POST['from'].' до '.$_POST['to'].' квадратных метров</p>';
	}
	if(trim(!empty($_POST['to-2']))){
		$body.='<p><strong>Стоимость квартиры:</strong> от '.$_POST['from-2'].' до '.$_POST['to-2'].' тысяч рублей</p>';
	}
	if(trim(!empty($_POST['metro']))){
		$body.='<p><strong>Станция метро:</strong> '.$_POST['metro'].'</p>';
	}
	if(trim(!empty($_POST['name-5']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['name-5'].'</p>';
	}
	if(trim(!empty($_POST['telNumber-5']))){
		$body.='<p><strong>Номер телефона:</strong> '.$_POST['telNumber-5'].'</p>';
	}

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		header('location: /thanks.html');
	} else {
		header('location: /thanks.html');
	}
?>