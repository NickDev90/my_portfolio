document.querySelector('.head_inner nav ul li.switch a').onclick = function (e) {
	document.querySelector('body').classList.toggle('switchMode');
	e.preventDefault;

}