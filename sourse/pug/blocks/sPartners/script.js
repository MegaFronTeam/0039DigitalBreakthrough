
function setPartners(items) {
	const template = item => {
		return `
				<div class="col-sm-6 col-md-4 col-xl-3">
					<a class="sPartners__item  " target="_blank"  href="${item.link}" data-aos="fade-up" data-aos-duration="700">
						<div class="sPartners__img-wrap"> 
							<div class="img-wrap-center"> 
								<img src="${item.avatar_url}" alt="" loading="lazy">
							</div>
						</div>
						<span>${item.name}</span>
						<p>${item.description || ''}</p>
					</a>
				</div>`;
	};
	for (const item of items) {
		document.querySelector(".sPartners .sPartners__row").insertAdjacentHTML("beforeend", template(item));
	}
}




function setPartnersMain(items) {

	const group = (item) => {
		let idBlock = item === 'Партнёры' ? 'sPartners' : '';
		return `
			<div class="sPartners__wrap" id="${idBlock}">
				<div class="section-title" data-aos="fade-up" data-aos-duration="700">
					<h2>${item}</h2>
				</div>
				<div class="sPartners__row row pb-5">
					${template(items[item])}
				</div>
			</div>
		`
	}
	const template = item => {
		let content = ' ';
		if (item.length == 0) return ' ';
		for (const subitem of item) {
			content += `
								<div class="col-sm-6 col-md-4 col-xl-3">
									<a class="sPartners__item  " target="_blank" href="${subitem.link}" data-aos="fade-up" data-aos-duration="700">
										<div class="sPartners__img-wrap"> 
											<div class="img-wrap-center"> 
												<img src="${subitem.avatar_url}" alt="" loading="lazy">
											</div>
										</div>
										<span>${subitem.name}</span>
										<p>${subitem.description || ''}</p>
									</a>
								</div>`;
		}
		return content;

	};
	for (const item in items) {
		document.querySelector(".sPartners .container ").insertAdjacentHTML("beforeend", group(item));
	}
	loadingContent();
}
