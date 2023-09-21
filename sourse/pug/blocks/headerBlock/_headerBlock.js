function setTranslationShow(data) {
	// console.log(data);
	if (data.show) {
		console.log(data);
		// document.querySelector('.headerBlock__img-wrap ').remove(); 
		
		// document.addEventListener('click', function(event) {
		// 	let coverTarget = event.target.closest('.headerBlock__cover');
		// 	if(coverTarget) {
		// 		document.querySelector('.headerBlock__cover').classList.add('hide');
		// 		document.querySelector('.headerBlock__video-img-wrap').classList.add('active');
				
		// 		getTranslationLink(setTranslationLink);
		// 	}
		// })

		// 

		document.querySelector('.headerBlock2__videoBlock').classList.add('isTranslation');
		document.querySelector('.headerBlock2__videoBlock iframe').src = data.link;
	}
	else{
		if (document.querySelector('.headerBlock2__video ')) {
			document.querySelector('.headerBlock2__video ').remove();
		}


		document.querySelector('.headerBlock2__videoBlock').classList.remove('isTranslation');
		document.querySelector('.headerBlock2__videoBlock iframe').src = '';
	}
	// console.log(data);
}
function setTranslationLink(data) { 
	document.querySelector('.headerBlock__video iframe').src = data.link;
	// console.log(data);
}

getTranslationLink(setTranslationShow);
