function setItHubs(items) {
	const template = (item) => {
		return `
			<div class="default-slider__slide swiper-slide"data-aos="fade-up" data-aos-duration="700">
				<div class="sIthubs__img-wrap">
					<img class="object-fit-js" src="${item.avatar}" alt="" loading="lazy"/>
				</div>
				<div class="h4">${item.name}</div>
				<div class="default-slider__city">${item.city}</div>
			</div>
		`
	};

	for (const item of items) {
		document.querySelector(".sIthubs .swiper-wrapper").insertAdjacentHTML("beforeend", template(item));
		// index++;ambassadors
	}

}

// getMainPageData(setAmbasadors);
function setItHubsPage(items) {
	const template = (item) => {
		return `
			<div class="hub-slide  col-xxl-4 col-lg-6 text-body" data-aos="fade-up" data-aos-duration="700">
				<div class="sIthubs__img-wrap">
					<img class="object-fit-js" src="${item.avatar}" alt="" loading="lazy"/>
				</div>
				<div class="h4 text-dark">${item.name}</div>
				<div class="default-slider__city text-dark">${item.city}</div>
			</div>
		`
	};

	for (const item of items) {
		document.querySelector(".sIthubs .row").insertAdjacentHTML("beforeend", template(item));
		// index++;ambassadors
	}
	loadingContent();
}

// getMainPageData(setAmbasadors);