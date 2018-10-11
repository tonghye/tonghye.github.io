var swiper = new Swiper('.swiper-container', {
	slidesPerView: 3,   
	centeredSlides: true,
	spaceBetween: 0,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	keyboard: {
		enabled: true,
	},
	mousewheel: true,
	slidesPerGroup: 1,
    loop: true,
	// virtual: {
	//   slides: (function () {
	// 	var slides = [];
	// 	for (var i = 0; i < 5; i += 1) {
	// 	  slides.push('Slide ' + (i + 1));
	// 	}
	// 	return slides;
	//   }()),
	// }
});