<?php 

require_once '../vendor/autoload.php';

$shop = array(
    'description' => array(
        'img' => '../../assets/images/shop-image.jpg', 
        'name'=> 'Афоня №2 — Ивановская', 
        'address'=> 'Ивановская ул., 17', 
        'phones'=> array('+7 (812) 648-22-11(доб. 002)', '+7 (812) 560-31-89', '+7 (812) 983-43-06'),
        'mail'=> 'iv@afonya-spb.ru',
        'tags'=> '../../assets/images/info-tags.png',
    ),
    'managers' => array(
        'manager1' => array(
            'id' => '1',
            'photo' => '../../assets/images/manager_photo_1.jpg',
            'name' => 'Маркова Анна',
            'comments' => '30',
            'ratingValue' => '4',
            'position' => 'Продавец-консультант, старший менеджер по продажам', 
            'phone' => '+7 (812) 983-43-06',
            'mail' => 'iv@afonya-spb.ru'        
        ),
        'manager2' => array(
            'id' => '2',
            'photo' => '../../assets/images/manager_photo_2.jpg',
            'name' => 'Беляев Никита',
            'comments' => '30',
            'ratingValue' => '5',
            'position' => 'Продавец-консультант, старший менеджер по продажам',
            'phone' => '+7 (812) 983-43-06',
            'mail' => 'iv@afonya-spb.ru'
        ),
        'manager3' => array(
            'id' => '3',
            'photo' => '../../assets/images/manager_photo_3.jpg',
            'name' => 'Ефимов Василий',
            'comments' => '30',
            'ratingValue' => '3',
            'position' => 'Продавец-консультант, старший менеджер по продажам',
            'phone' => '+7 (812) 983-43-06',
            'mail' => 'iv@afonya-spb.ru'
        ),
        'manager4' => array(
            'id' => '4',
            'photo' => '../../assets/images/manager_photo_4.jpg',
            'name' => 'Губин Денис',
            'comments' => '30',
            'ratingValue' => '2',
            'position' => 'Продавец-консультант, старший менеджер по продажам',
            'phone' => '+7 (812) 983-43-06',
            'mail' => 'iv@afonya-spb.ru'
        ),
    )
);
$manager = array(
    'id' => '01',
    'photo' => '../../assets/images/manager_1.jpg',
    'name' => 'Маркова Анна',
    'position' => 'Продавец-консультант, старший менеджер по продажам', 
    'address' => 'Народная ул. д.21',
    'ratingValue' => '4',
    'comment' => '30',
    'phone' => '+7 (812) 983-43-06',
    'mail' => 'iv@afonya-spb.ru',
    'skills' => 'Старший продавец высшей категории. Опыт работы в продажах сантехники 10 лет. Имеет сертификаты Hansgrohe, TOTO, Vaillant, Protherm, HUPPE, Vitra, Radomir, Grundfos, Geberit, Джилекс, SFA,Creavit. <br/><br/> Награждена поездками на завод Акватек, Geberit. <br/><br/> Лучший продавец 2018 года. Поможет вам подобрать ванну или душевую кабину, смеситель, унитаз и инсталляцию, раковину и кухонную мойку, мебель для ванны, радиатор, теплые полы, инженерную сантехнику и многое другое.',
    'certificates' => array(
        '../../assets/images/certificate_1.jpg', 
        '../../assets/images/certificate_2.jpg',
        '../../assets/images/certificate_3.jpg', 
        '../../assets/images/certificate_4.jpg', 
        '../../assets/images/certificate_5.jpg',
        '../../assets/images/certificate_1.jpg', 
        '../../assets/images/certificate_6.jpg', 
        '../../assets/images/certificate_7.jpg'),
    'comments' => array(
        'comment1' => array(
            'id' => '1',
            'avatar' => '../../assets/images/reviews_avatar_1.png',
            'name' => 'Евгений Морозов',
            'ratingValue' => '3',
            'text'=> 'С декабря стал, можно сказать, постоянным покупателем. Все для ремонта санузла покупал в магазине на Народной. Мой менеджер Максим Скоробогатов. Подбор, рекомендации, работа с клиентом, просто на высшем уровне. <br /> Качество самих материалов, как инженерной сантехники, так и чистовой, отличное.' 
        ),
        'comment2' => array(
            'id' => '2',
            'avatar' => '../../assets/images/reviews_avatar_2.png',
            'name' => 'Маргарита',
            'ratingValue' => '5',
            'text'=> 'Спасибо, все очень быстро и четко.' 
        ),
        'comment3' => array(
            'id' => '3',
            'avatar' => '../../assets/images/reviews_avatar_3.png',
            'name' => 'Андрей Никитин',
            'ratingValue' => '4',
            'text'=> 'Не часто пишу отзывы , но в данном случае не смог пройти мимо , так как не часто встетишь сервис
            на столь высоком уровне!!! магазин и сотрудники просто душки)) мы были там с женой 11.07.2020,
            (жена довольно-таки привередлива, как и все девушки) выбирали кафель..Девушка менеджер помогала
            нам с выбором часа 2.. не меньше, то по цене не сходилось , то по цвету ..находила решения ,
            искала образцы , все показала рассказала! ну умничка же) спасибо ей огромное! Переодически
            помогал мужчина , видимо там старший, очень приятный человек, забавный, при этом профессионал в
            своем деле ! За все 2 часа мы не разу не почувствовали , что мы им надоели и это очень
            порадовало в итоге.' 
        ),
        'comment4' => array(
            'id' => '4',
            'avatar' => '../../assets/images/reviews_avatar_1.png',
            'name' => 'Евгений Морозов',
            'ratingValue' => '2',
            'text'=> 'С декабря стал, можно сказать, постоянным покупателем. Все для ремонта санузла покупал в магазине на Народной. Мой менеджер Максим Скоробогатов. Подбор, рекомендации, работа с клиентом, просто на высшем уровне. <br /> Качество самих материалов, как инженерной сантехники, так и чистовой, отличное.' 
        ),
        'comment5' => array(
            'id' => '5',
            'avatar' => '../../assets/images/reviews_avatar_2.png',
            'name' => 'Маргарита',
            'ratingValue' => '4',
            'text'=> 'Спасибо, все очень быстро и четко.' 
        ),
        'comment6' => array(
            'id' => '6',
            'avatar' => '../../assets/images/reviews_avatar_3.png',
            'name' => 'Андрей Никитин',
            'ratingValue' => '4',
            'text'=> 'Не часто пишу отзывы , но в данном случае не смог пройти мимо , так как не часто встетишь сервис
            на столь высоком уровне!!! магазин и сотрудники просто душки)) мы были там с женой 11.07.2020,
            (жена довольно-таки привередлива, как и все девушки) выбирали кафель..Девушка менеджер помогала
            нам с выбором часа 2.. не меньше, то по цене не сходилось , то по цвету ..находила решения ,
            искала образцы , все показала рассказала! ну умничка же) спасибо ей огромное! Переодически
            помогал мужчина , видимо там старший, очень приятный человек, забавный, при этом профессионал в
            своем деле ! За все 2 часа мы не разу не почувствовали , что мы им надоели и это очень
            порадовало в итоге.' 
        ),  
    ),       
);

// Routing.
$page = 'contacts';
if (isset($_GET['p'])) {
    $page = $_GET['p'];
}

// Template rendering.
$loader = new Twig\Loader\FilesystemLoader('templates');
$twig = new \Twig\Environment($loader, array(
    // 'cache' => __DIR__ . '/cache',
    'cache' => FALSE,
    'debug' => TRUE
));


switch ($page) {
    case 'contacts':
      echo $twig->render('contacts.twig', $shop);
      break;
    case 'manager':
      echo $twig->render('manager.twig', $manager);
      break;
    default:
      header('HTTP/1.0 404 Not Found');
      echo $twig->render('404.twig');
      break;
  }

?>