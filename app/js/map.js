ymaps.ready(init);

function init(){     
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 7,
        controls: {}
    });

    var myPlacemark = new ymaps.Placemark([55.76, 37.64], { 
            hintContent: 'Москва!', 
            balloonContent: 'Столица России' 
        }, 
        {
        iconLayout: 'default#image',
        iconImageHref: 'assets/img/marker.png',
        iconImageSize: [42, 59],
        iconImageOffset: [-3, -42]
    });
	myMap.behaviors.disable(['scrollZoom']);
    myMap.geoObjects.add(myPlacemark);
}