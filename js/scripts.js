
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        450:{
            items:2,
        },
        600:{
            items:3,
            loop:false
        },
        1000:{
            items:4,
        }
    }
})