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
	$mail->Subject = 'Клиент заполнил форму ОЦЕНКА СТОИМОСТИ КВАРТИРЫ на Вашем сайте';

	// Сколько комнат в квартире
	if($_POST['how-many-rooms'] == "studio"){
		$how_many_rooms = "Студия";
	} else if($_POST['how-many-rooms'] == "one"){
		$how_many_rooms = "1-комнатная квартира";
	} else if($_POST['how-many-rooms'] == "two"){
		$how_many_rooms = "2-комнатная квартира";
	} else if($_POST['how-many-rooms'] == "three"){
		$how_many_rooms = "3-комнатная квартира";
	} else if($_POST['how-many-rooms'] == "four"){
		$how_many_rooms = "4-комнатная квартира";
	} else if($_POST['how-many-rooms'] == "other"){
		$how_many_rooms = "Клиент выбрал 'Другой вариант' при указании количества комнат";
	};

	// Примерная площадь квартиры
	if($_POST['size-of-the-apartment'] == "20-30"){
		$size_of_the_apartment = "20-30 кв.м.";
	} else if($_POST['size-of-the-apartment'] == "30-40"){
		$size_of_the_apartment = "30-40 кв.м.";
	} else if($_POST['size-of-the-apartment'] == "40-50"){
		$size_of_the_apartment = "40-50 кв.м.";
	} else if($_POST['size-of-the-apartment'] == "50-60"){
		$size_of_the_apartment = "50-60 кв.м.";
	} else if($_POST['size-of-the-apartment'] == "60-70"){
		$size_of_the_apartment = "60-70 кв.м.";
	} else if($_POST['size-of-the-apartment'] == "70-80"){
		$size_of_the_apartment = "70-80 кв.м.";
	} else if($_POST['size-of-the-apartment'] == "80-90"){
		$size_of_the_apartment = "80-90 кв.м.";
	} else if($_POST['size-of-the-apartment'] == "90-100"){
		$size_of_the_apartment = "90-100 кв.м.";
	} else if($_POST['size-of-the-apartment'] == "100+"){
		$size_of_the_apartment = "Больше 100 кв.м.";
	};

	// Примерная площадь квартиры
	if($_POST['floor'] == "first"){
		$floor = "Первый этаж";
	} else if($_POST['floor'] == "last"){
		$floor = "Последний этаж";
	} else if($_POST['floor'] == "not-first-last"){
		$floor = "Не первый и не последний этаж";
	};

	// Состояние ремонта
	if($_POST['repair'] == "without"){
		$repair = "Без отделки";
	} else if($_POST['repair'] == "required"){
		$repair = "Требуется ремонт";
	} else if($_POST['repair'] == "cosmetic"){
		$repair = "Косметический ремонт";
	} else if($_POST['repair'] == "european"){
		$repair = "Евроремонт";
	} else if($_POST['repair'] == "designer"){
		$repair = "Дизайнерский ремонт";
	} else if($_POST['repair'] == "other"){
		$repair = "Клиент выбрал 'Другой вариант' при указании состояния ремонта";
	};

	// Для чего нужна оценка
	if($_POST['reason'] == "interest"){
		$reason = "Просто интересуется";
	} else if($_POST['reason'] == "sale"){
		$reason = "Планирует продавать квартиру";
	} else if($_POST['reason'] == "tribunal"){
		$reason = "Для суда";
	} else if($_POST['reason'] == "section"){
		$reason = "Для раздела квартиры с родственниками";
	} else if($_POST['reason'] == "other"){
		$reason = ' ';
	};

	//Тело письма
	$body = '<h1>Клиент на сайте заполнил форму "Оценка стоимости квартиры"! Его данные:</h1>';
	
	if(trim(!empty($_POST['how-many-rooms']))){
		$body.='<p><strong>Квартира:</strong> '.$how_many_rooms.'</p>';
	}
	if(trim(!empty($_POST['size-of-the-apartment']))){
		$body.='<p><strong>Примерная площадь квартиры:</strong> '.$size_of_the_apartment.'</p>';
	}
	if(trim(!empty($_POST['floor']))){
		$body.='<p><strong>Этаж:</strong> '.$floor.'</p>';
	}
	if(trim(!empty($_POST['repair']))){
		$body.='<p><strong>Состояние ремонта:</strong> '.$repair.'</p>';
	}
	if(trim(!empty($_POST['address']))){
		$body.='<p><strong>Адрес дома, в котором находится квартира:</strong> '.$_POST['address'].'</p>';
	}
	if(trim(!empty($_POST['reason']))){
		$body.='<p><strong>Зачем клиенту нужна оценка стоимости квартиры:</strong> '.$reason.'</p>';
	}
	if(trim(!empty($_POST['other-reason']))){
		$body.='<p>'.$_POST['other-reason'].'</p>';
	}
	if(trim(!empty($_POST['name-3']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['name-3'].'</p>';
	}
	if(trim(!empty($_POST['telNumber-3']))){
		$body.='<p><strong>Номер телефона:</strong> '.$_POST['telNumber-3'].'</p>';
	}

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		header('location: /thanks.html');
	} else {
		header('location: /thanks.html');
	}
?>