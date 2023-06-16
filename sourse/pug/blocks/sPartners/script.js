
function setPartners(items) {
	const template = item => {
		return `
				<div class="col-sm-6 col-md-4 col-xl-3">
					<a class="sPartners__item  " href="${item.link}" data-aos="fade-up" data-aos-duration="700">
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
		// console.log(item);
		document.querySelector("#sPartners .sPartners__row").insertAdjacentHTML("beforeend", template(item));
	}
}




function setPartnersMain(items) {

	const group = (item) => {
		return `
			<div class="section-title" data-aos="fade-up" data-aos-duration="700">
							<h2>${item}</h2>
						</div>
						<div class="sPartners__row row pb-5">
						${template(items[item])}
						</div>
		`
	}
	const template = item => {
		let content = ' ';
		console.log(item);
		if (item.length == 0) return ' ';
		for (const subitem of item) {
			content += `
								<div class="col-sm-6 col-md-4 col-xl-3">
									<a class="sPartners__item  " href="${subitem.link}" data-aos="fade-up" data-aos-duration="700">
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
		// console.log(item);
		document.querySelector("#sPartners .sPartners__wrap").insertAdjacentHTML("beforeend", group(item));
	}
}
