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
	$mail->Subject = 'Клиент заполнил форму РАССЧИТАТЬ СУММУ НАЛОГА ПРИ ПРОДАЖЕ КВАРТИРЫ на Вашем сайте';

	// Примерная площадь квартиры
	if($_POST['first-radio-group'] == "contract"){
		$first_radio_group = "По договору купли-продажи";
	} else if($_POST['first-radio-group'] == "inherit"){
		$first_radio_group = "По наследству или дарению от ближайших членов семьи";
	} else if($_POST['first-radio-group'] == "privatize"){
		$first_radio_group = "В результате приватизации";
	} else if($_POST['first-radio-group'] == "transfer"){
		$first_radio_group = "В результате передачи имущества плательщику ренты";
	};

	// В каком году зарегистрировано право собственности на квартиру
	if($_POST['second-radio-group'] == "before"){
		$second_radio_group = "До 2016 года";
	} else if($_POST['second-radio-group'] == "after"){
		$second_radio_group = "После 2016 года";
	} else if($_POST['second-radio-group'] == "not-know"){
		$second_radio_group = "Клиент не обладает такой информацией (не знает)";
	};

	//Тело письма
	$body = '<h1>Клиент на сайте заполнил форму "Бесплатно рассчитать сумму налога при продаже квартиры"! Его данные:</h1>';
	
	if(trim(!empty($_POST['first-radio-group']))){
		$body.='<p><strong>На основании чего клиент получил квартиру в собственность:</strong> '.$first_radio_group.'</p>';
	}
	if(trim(!empty($_POST['second-radio-group']))){
		$body.='<p><strong>В каком году зарегистрировано право собственности на квартиру:</strong> '.$second_radio_group.'</p>';
	}
	if(trim(!empty($_POST['address-2']))){
		$body.='<p><strong>Адрес или кадастровый номер объекта недвижимости:</strong> '.$_POST['address-2'].'</p>';
	}
	if(trim(!empty($_POST['name-4']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['name-4'].'</p>';
	}
	if(trim(!empty($_POST['telNumber-4']))){
		$body.='<p><strong>Номер телефона:</strong> '.$_POST['telNumber-4'].'</p>';
	}

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		header('location: /thanks.html');
	} else {
		header('location: /thanks.html');
	}
?>