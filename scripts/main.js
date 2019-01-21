
$(document).ready(function () {
	// AOS.init({
	// 	duration: 1500
	// });
	var x = window.matchMedia("(max-width: 1599.98px)")
	runFullpage(x)
	x.addListener(runFullpage)
	function runFullpage(x) {
		if (x.matches) { // If media query matches
			console.log('Turn off FullPage')
		} else {
			$('#fullpage').fullpage({
				licenseKey: 'A3DA879C-B1254377-8A906973-AAE812EA',
				lazyLoading: true,
				parallax: true,
				parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' },
				navigation: true,
				navigationPosition: 'right',
				scrollingSpeed: 1000,
				fitToSection: true,
				fitToSectionDelay: 1000,
				scrolloverflow: true,
				allowfullscreen: true,
				onLeave: function () {
					$('.section [data-aos]').each(function () {
						$(this).removeClass("aos-animate")
					});
				},
				onSlideLeave: function () {
					$('.slide [data-aos]').each(function () {
						$(this).removeClass("aos-animate")
					});
				},
				afterSlideLoad: function () {
					$('.slide.active [data-aos]').each(function () {
						$(this).addClass("aos-animate")
					});
				},
				afterLoad: function () {
					let windowHeight = $(window).innerHeight()
					let paddingTop = $('header').innerHeight()
					// $('.fp-section').innerHeight(window.innerHeight - $('header').height())
					// $('.fp-section').css('margin-top', -paddingTop)
					// $('.fp-tableCell').innerHeight(windowHeight - paddingTop)
					$('.section.active [data-aos]').each(function () {
						$(this).addClass("aos-animate")
					});
				},
				afterRender: function () {
					AOS.init();
				},
			});
		}
	}

	$('.btn-next').click(function () {
		$.fn.fullpage.moveSectionDown();
	})
	$('.cc-header .menu-toggle').click(function (e) {
		$(this).toggleClass('active')
		$('.cc-header .header-top-item-list').toggleClass('active')
	});
	const bottom_nav = new MappingListener({
		selector: '.menu-list',
		mobileWrapper: ".about",
		mobileMethod: "insertAfter",
		desktopWrapper: ".search",
		desktopMethod: "insertBefore",
		breakpoint: 992,
	}).watch();

	const internet_banking = new MappingListener({
		selector: '.internet-banking',
		mobileWrapper: ".hotline",
		mobileMethod: "insertAfter",
		desktopWrapper: ".header-top-item-list",
		desktopMethod: "insertAfter",
		breakpoint: 992,
	}).watch();

	const top_nav = new MappingListener({
		selector: '.header-bottom-item-list',
		mobileWrapper: ".menu-list",
		mobileMethod: "insertAfter",
		desktopWrapper: ".hotline",
		desktopMethod: "insertAfter",
		breakpoint: 992,
	}).watch();
	homeSwiper();
	block5Swiper();
	let zero = 40
	$(window).on('scroll', function () {
		$('.cc-header').toggleClass('minimal', $(window).scrollTop() > zero)
		zero = $(window).scrollTop()
	})

})

if ($(window).width() < 992 ){
	AOS.init({
		disable: true
	})
	
} else {
	AOS.init({
		duration: 1500,

		disable: false
	})
	
}

