function setNewsPageData(data) {
	// document.querySelector('h1').innerHTML = data.faq;
	// console.log(data);
	
	document.querySelector('.sNews__btn').addEventListener('click', function() {
		$('.news-page .default-slider__slide:hidden').slideDown();
		$(this).hide();
	})

	setNews(data.news);
	setPartners(data.partners);
}
// setFAQPageData()
// getHackPageData(setFAQPageData, pageId)
getNewsPageData(setNewsPageData)