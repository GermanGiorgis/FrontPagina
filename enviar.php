<?php
$NyA = $_POST['NyA'];
$Telefono = $_POST['Telefono'];
$Correo = $_POST['Correo'];
$descripcion = $_POST['descripcion'];

$header = 'From: ' . $mail . " \r\n"; 
$header = "X-Mailer: PHP/" . phpversion() . " \r\n";
$header = "Mime-Version: 1.0 \r\n";
$header = "Content-Type: text/plain";

$message = "Información solicitada por: " . $NyA . " \r\n";
$message .= "Correo electrónico: " . $Correo . " \r\n";
$message .= "Teléfono de contacto: " . $Telefono . " \r\n";
$message .= "Descripcion del producto solicitado: " . $descripcion . " \r\n";
$message .= "Fecha de envío: " . date('d/m/y' , time());

$para = 'germanggiorgis@gmail.com';
$asunto = 'Solicitud de información';

mail($para, $asunto, utf8_decode($message), $header);

header("Location: hornos.html");
header("Location: amasadoras.html")
?>
