function setTranslationShow(data) {
	if (data.show) {
		console.log(data);
		document.querySelector('.headerBlock__img-wrap ').remove(); 
		
		document.addEventListener('click', function(event) {
			let coverTarget = event.target.closest('.headerBlock__cover');
			if(coverTarget) {
				document.querySelector('.headerBlock__cover').classList.add('hide');
				document.querySelector('.headerBlock__video-img-wrap').classList.add('active');
				
				getTranslationLink(setTranslationLink);
			}
		})
	}
	else{
		document.querySelector('.headerBlock__video ').remove();

	}
	// console.log(data);
}
function setTranslationLink(data) { 
	document.querySelector('.headerBlock__video iframe').src = data.link;
	// console.log(data);
}

getTranslationLink(setTranslationShow);
