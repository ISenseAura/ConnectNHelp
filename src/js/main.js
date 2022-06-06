
var textWrapper = document.querySelector('#desired');
var textWrapper1 = document.querySelector('#hub');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


anime.timeline({ loop: false })
	.add({
		targets: ['.ml1 .letter', '.ml1 .letter1'],
		scale: [0.3, 1],
		opacity: [0, 1],
		translateZ: 0,
		easing: "easeOutExpo",
		duration: 600,
		delay: (el, i) => 70 * (i + 1)
	}).add({
		targets: '.ml1 .line',
		scaleX: [0, 1],
		opacity: [0.5, 1],
		easing: "easeOutExpo",
		duration: 700,
		offset: '-=875',
		delay: (el, i, l) => 80 * (l - i)
	})


// Wrap every letter in a span
var textWrapper1 = document.querySelector('.ml6 .letters');
textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


function getScrollPercent() {
	var h = document.documentElement,
		b = document.body,
		st = 'scrollTop',
		sh = 'scrollHeight';
	alert((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100);
}



var observer = new IntersectionObserver(function (entries) {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if (entries[0].isIntersecting === true) {
		console.log('Element has just become visible in screen');
		anime.timeline({ loop: false })
			.add({
				targets: '.ml6 .letter',
				translateY: ["1.1em", 0],
				translateZ: 0,
				duration: 750,
				delay: (el, i) => 50 * i
			})


	}
})



var observer2 = new IntersectionObserver(function (entries) {

	if (entries[0].isIntersecting === true) {
		console.log('Element 2 has just become visible in screen');

		anime.timeline({ loop: true })
			.add({
				targets: '.ml5 .line',
				opacity: [0.5, 1],
				scaleX: [0, 1],
				easing: "easeInOutExpo",
				duration: 700
			}).add({
				targets: '.ml5 .line',
				duration: 600,
				easing: "easeOutExpo",
				translateY: (el, i) => (-0.625 + 0.625 * 2 * i) + "em"
			}).add({
				targets: '.ml5 .ampersand',
				opacity: [0, 1],
				scaleY: [0.5, 1],
				easing: "easeOutExpo",
				duration: 600,
				offset: '-=600'
			}).add({
				targets: '.ml5 .letters-left',
				opacity: [0, 1],
				translateX: ["0.5em", 0],
				easing: "easeOutExpo",
				duration: 600,
				offset: '-=300'
			}).add({
				targets: '.ml5 .letters-right',
				opacity: [0, 1],
				translateX: ["-0.5em", 0],
				easing: "easeOutExpo",
				duration: 600,
				offset: '-=600'
			}).add({
				targets: '.ml5',
				opacity: 0,
				duration: 1000,
				easing: "easeOutExpo",
				delay: 10000
			});

	}


}, { threshold: [0] });






observer2.observe(document.querySelector("#m15"));




var observer3 = new IntersectionObserver(function (entries) {

	if (entries[0].isIntersecting === true) {
		console.log('Element 2 has just become visible in screen');


		var textWrapper2 = document.querySelector('strong');
		textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

		anime.timeline({ loop: false })
			.add({
				targets: '.row',
				opacity: [0, 1],
				easing: "easeInOutQuad",
				duration: 2250,
				delay: (el, i) => 150 * (i + 1)
			})
	}

}, { threshold: [0] });

observer3.observe(document.querySelector("#row"));





function openFact() {
	let facts = ["If NGOs were a country, they would have the 5th largest economy in the world",
	 "Nearly one in three (31.5%) people worldwide donated to charity in 2015 and one in four (24%) volunteered.",
	"With over 3.3 million non-governmental organisations, India has approximately one NGO for every 400 people.",
	"The NGO sector in Sweden is made up of 232,000 non-governmental organizations and 58% of its employees are female",
	"Eighty percent of global citizens agree that nongovernmental organizations (NGOs) make it easy to be involved in positive social change.",
	"There are an estimated 10 million non-governmental organizations (NGOs) worldwide.",
	"There are more than 1.4 million NGOs in the United States that employ 11.4 million Americans.",
	"The NGO sector In England and Wales is made up of 165,000 registered charities, 948,000 employees, 943,000 trustees, and 3,200,000 volunteers.",
	"40% of the French population volunteers with a local association or NGO and 22% regularly donate money.",
	"As of 2015, there were 136,453 registered non-governmental organizations in South Africa and on average, 68 new NGOs are registered every day."
]
let a = document.getElementById("factopen");
	a.style.display = "none";
	let b = document.getElementById("factclose");
	b.class += "fade-in";
	b.style.display = "block";

	let c = document.getElementById("fact");
	c.innerHTML = facts[Math.floor((Math.random() * facts.length))];

}

function closeFact() {
	let a = document.getElementById("factopen");
	a.style.display = "block";
	let b = document.getElementById("factclose");
	b.class += "fade-in";
	b.style.display = "none";
}





document.addEventListener('DOMContentLoaded', () => {
	"use strict";
  
	/**
	 * Preloader
	 */
	const preloader = document.querySelector('#preloader');
	if (preloader) {
	  window.addEventListener('load', () => {
		preloader.remove();
	  });
	}
  
	/**
	 * Sticky header on scroll
	 */
	const selectHeader = document.querySelector('#header');
	if (selectHeader) {
	  document.addEventListener('scroll', () => {
		window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
	  });
	}
  
	/**
	 * Navbar links active state on scroll
	 */
	let navbarlinks = document.querySelectorAll('#navbar .scrollto');
  
	function navbarlinksActive() {
	  navbarlinks.forEach(navbarlink => {
  
		if (!navbarlink.hash) return;
  
		let section = document.querySelector(navbarlink.hash);
		if (!section) return;
  
		let position = window.scrollY;
		if (navbarlink.hash != '#header') position += 200;
  
		if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
		  navbarlink.classList.add('active');
		} else {
		  navbarlink.classList.remove('active');
		}
	  })
	}
	window.addEventListener('load', navbarlinksActive);
	document.addEventListener('scroll', navbarlinksActive);
  
	/**
	 * Function to scroll to an element with top ofset
	 */
	function scrollto(el) {
		console.log(el);
	  const selectHeader = document.querySelector('#header');
	  let offset = 0;
  
	  if (selectHeader.classList.contains('sticked')) {
		offset = document.querySelector('#header.sticked').offsetHeight;
	  } else if (selectHeader.hasAttribute('data-scrollto-offset')) {
		offset = selectHeader.offsetHeight - parseInt(selectHeader.getAttribute('data-scrollto-offset'));
	  }
	  window.scrollTo({
		top: document.querySelector(el).offsetTop - offset,
		behavior: 'smooth'
	  });
	}
  
	/**
	 * Fires the scrollto function on click to links .scrollto
	 */
	let selectScrollto = document.querySelectorAll('.scrollto');
	selectScrollto.forEach(el => el.addEventListener('click', function(event) {
	  if (document.querySelector(this.hash)) {
		event.preventDefault();
  
		let mobileNavActive = document.querySelector('.mobile-nav-active');
		if (mobileNavActive) {
		  mobileNavActive.classList.remove('mobile-nav-active');
  
		  let navbarToggle = document.querySelector('.mobile-nav-toggle');
		  navbarToggle.classList.toggle('bi-list');
		  navbarToggle.classList.toggle('bi-x');
		}
		scrollto(this.hash);
	  }
	}));
  
	/**
	 * Scroll with ofset on page load with hash links in the url
	 */
	window.addEventListener('load', () => {
	  if (window.location.hash) {
		if (document.querySelector(window.location.hash)) {
		  scrollto(window.location.hash);
		}
	  }
	});
  
	/**
	 * Mobile nav toggle
	 */
	const mobileNavToogle = document.querySelector('.mobile-nav-toggle');
	if (mobileNavToogle) {
	  mobileNavToogle.addEventListener('click', function(event) {
		event.preventDefault();
  
		document.querySelector('body').classList.toggle('mobile-nav-active');
  
		this.classList.toggle('bi-list');
		this.classList.toggle('bi-x');
	  });
	}
  
	/**
	 * Toggle mobile nav dropdowns
	 */
	const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');
  
	navDropdowns.forEach(el => {
	  el.addEventListener('click', function(event) {
		if (document.querySelector('.mobile-nav-active')) {
		  event.preventDefault();
		  this.classList.toggle('active');
		  this.nextElementSibling.classList.toggle('dropdown-active');
  
		  let dropDownIndicator = this.querySelector('.dropdown-indicator');
		  dropDownIndicator.classList.toggle('bi-chevron-up');
		  dropDownIndicator.classList.toggle('bi-chevron-down');
		}
	  })
	});
  
	/**
	 * Auto generate the hero carousel indicators
	 */
	let heroCarouselIndicators = document.querySelector('#hero .carousel-indicators');
	if (heroCarouselIndicators) {
	  let heroCarouselItems = document.querySelectorAll('#hero .carousel-item')
  
	  heroCarouselItems.forEach((item, index) => {
		if (index === 0) {
		  heroCarouselIndicators.innerHTML += `<li data-bs-target="#hero" data-bs-slide-to="${index}" class="active"></li>`;
		} else {
		  heroCarouselIndicators.innerHTML += `<li data-bs-target="#hero" data-bs-slide-to="${index}"></li>`;
		}
	  });
	}
  
	/**
	 * Scroll top button
	 */
	const scrollTop = document.querySelector('.scroll-top');
	if (scrollTop) {
	  const togglescrollTop = function() {
		window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
	  }
	  window.addEventListener('load', togglescrollTop);
	  document.addEventListener('scroll', togglescrollTop);
	  scrollTop.addEventListener('click', window.scrollTo({
		top: 0,
		behavior: 'smooth'
	  }));
	}
  
	/**
	 * Initiate glightbox
	 */
	const glightbox = GLightbox({
	  selector: '.glightbox'
	});
  
	/**
	 * Porfolio isotope and filter
	 */
	let portfolionIsotope = document.querySelector('.portfolio-isotope');
  
	if (portfolionIsotope) {
  
	  let portfolioFilter = portfolionIsotope.getAttribute('data-portfolio-filter') ? portfolionIsotope.getAttribute('data-portfolio-filter') : '*';
	  let portfolioLayout = portfolionIsotope.getAttribute('data-portfolio-layout') ? portfolionIsotope.getAttribute('data-portfolio-layout') : 'masonry';
	  let portfolioSort = portfolionIsotope.getAttribute('data-portfolio-sort') ? portfolionIsotope.getAttribute('data-portfolio-sort') : 'original-order';
  
	  window.addEventListener('load', () => {
		let portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
		  itemSelector: '.portfolio-item',
		  layoutMode: portfolioLayout,
		  filter: portfolioFilter,
		  sortBy: portfolioSort
		});
  
		let menuFilters = document.querySelectorAll('.portfolio-isotope .portfolio-flters li');
		menuFilters.forEach(function(el) {
		  el.addEventListener('click', function() {
			document.querySelector('.portfolio-isotope .portfolio-flters .filter-active').classList.remove('filter-active');
			this.classList.add('filter-active');
			portfolioIsotope.arrange({
			  filter: this.getAttribute('data-filter')
			});
			if (typeof aos_init === 'function') {
			  aos_init();
			}
		  }, false);
		});
  
	  });
  
	}
  
	/**
	 * Clients Slider
	 */
	new Swiper('.clients-slider', {
	  speed: 400,
	  loop: true,
	  autoplay: {
		delay: 5000,
		disableOnInteraction: false
	  },
	  slidesPerView: 'auto',
	  breakpoints: {
		320: {
		  slidesPerView: 2,
		  spaceBetween: 40
		},
		480: {
		  slidesPerView: 3,
		  spaceBetween: 60
		},
		640: {
		  slidesPerView: 4,
		  spaceBetween: 80
		},
		992: {
		  slidesPerView: 6,
		  spaceBetween: 120
		}
	  }
	});
  
	/**
	 * Testimonials Slider
	 */
	new Swiper('.testimonials-slider', {
	  speed: 600,
	  loop: true,
	  autoplay: {
		delay: 5000,
		disableOnInteraction: false
	  },
	  slidesPerView: 'auto',
	  pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	  }
	});
  
	/**
	 * Testimonials Slider
	 */
	new Swiper('.portfolio-details-slider', {
	  speed: 600,
	  loop: true,
	  autoplay: {
		delay: 5000,
		disableOnInteraction: false
	  },
	  slidesPerView: 'auto',
	  pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	  }
	});
  
	/**
	 * Animation on scroll function and init
	 */
	function aos_init() {
	  AOS.init({
		duration: 1000,
		easing: 'ease-in-out',
		once: true,
		mirror: false
	  });
	}
	window.addEventListener('load', () => {
	  aos_init();
	});
  
  });