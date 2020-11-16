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

// window.addEventListener("resize", function() {
//     if (window.matchMedia("(max-width: 767px)").matches) {
//         document.querySelector('#switch').innerHTML = 'switch';
//     } 
// });

// document.querySelector('#switch').innerHTML = 'switch';