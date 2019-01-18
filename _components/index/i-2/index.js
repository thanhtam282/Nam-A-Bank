function block_2swiper() {
    let homeSwiper = new Swiper('.block-index-2 .swiper-container', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.block-index-2 .swiper-button-next',
            prevEl: '.block-index-2 .swiper-button-prev',
        },
        autoplay: {
        	disableOnInteraction: false,
        	delay: 6000,
        },
        breakpoints: {
            750: {
                effect: "fade",
                slidesPerView: 1,
                spaceBetween: 30
            },
            992: {
                effect: "fade",
                slidesPerView: 2,
                spaceBetween: 30
            },
        },
    })
}
block_2swiper();
$('.block-index-2 .nav-tabs a').on('shown.bs.tab', function (event) {
    block_2swiper();
})

function mainNav() {
    let nav_toggle = $('.block-index-2 .nav-toggle , .canhcam-nav-3 .nav-toggle , .canhcam-nav-4 .nav-toggle')
    let nav = $('.block-index-2 nav , .canhcam-nav-3 nav , .canhcam-nav-4 nav')
    let li = $('.block-index-2 nav , .canhcam-nav-3 nav li , .canhcam-nav-4 nav li')
    nav_toggle.on('click', function () {
        nav_toggle.toggleClass('active')
        nav.toggleClass('active');
    })
    // li.on('click', function () {
    // 	nav.removeClass('active');
    // })
}
mainNav();