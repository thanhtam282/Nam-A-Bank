function block_7swiper() {
    let homeSwiper = new Swiper('.block-index-7 .swiper-container', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.block-index-7 .swiper-button-next',
            prevEl: '.block-index-7 .swiper-button-prev',
        },
        autoplay: {
            disableOnInteraction: false,
            delay: 6000,
        },
        breakpoints: {
            420: {
                effect: "fade",
                slidesPerView: 1,
                spaceBetween: 30
            },
            550: {
                effect: "fade",
                slidesPerView: 2,
                spaceBetween: 30
            },
            750: {
                effect: "fade",
                slidesPerView: 2,
                spaceBetween: 30
            },
            992: {
                effect: "fade",
                slidesPerView: 3,
                spaceBetween: 30
            },
        },
    })
}
block_7swiper();



function setHeightH3() {
    var maxHeight = 0;

    $('.block-index-7 .swiper-slide ').each(function () {
        var thisH = $(this).height();
        if (thisH > maxHeight) {
            maxHeight = thisH;
        }

    });
    $('.block-index-7 .swiper-slide ').height(maxHeight)
}
$(function () {
    setHeightH3()

})


$(document).on('scroll', function () {
    setHeightH3()


})
$(window).on('resize', function () {
    // Project
    setHeightH3()

})