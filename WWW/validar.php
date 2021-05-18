<html>
<head>
    <meta charset="UTF-8">
    <?php
        $name = $_POST["name"];
        $email = $_POST["email"];
        $asunto = $_POST["asunto"];

        $contenido="
        Nombre: $name
        Correo: $email
        Asunto: $asunto
        ";

        $archivo = fopen("$email.txt",'w');
        fwrite($archivo,$contenido);
    ?>
</head>
<body>
    <p>Formulario enviado</p>
</body>
</html>