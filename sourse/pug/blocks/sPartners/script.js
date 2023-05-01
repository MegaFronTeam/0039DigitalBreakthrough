
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
