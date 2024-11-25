$(function () {

    var mixer = mixitup('.directions__list')

    $('.directions__filter-btn').on('click', function () {
        $('.directions__filter-btn').removeClass('directions__filter-btn--active')
        $(this).addClass('directions__filter-btn--active') 
    })

    $('.team__slider').slick({
        arrows: false,
        slidesToShow: 4,
        infinite: true,
        draggable: false,
        appendArrows: $('.team__slider-arrows'),
        waitForAnimate: false,
        responsive:
        [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    draggable:true,
                    dots: true,
                    appendDots: $('.team__dots'),
                },
            },
            
        ]
    })
    $('.team__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })
    $('.team__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickNext')
    })
    
    $('.testim__slider').slick({
        arrows:false,
        dots: true,
        appendDots: $('.testim__dots'),
    })
    $('.testim__prev').on('click', function (e) {
        e.preventDefault()
        $('.testim__slider').slick('slickPrev')
    })
    $('.testim__next').on('click', function (e) {
        e.preventDefault()
        $('.testim__slider').slick('slickNext')
    })
    
    $('.course__acc-link').on('click' , function (e) {
        e.preventDefault()
        $(this).toggleClass('course__acc-link--active')
        $(this).children('.course__acc-text').slideToggle()
    })

    // $('.course__acc-link').on('click', function (e) {
    //     e.preventDefault();
    //     if ($(this).hasClass('course__acc-link--active')) {
    //         $(this).removeClass('course__acc-link--active');
    //         $(this).children('.course__acc-text').slideUp();
    //     } else {
    //         $('.course__acc-link').removeClass('course__acc-link--active');
    //         $('.course__acc-text').slideUp();
    //         $(this).addClass('course__acc-link--active');
    //         $(this).children('.course__acc-text').slideDown();
    //     };
    // });



    $('.header__nav-list a').on('click', function (e) {
        e.preventDefault();
        let id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 500);
    });

    $('.burger, .overlay').on('click', function (e) {
        e.preventDefault();
        $('.header__top').toggleClass('header__top--open');
        $('.overlay').toggleClass('overlay--show');
    });

    setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false){
            $('.burger').addClass('burger--follow');
        } else {
            $('.burger').removeClass('burger--follow');
        }

    }, 0);

    
});