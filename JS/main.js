document.querySelector('.head_inner nav ul li.switch a').onclick = function (e) {
	document.querySelector('body').classList.toggle('switchMode');
	e.preventDefault;
};

document.querySelector('.burger').onclick = function () {
	this.classList.toggle('active');
	document.querySelector('.menu').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock');
};

document.querySelector('.menu ul').onclick = function (e) {
	document.querySelector('.menu').classList.remove('active');
	document.querySelector('.burger').classList.remove('active');
	document.querySelector('body').classList.remove('lock');
};


$(document).ready(function () {

	// Slick slider
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
