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


let skillsList = '<li><b>HTML</b> – HTML5, BEM, czysty kod;</li> <li><b>CSS</b> – CSS3 (flex-box, grids), SCSS, SASS;</li> <li><b>JavaScript</b> – EcmaScript 6, Jquery, JS biblioteki;</li> <li><b>Bootstrap 4</b>;</li> <li><b>WordPress</b> (w tym tworzenie własnego szablonu);</li><li>Podstawy <b>Reactu</b> (jest w trakcie opanowania);</li> <li>Robota z <b>Gitem</b>;</li> <li>Język <b>angielski</b>, pozwalający czerpać wiedzę od najlepszych na <i>w3schools, stackoverflow, MDN (Mozilla Developer Network)</i> i  mnóstwie innych portali dla programistów;</li> <li>Umienie <b>szybkiego poszukiwania</b> potrzebnej informacji i  opanowania nowych technologii. </li>'

let arrLang = {
	  'en': {
	    'about': 'About Me',
	    'portfolio': 'Portfolio',
	    'title': "<b>Hello!</b> <br> <b>I'm Nick</b> <br> <span>I'm web <br> developer. </span>",
	    'contact': 'Contact',
	    'btnContact': 'Contact with me',
	    'aboutTitle': 'My history',
	    'par1': "Hello sincerely, my name is Nicholas, I am 30 years old and I am a young programmer. I know that programming has no limits and a good programmer is constantly evolving by moving with the times and learning something new. I started my adventure with IT over a year ago, and from that time coding became my passion. Since my school years I have been interested in science subjects, especially in the queen of sciences - mathematics. However, life turned out a little differently and took me to serve in the state administration, where my intellectual abilities and logical thinking were not used fully. However, after some time I realized that my personal potential and ability to learn something new quickly let me start doing what really brings me pleasure and what I am proud of. I know that in a year's time you can't reach the depth of programming, but to learn its basics and lay the foundation for a future skyscraper - rest assured.",
	    'par2': "So, for this year I can boast of having mastered the necessary base, allowing me <b>now</b> to create web products using modern technologies and meeting the requirements of functionality and usability. This base consists, inter alia, of: ",
	    'skillsList': '<li><b>HTML</b> – HTML5, BEM, pure code;</li> <li><b>CSS</b> – CSS3 (flex-box, grids), SCSS, SASS;</li> <li><b>JavaScript</b> – EcmaScript 6, Jquery, JS libraries;</li> <li><b>Bootstrap 4</b>;</li> <li><b>WordPress</b> (creating own template);</li><li>Base of <b>React JS</b> (writing a project on it now);</li> <li>Work with <b>Git</b>;</li> <li><b>English level</b> allowing me to learn from the best on such sources as <i>w3schools, stackoverflow, MDN (Mozilla Developer Network)</i> and plenty of other sites for programmers;</li> <li>Ability to <b>quickly search</b> for needed information and master new technologies. </li>',
	    'portfolioTitle': 'My portfolio',
	    'contactsTitle': 'Contact with me',
	    'formName': 'Your name',
	    'formEmail': 'Your email',
	    'formMessage': 'Your message',
	    'formBtn': 'Send'
	  },
	  'pl': {
	    'about': 'O mnie',
	    'portfolio': 'Portfolio',
	    'title': "<b>Hej!</b> <br> <b>Ja Nick</b> <br> <span>Jestem web <br> developerem. </span>",
	    'contact': 'Kontakt',
	    'btnContact': 'Kontakt ze mną',
	    'aboutTitle': 'Moja historia',
	    'par1': 'Witam serdecznie, mam na imię Mikołaj, mam 30 lat i jestem młodym programistą.  Wiem, że programowanie nie ma granic poznania i dobry programista ciągłe rozwija się idąc z duchem czasu i ucząć się czegoś  nowego. Swoją przygode z IT zacząłem ponad rok temu, i z tego czasu  kodowanie stało się moją pasją. Od szkolnych lat interesowały mnie przedmioty ścisłe, w szczególności królowa nauk – matematyka. Jednak życie potoczyło się trochę inaczej i zaniosło mnie na służbę do administracji państwowej, gdzie swoje zdolności intelektualne i logiczne myślenie nie wykorzystywałem w pełni. Jednak po upływie czasu zrozumiałem, że mój potencjał osobisty i umienie szybkiego uczenia się czemuś nowemu pozwalają zacząć robić to, co naprawdę przynosi mi przyjemność i z czego jestem dumny. Wiem, że za rok czasu nie da się osiągnąć glębi programowania, jednak poznać jego podstawy i zalożyć fundament dla przyszłego wieżowca – spokojnie.',
	    'par2': 'Więc, za ten rok mogę pochwalić się ogarnięńciem niezbędnej bazy, pozwalającej <b>od zaraz</b> tworzyć produkty webowe z wykorzystaniem nowoczesnych technologii i spełniające wymagania funkcjonalności oraz użyteczności. Ta baza składa się m.in. z: ',
	    'skillsList': skillsList,
	    'portfolioTitle': 'Moje portfolio',
	    'contactsTitle': 'Kontakt ze mną',
	    'formName': 'Twoje imię',
	    'formEmail': 'Twój email',
	    'formMessage': 'Twoja wiadomość',
	    'formBtn': 'Wyślij'
	  }
	}

let sel = document.querySelector('.change-lang');

sel.onchange = function (argument) {
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
