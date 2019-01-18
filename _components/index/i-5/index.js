function block5Swiper() {
	let block5Swiper = new Swiper('.block-index-5 .swiper-container', {
		pagination: {
			el: '.block-index-5 .swiper-pagination',
			type: 'bullets',
		},
		on: {
			init: function () {
				let currentSlide = $('.block-index-5 .swiper-container .swiper-slide-active').attr('data-link')
				$(currentSlide).fadeIn()
			},
			slideChange: function () {
				let currentSlide = $('.block-index-5 .swiper-container .swiper-slide-next').attr('data-link')
				$('.block-index-5 .swiper-info .swiper-content').hide()
				$(currentSlide).fadeIn()

			}
		},
		loop: true,
		slidesPerView: 1,
		disableOnInteraction: false,
	})
}