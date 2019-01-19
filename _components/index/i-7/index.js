function block_7swiper() {
    let homeSwiper = new Swiper('.block-index-7 .swiper-container', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.block-index-7 .swiper-button-next',
            prevEl: '.block-index-7 .swiper-button-prev',
        },
        // autoplay: {
        //     disableOnInteraction: false,
        //     delay: 6000,
        // },
        breakpoints: {
            320: {
                effect: "fade",
                slidesPerView: 1,
                spaceBetween: 20
            },
            420: {
                effect: "fade",
                slidesPerView: 1,
                spaceBetween: 20
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

function block_7_slick() {
    if ($('.block-index-7 .list-items').length) {
        $(".block-index-7 .list-items").slick({
            autoplay: false,
			// slickPlay: true,
			// slickPause: true,
			autoplaySpeed: 4000,
			dots: false,
			infinite: true,
			speed: 300,
			arrows: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			// customPaging: function(slider, i) {
                //     var thumb = $(slider.$slides[i]).data('thumb');
                //     return '<a><p> ' + thumb + '</p></a>';
                // },
                responsive: [{
                    breakpoint: 480,
					settings: {
                        dots: false,
					}
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			]
		});
	}
    
};
// block_7_slick()

function setHeightH3() {
    var stHeight = $('.block-index-7 .swiper-container ').height();
    $('.block-index-7 .swiper-slide').css('height',stHeight + 'px' );
    // var maxHeight = 0;
    
    // $('.block-index-7 .swiper-slide ').each(function () {
    //     var thisH = $(this).height();
    //     if (thisH > maxHeight) {
    //         maxHeight = thisH;
    //     }

    // });
    // $('.block-index-7 .swiper-slide ').height(maxHeight)
}
$(function () {
    setTimeout(() => {
        
        setHeightH3()
    }, 500);

})


$(document).on('scroll', function () {
    setHeightH3()


})
$(window).on('resize', function () {
    // Project
    setHeightH3()

})