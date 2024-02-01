function setFAQPageData() {
	// document.querySelector('h1').innerHTML = data.faq;
	// console.log(data);
	function templateFaqTags(item) {
		if (item.articles.length == 0) return ' ';
		return `
			<div class="sFaqBlock__tag-slide swiper-slide" data-id="${item.section_id}">${item.name}<span>${item.articles.length}</span>
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
			<div class="sFaqBlock__wrap" data-id="${item.section_id}">
				<div class="h2">${item.name}</div>
				<div class="dd-group dd-group-js">
					${faqItem()}
				</div>
			</div>
		`;
	}
	for (const item of mock.faqPage.faq) {
		document.querySelector(".sFaqBlock__tags-slider--js .swiper-wrapper").insertAdjacentHTML("beforeend", templateFaqTags(item));
		document.querySelector("#articles-district-hackathons").insertAdjacentHTML("beforeend", templateFaqSections(item));
	}


	const articleWrapper = document.querySelector('#articles-district-hackathons');
	document.addEventListener('click', function(event) {
		let tagTarget = event.target.closest('.sFaqBlock__tag-slide');
		let tags = document.querySelectorAll(".sFaqBlock__tag-slide");
		if (tagTarget) {
			tags.forEach((tag) => {tag.classList.remove('active')});
			tagTarget.classList.add('active');
			for (let i = 0; i < articleWrapper.children.length; i++) {
				if(tagTarget.dataset.id === articleWrapper.children[i].dataset.id) {
					let cloneElem = articleWrapper.children[i].cloneNode(true);
					articleWrapper.children[i].remove();
					articleWrapper.prepend(cloneElem);
				}
			}
		}
	});

	setPartners(mock.faqPage.partners);
	loadingContent();
}
// setFAQPageData()
// getHackPageData(setFAQPageData, pageId)
// getFAQPageData()

setFAQPageData()
