<?php

$to = "zakaz@xn--80aatdc1a2bk3c.online";	
$admin_email =  "zakaz@xn--80aatdc1a2bk3c.online";

$subject = "Заявка с сайта ФинЗащита";

$c = true;
foreach ( $_POST as $key => $value ) {	
	if ($key == 'Телефон'){
		$value = '<a href="tel:'.$value.'">'.$value.'</a>';
	 } 		
	 $key = str_replace('_', ' ', $key);
	$message .= "
	" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
	<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
	<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
</tr>
";
}

$message = "<table style='width: 100%;'>$message</table>";

$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: ФинЗащита <".$admin_email.">\r\n";

mail($to, $subject, $message, $headers);

?>