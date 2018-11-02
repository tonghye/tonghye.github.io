$('.slider').slick({
	centerMode: true,
	centerPadding: '0px',
	slidesToShow: 5,
	dots: true,
	responsive: [
	  {
			// breakpoint: 768,
			breakpoint: 1024,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '0px',
				slidesToShow: 3
			}
	  },
	  {
			// breakpoint: 480,
			breakpoint: 640,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '0px',
				slidesToShow: 1
			}
	  }
	]
  });