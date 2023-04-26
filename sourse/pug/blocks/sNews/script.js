
function setNews(items) {
	const template = function (img, title, date) {
		return `
				<div class="default-slider__slide swiper-slide bg-wrap"   data-aos="fade-up" data-aos-duration="700">
					<img class="object-fit-js picture-bg" src="${img}" alt="" loading="lazy"/>
					<div class="default-slider__date">${date}</div>
					<h4>${title}</h4>
				</div>`;
	};
	for (const item of items) {
		// console.log(item);
		document.querySelector(".sNews .swiper-wrapper").insertAdjacentHTML("beforeend", template(item.avatar_url, item.name, item.publication_date));
	}
}
getNews(setNews);