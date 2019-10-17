let tomSlider = function(settings) {
	
	let defaultSettings = {
		selector: '.tom-slider',
		margin: '0',
		arrowNext: '.arrowNext', 
		arrowPrev: '.arrowPrev',
		innerArrowNext: '>',
		innerArrowPrev: '<',
		slidesShow: 1,
		autoplay: false,
		autoHeight: false,
		response: {}
	}

	if(settings === undefined) {
		settings = defaultSettings;
	}

	settings = {
		selector: settings.selector || '.tom-slider',
		margin: settings.margin || '0',
		arrowNext: document.querySelector(settings.arrowNext) || document.querySelector('.arrowNext'), 
		arrowPrev: document.querySelector(settings.arrowPrev) || document.querySelector('.arrowPrev'),
		innerArrowNext: settings.innerArrowNext || '>',
		innerArrowPrev: settings.innerArrowPrev || '<',
		slidesShow: settings.slidesShow || 1,
		autoplay: settings.autoplay,
		autoHeight: settings.autoHeight,
		response: settings.response
	}

	let nextSlideButton = settings.arrowNext;
	let prevSlideButton = settings.arrowPrev;

	let re = /[0-9]/g;
	let marginNumber = settings.margin.match(re).join('');
	marginNumber = marginNumber * 2 / 10;

	let _carousel = () => {

		nextSlideButton.innerHTML = settings.innerArrowNext;
		prevSlideButton.innerHTML = settings.innerArrowPrev;

		let selector = document.querySelector(settings.selector);
		
		if(settings.response) {
			let responseWidth = [];

			Object.keys(settings.response).map(key => {
				if(window.outerWidth <= key) {
					responseWidth.push(key)
					let newWidth = responseWidth[0]
					settings.slidesShow = settings.response[newWidth].slidesShow	
				}
			})
		}

		let sliderLength = selector.firstElementChild.children.length;

		if(sliderLength < settings.slidesShow) {
			return console.log('There are too many slides in options');
		} 

		let slideWidth = (100 / settings.slidesShow) - marginNumber + '%';

		let carouselWrapper = selector.firstElementChild;
		carouselWrapper.classList.add('tom-slides');

		let carouselSlides = carouselWrapper.children;
		let slides = [];

		for( let i = 0; i < carouselSlides.length; i++) {
			slides.push(carouselSlides[i]);
		}

		let activeSlides = slides.slice(0, settings.slidesShow);

		activeSlides.forEach( slide => {
			slide.classList.add('active');
			slide.style.margin = settings.margin;
		});

		slides.forEach( slide => {
			slide.style.width = slideWidth;
			slide.classList.add('tom-slide');
		});
		
		let count = settings.slidesShow - 1;

		let autoHeight = () => {
			let slides = document.querySelectorAll('.tom-slide.active');

			let arr = [];

			slides.forEach((slide) => {
				arr.push(slide.offsetHeight);
			});

			let whoisbigger = (a, b) => {
				if( a < b) return 1;
				if( a > b ) return -1;
			}

			arr.sort(whoisbigger)
			console.log(settings.selector)
			selector.style.height = `${arr[0] * 1.3}px`
		}

		if(settings.autoHeight) {
			autoHeight();
		}

		let slideNext = () => {

			let currentSlide = carouselSlides[count];
			let nextSlide = currentSlide.nextElementSibling;
			let actives = document.querySelectorAll('.tom-slide.active');

			actives[0].classList.remove('active');
			actives[0].style.margin  = '0';

			if(nextSlide === null) {
				count = settings.slidesShow - 1;

				for(let i = 0; i < carouselSlides.length; i++) {
					carouselSlides[i].classList.remove('active');
					carouselSlides[i].style.margin  = '0';
				}
				activeSlides.forEach( slide => {
					slide.classList.add('active')
					slide.style.margin  = settings.margin;
				});
				
			} else {
				nextSlide.style.margin  = settings.margin;
				nextSlide.classList.add('active');
				count++;
			}

		}

		let slidePrev = () => {

			let currentSlide = carouselSlides[count];
			let actives = document.querySelectorAll('.tom-slide.active');
			let prevSlide = actives[0].previousElementSibling;

			actives[actives.length - 1].classList.remove('active');
			actives[actives.length - 1].style.margin  = '0';

			if(prevSlide === null) {

				count = slides.length - 1;

				for(let i = count; i >= 0; i--) {
					slides[i].classList.remove('active');
					slides[i].style.margin = '0';
				}

				slides.forEach( (slide, index) => {
					if(index >= slides.length - settings.slidesShow) {
						slide.classList.add('active');
						slide.style.margin  = settings.margin;
					} 
				});
				
			} else {
				prevSlide.style.margin  = settings.margin;
				prevSlide.classList.add('active');
				count--;
			}

		}

		settings.arrowNext.addEventListener('click', slideNext);
		settings.arrowPrev.addEventListener('click', slidePrev);

		if(settings.autoplay) {

			setInterval( function() {
				slideNext();
			}, 2500);
		}

	} 

	return _carousel();
}