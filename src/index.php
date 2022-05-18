<?php 

require_once '../vendor/autoload.php';

$loader = new Twig\Loader\FilesystemLoader('templates');
$twig = new \Twig\Environment($loader, array(
    'cache' => FALSE,
    'debug' => TRUE
));

$data = file_get_contents("./data.json", 1);
$array = json_decode($data);

    echo $twig->render('layout.twig', [
        'array' => $array
    ]);

?>