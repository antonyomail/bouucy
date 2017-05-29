(function ($) {
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        masonry: {
            gutter: 12,
            horizontalOrder: true
        }
    });
    $('#sorts').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-sort-by');
        $grid.isotope({ filter: filterValue });
    });


    $(function(){
        $('.team-slider').slick({
            dots:true,


        });
    });

    $(function(){
        $('.testimonials-slider').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            dots:true
        });
    });
    var position = [46.4768404, 30.7233977];




})(jQuery);


function initMap() {
    var uluru = {lat: 46.476, lng: 30.723};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: uluru,
        scrollwheel: false,
        styles:[
            {
                "featureType": "all",
                "stylers": [
                    { "saturation": -100 }
                ]
            },{
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                { "color": "#58bb9d" }
            ]
        }
        ]
    });
    var image = 'img/beetroot.png';
    var beachMarker = new google.maps.Marker({
        position: {lat: 46.476, lng: 30.723},
        map: map,
        icon: image
    });

}