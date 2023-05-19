function setTranslationLink(data) {
	document.querySelector('.headerBlock__video iframe').src = data.link;
	console.log(data);
}

getTranslationLink(setTranslationLink)