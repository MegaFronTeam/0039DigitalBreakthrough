function setTranslationLink(data) {
	document.querySelector('.headerBlock__video iframe').src = data.link;
	// console.log(data);
}

document.addEventListener('click', function(event) {
	let coverTarget = event.target.closest('.headerBlock__cover');
	if(coverTarget) {
		document.querySelector('.headerBlock__cover').classList.add('hide');
		document.querySelector('.headerBlock__video-img-wrap').classList.add('active');
		
		getTranslationLink(setTranslationLink);
	}
})
