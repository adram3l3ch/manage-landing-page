const dots = document.querySelectorAll('.dot');
const testimonial = document.querySelector('.testimonials__slider');
const hamburger = document.querySelector('.hamburger');
const openbtn = document.querySelector('#open');
const closebtn = document.querySelector('#close');

let index = 0;
let time;
let opened = false;

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

hamburger.addEventListener('click', () => {
	document.querySelector('.aside__nav').classList.toggle('active');
	opened = !opened;
	if (opened) document.body.style.overflowY = 'hidden';
	else document.body.style.overflowY = 'initial';
	openbtn.classList.toggle('open', !opened);
	closebtn.classList.toggle('open', opened);
});
