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
		console.log(e);
		document.querySelector('.menu').classList.remove('active');
		document.querySelector('.burger').classList.remove('active');
		document.querySelector('body').classList.remove('lock');
	}
}); 


// Language changing, the data are in external file '/.lang_data.module.js'
let sel = document.querySelector('.change-lang');

sel.onchange =  () => {
	let langItems = document.querySelectorAll('.lang');

	langItems.forEach(function (item) {
		let lang = document.querySelector('.change-lang').value;
		item.innerHTML = arrLang[lang][item.getAttribute('key')];
	})

	document.querySelector('.menu').classList.remove('active');
	document.querySelector('.burger').classList.remove('active');
	document.querySelector('body').classList.remove('lock');

	let holders = document.querySelectorAll('.holder');

	holders.forEach(function (elem) {
		let lang = document.querySelector('.change-lang').value;
		elem.placeholder = arrLang[lang][elem.getAttribute('key')];
		console.log(elem);
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

	$('.btn__contact').click(function () {
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top -100
		}, 300);
	}) 

})
