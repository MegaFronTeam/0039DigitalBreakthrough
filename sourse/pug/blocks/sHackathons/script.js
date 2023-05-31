
function setEvents(items) {
	const template = (item) => {

		return `
				<div class="col-sm-6 col-md-4 col-xl-3" data-aos="fade-up" data-aos-duration="700">
					<div class="sHackathons__item ${item.isDisabled ? 'disabled' : " "}">
						<div class="sHackathons__content">
							<h5>${item.startDate}</h5>
							<a class="h3" href="/hackathons.html?eventId=${item.eventId}">${item.name}</a>
							<div class="sHackathons__city">${item.region}</div>
						</div>
						<div class="sHackathons__choose">Лиги: </div>
						<div class="sHackathons__inner-row row">
							<div class="col-auto">
								<div class="sHackathons__tag">Новички</div>
							</div>
							<div class="col-auto">
								<div class="sHackathons__tag">Профи</div>
							</div>
						</div>
						<a href='/hackathons.html?eventId=${item.eventId}' class='sHackathons__btn btn btn-dark'>Узнай больше о хакатоне</a>
						<svg class="icon icon-check-2 ">
							<use xlink:href="img/svg/sprite.svg#check-2"></use>
						</svg>
						<a class="sHackathons__dataset"  href="/hackathons.html?eventId=${item.eventId}">
							<svg class="icon icon-ai ">
								<use xlink:href="img/svg/sprite.svg#ai"></use>
							</svg>Dataset
						</a>
					</div>
				</div>`;
	};
	let index = 0;
	for (const item of items) {
		document.querySelector(".sHackathons__row").insertAdjacentHTML("beforeend", template(item));
		index++;
	}
}
getEvents(setEvents);
