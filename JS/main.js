document.querySelector('.head_inner nav ul li.switch a').onclick = function (e) {
	document.querySelector('body').classList.toggle('switchMode');
	e.preventDefault;

}

document.querySelector('.burger').onclick = function () {
	this.classList.toggle('active');
	document.querySelector('.menu').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock');
};