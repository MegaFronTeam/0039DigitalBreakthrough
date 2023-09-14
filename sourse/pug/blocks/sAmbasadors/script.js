function setAmbasadors(items) { 
	const template = (item) => {
		return `
			<div class="default-slider__slide swiper-slide" >
				<div class="sAmbasadors-item">
					<div class="sAmbasadors-item__img-wrap"><img src="${item.image}" loading="lazy" alt=""/>
					</div>
					<div class="sAmbasadors-item__title">${item.name}</div>
					<div class="sAmbasadors-item__text">${item.description}</div>
				</div>
			</div>
		`
	};
	if(items.length) {

		for (const item of items) {
			
			document.querySelector(".sAmbasadors .swiper-wrapper").insertAdjacentHTML("beforeend", template(item));
			// index++;ambassadors
		}
	}
	else {
		document.querySelector(".sAmbasadors").remove();
	}

}
function setAmbasadorsPage(items) {
	const template = (item) => {
		return `
			<div class="col-xl-3 col-lg-4 col-6"  data-aos="fade-up" data-aos-duration="700">
				<div class="sAmbasadors-item">
					<div class="sAmbasadors-item__img-wrap"><img src="${item.image}" loading="lazy" alt=""/>
					</div>
					<div class="sAmbasadors-item__title">${item.name}</div>
					<div class="sAmbasadors-item__text">${item.description}</div>
				</div>
			</div>
		`
	};

	for (const item of items) {
		document.querySelector(".sAmbasadors .row").insertAdjacentHTML("beforeend", template(item));
		// index++;ambassadors
	}
	loadingContent();
}

// getMainPageData(setAmbasadors);