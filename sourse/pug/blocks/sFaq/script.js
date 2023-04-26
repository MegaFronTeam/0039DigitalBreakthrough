
function setFAQ(items) {
	const template = function ( title, text) {
		return `
				<div class="col-lg-6" data-aos="fade-up" data-aos-duration="700">
					<div class="dd-group__item">
						<div class="dd-group__head dd-head-js">${title}</div>
						<div class="dd-group__content dd-content-js">
							${text}
						</div>
					</div>
				</div>`;
	};
	for (const item of items) {
		// console.log(item);
		document.querySelector(".sFaq .dd-group__row").insertAdjacentHTML("beforeend", template(item.question, item.answer));
	}
}
getFAQ(setFAQ);