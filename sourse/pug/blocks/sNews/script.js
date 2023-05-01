
function setNews(items) {
	const template = item => {
		return `
				<div class="default-slider__slide swiper-slide bg-wrap"   data-aos="fade-up" data-aos-duration="700">
					<img class="object-fit-js picture-bg" src="${item.avatar_url}" alt="" loading="lazy"/>
					<div class="default-slider__date">${item.publication_date}</div>
					<h4>${item.name}</h4>
				</div>`;
	};
	for (const item of items) {
		// console.log(item);
		document.querySelector(".sNews .swiper-wrapper").insertAdjacentHTML("beforeend", template(item));
	}
}

// let  functionNews = getHackPageData(setNews, pageId)  ||  ;

// functionNews();