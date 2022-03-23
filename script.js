const dots = document.querySelectorAll('.dot');
const testimonial = document.querySelector('.testimonials__slider');

let index = 0;
let time;

const highlightDot = i => {
	document.querySelector('.dot.active')?.classList.remove('active');
	dots[i].classList.add('active');
};

const handleScroll = e => {
	const i = Math.ceil(e.target.scrollLeft / window.innerWidth);
	highlightDot(i);
};

dots.forEach((dot, i) => {
	dot.addEventListener('click', e => {
		testimonial.removeEventListener('scroll', handleScroll);
		clearTimeout(time);
		index = i;
		highlightDot(i);
		testimonial.scrollTo(index * window.innerWidth, 0);
		time = setTimeout(() => {
			testimonial.addEventListener('scroll', handleScroll);
		}, 1000);
	});
});

testimonial.addEventListener('scroll', handleScroll);
