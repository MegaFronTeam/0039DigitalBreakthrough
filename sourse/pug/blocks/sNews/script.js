
function setNews(items) {
	const template = item => {
		return `
				<a href="article.html?news_id=${item.news_id}" class="default-slider__slide swiper-slide"   data-aos="fade-up" data-aos-duration="700">
					<div class='news-item bg-wrap'>
						<img class="object-fit-js picture-bg" src="${item.avatar_url}" alt="" loading="lazy"/>
						<div class="news-item__date">${item.publication_date}</div>
						<h4>${item.name}</h4>
					</div>
				</a>`;
	};
	for (const item of items) {
		// console.log(item);
		document.querySelector(".sNews .swiper-wrapper").insertAdjacentHTML("beforeend", template(item));
	}
}

// let  functionNews = getHackPageData(setNews, pageId)  ||  ;

// functionNews();