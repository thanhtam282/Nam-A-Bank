function homeSwiper() {
    let homeSwiper = new Swiper('.block-index-1 .swiper-container', {
        loop: true,
        speed: 800,
        slidesPerView: 1,
        autoplay: {
        	disableOnInteraction: false,
        	delay: 6000,
        },
        pagination: {
            el: '.swiper-pagination',
          },
        breakpoints: {
            992: {
                effect: "fade",
                slidesPerView: 1,
                spaceBetween: 10
            },
        },
    })
}