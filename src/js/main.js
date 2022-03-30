
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

