function setFAQPageData(data) {
	// document.querySelector('h1').innerHTML = data.faq;
	// console.log(data);
	function templateFaqTags(item) {
		if (item.articles.length == 0) return ' ';
		return `
			<div class="sFaqBlock__tag-slide swiper-slide">${item.name}<span>${item.articles.length + 1}</span>
			</div>
		`;
	}

	
	function templateFaqSections(item) {
		if (item.articles.length == 0) return ' ';
		let faqItem = ()=>{
			let content = ' '
			if (item.articles.length == 0) return ' ';
			for (const subItem of item.articles) {
				content += `
					<div class="dd-group__item">
						<div class="dd-group__head dd-head-js">${subItem.question}
						</div>
						<div class="dd-group__content dd-content-js">
							<div class="dd-group__wrap">
								${subItem.answer}
							</div>
						</div>
					</div>
				`
			}
			return content;
		}

		return `
			<div class="sFaqBlock__wrap">
				<div class="h2">${item.name}</div>
				<div class="dd-group dd-group-js">
					${faqItem()}
				</div>
			</div>
		`;
	}
	for (const item of data.faq) {
		document.querySelector(".sFaqBlock__tags-slider--js .swiper-wrapper").insertAdjacentHTML("beforeend", templateFaqTags(item));
		document.querySelector("#articles-district-hackathons").insertAdjacentHTML("beforeend", templateFaqSections(item));
	}
	setPartners(data.partners);
}
// setFAQPageData()
// getHackPageData(setFAQPageData, pageId)
getFAQPageData(setFAQPageData)