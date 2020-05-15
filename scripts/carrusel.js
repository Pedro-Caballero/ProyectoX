$(document).ready(function() {
    $('.slider-carrusel').slick({
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow: '<button class="slick-prev" arial-label="Previous" type="button">Prev</button>',
        nextArrow: '<button class="slick-next" arial-label="Next" type="button">Next</button>',
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 2,
                }
            }
        ]
    });
});