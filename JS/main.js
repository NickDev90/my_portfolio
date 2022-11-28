// Switch mode and menu-burger
document.querySelector('.head_inner nav ul li.switch span').onclick = function (e) {
	e.preventDefault;
	document.querySelector('body').classList.toggle('switchMode');
}; 

document.querySelector('.burger').onclick = function () {
	this.classList.toggle('active');
	document.querySelector('.menu').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock');
};

document.querySelectorAll('.menu ul li').forEach(function (e) {
	e.onclick = () => {
		document.querySelector('.menu').classList.remove('active');
		document.querySelector('.burger').classList.remove('active');
		document.querySelector('body').classList.remove('lock');
	}
}); 


// Language changing, the data are in external file '/.lang_data.module.js'
const selectButton = document.querySelector('.change-lang');

selectButton.onchange =  () => {
	const langItems = document.querySelectorAll('.lang');
	const lang = document.querySelector('.change-lang').value;


	langItems.forEach( item => {
		item.innerHTML = arrLang[lang][item.getAttribute('key')];
	})

	document.querySelector('.menu').classList.remove('active');
	document.querySelector('.burger').classList.remove('active');
	document.querySelector('body').classList.remove('lock');

	const formInputs = document.querySelectorAll('.holder');
	formInputs.forEach(function (elem) {
		elem.placeholder = arrLang[lang][elem.getAttribute('key')];
	})
}


// Jquery scripts
$(document).ready(function () {

	// Slick slider
	// $(".slick-track").css("max-width", $(window).width());

	$('.portfolio_items').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  accessibility: false,
	  arrows: true,
	  dots: false,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        infinite: true,
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        slickRemove: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	      	slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: false,
	        dots: true
	      }
	    }
  		]
	});

	//Menu scrolling	
	$('.menu ul a[href^="#"').click(function () {
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top -100
		}, 300);
	}) 

	$('.contact_link').click(function () {
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top -100
		}, 300);
	}) 

})
