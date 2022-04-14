
var trend = [
    '/Img/game2.png',
    '/Img/game3.png',
    '/Img/game4.png',
    '/Img/game5.png',
    '/Img/game6.png',
    '/Img/game7.png',

];

var comingSoon = [
    '/Img/game8.png',
    '/Img/game9.png',
    '/Img/game10.png',
    '/Img/game11.png',
    '/Img/game12.png',
    '/Img/game13.png',

];

$.each(trend, function (index, value) {
    let owl = $('.owl-carousel');
    owl.append(`<div class="item"> <img class="box-game" src="${value}" alt=""></div>`);
})

$.each(comingSoon, function (index, value) {
    let owl = $('.comingSoon');
    owl.append(`<div class="item"> <img class="box-game2" src="${value}" alt=""></div>`);
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
