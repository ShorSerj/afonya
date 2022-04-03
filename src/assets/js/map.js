const shopPoints = [
    {
        coords: [60.04086622, 30.32505218],
        iconCaption: "Энгельса пр., 124/1",
        preset: "islands#blueShoppingIcon",
        idShop: 1
    },
    {
        coords: [59.88028251, 30.46536926],
        iconCaption: "Народная ул., 21",
        preset: "islands#blueShoppingIcon",
        idShop: 2
    },
    {
        coords: [60.05048480, 30.34919206],
        iconCaption: "Просвещения пр-т., 46/1",
        preset: "islands#blueShoppingIcon",
        idShop: 3
    },
    {
        coords: [59.83210461, 30.36194328],
        iconCaption: "Дунайский пр., 27",
        preset: "islands#blueShoppingIcon",
        idShop: 4
    },
    {
        coords: [59.90830594, 30.50729755],
        iconCaption: "Кудрово, Центральная ул. 16А",
        preset: "islands#blueShoppingIcon",
        idShop: 5
    },
    {
        coords: [59.93918859, 30.34529213],
        iconCaption: "Моховая ул., 42",
        preset: "islands#blueShoppingIcon",
        idShop: 6
    },
    {
        coords: [59.89838174, 30.47285799],
        iconCaption: "Искровский пр-т., 29",
        preset: "islands#blueShoppingIcon",
        idShop: 7
    },
    {
        coords: [60.00521679, 30.25866214],
        iconCaption: "Гаккелевская ул., 33",
        preset: "islands#blueShoppingIcon",
        idShop: 8
    },
    {
        coords: [59.85240268, 30.24271373],
        iconCaption: "Ленинский пр., 114",
        preset: "islands#blueShoppingIcon",
        idShop: 9
    },
    {
        coords: [59.94290020, 30.41492228],
        iconCaption: "Якорная ул., 2",
        preset: "islands#blueShoppingIcon",
        idShop: 10
    },
    {
        coords: [59.94478142, 30.49358610],
        iconCaption: "Косыгина пр., 27/1",
        preset: "islands#blueShoppingIcon",
        idShop: 11
    },
    {
        coords: [59.95280299, 30.25719229],
        iconCaption: "Железноводская д. 3, 3 этаж, 318 секция/1 этаж, 105 секция",
        preset: "islands#blueShoppingIcon",
        idShop: 12
    },
    {
        coords: [59.96387016, 30.30326191],
        iconCaption: "Малый пр. ПС, 65/16",
        preset: "islands#blueShoppingIcon",
        idShop: 13
    },
    {
        coords: [60.00253037, 30.38784806],
        iconCaption: "Гражданский пр.,15",
        preset: "islands#blueShoppingIcon",
        idShop: 14
    },
    {
        coords: [60.00543706, 30.22728566],
        iconCaption: "Богатырский пр., 47/2",
        preset: "islands#blueShoppingIcon",
        idShop: 15
    },
    {
        coords: [59.87417984, 30.43901924],
        iconCaption: "Ивановская ул., 17",
        preset: "islands#blueShoppingIcon",
        idShop: 16
    },
];

ymaps.ready(init);

    function init() {
        const myMap = new ymaps.Map("map", {
                center: [59.87415837, 30.43899489],
                zoom: 17,
                controls: ['zoomControl', 'geolocationControl', 'trafficControl'],
            }, {
                trafficControlFloat: 'left',
                trafficControlMaxWidth:  ['small']
            })

            shopCollection = new ymaps.GeoObjectCollection(null, {
                preset: "islands#blueShoppingIcon"
            })

        for (let i = 0, l = shopPoints.length; i < l; i++) {
            shopCollection.add(new ymaps.Placemark(
                shopPoints[i].coords,
                    {
                        iconCaption: shopPoints[i].iconCaption,

                        //При клике на метку запрашивает информацию о магазине и обновляет содержимое страницы сайта 
                        idShop: shopPoints[i].idShop
                    }
                ))
        }

        myMap.geoObjects.add(shopCollection)

        // Переход при клике на метку к другому магазину
        shopCollection.events.add('click', function (e) { 
            const target = e.get('target').properties.get('idShop');;
            location.href=`/?p=contacts/${target}`
        });

}