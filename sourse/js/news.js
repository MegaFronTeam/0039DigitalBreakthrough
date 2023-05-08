function setNewsPageData(data) {
	// document.querySelector('h1').innerHTML = data.faq;
	// console.log(data);
	
	setNews(data.news);
	setPartners(data.partners);
}
// setFAQPageData()
// getHackPageData(setFAQPageData, pageId)
getNewsPageData(setNewsPageData)