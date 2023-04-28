
function setPartners(items) {
	const template = function (img, title, text, link) {
		return `
				<div class="col-sm-6 col-md-4 col-xl-3">
					<a class="sPartners__item  " href="${link}" data-aos="fade-up" data-aos-duration="700">
						<div class="sPartners__img-wrap"> 
							<div class="img-wrap-center"> 
								<img src="${img}" alt="" loading="lazy">
							</div>
						</div>
						<span>${title}</span>
						<p>${text || ''}</p>
					</a>
				</div>`;
	};
	for (const item of items) {
		// console.log(item);
		document.querySelector("#sPartners .sPartners__row").insertAdjacentHTML("beforeend", template(item.avatar_url, item.name, item.description, item.link));
	}
}
getPartners(setPartners, 'partner');