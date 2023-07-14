
function setEvents(items) {
	const template = (item) => {

		return `
				<div class="col-sm-6 col-md-4 col-xl-3" data-aos="fade-up" data-aos-duration="500"  data-aos-offset="0">
					<a href='/hackathons.html?eventId=${item.eventId}' class="sHackathons__item ${item.isDisabled ? 'disabled' : " "}">
						<div class="sHackathons__content">
							<h5>${item.startDate}</h5>
							<div class="h3"  >${item.name}</div>
							<div class="sHackathons__city">${item.region}</div>
						</div>
						<div class="sHackathons__choose">Лиги: </div>
						<div class="sHackathons__inner-row row">
							<div class="col-auto">
								<div class="sHackathons__tag" data-tooltip="Лига для участников, впервые участвующих в хакатонах цифрового прорыва. Команды новичков кроме денежного приза могут выиграть также путешествие от БЧП">Новички</div>
							</div>
							<div class="col-auto">
								<div class="sHackathons__tag" data-tooltip="Лига для  опытных участников, участвуют в хакатонах ИИ не первый раз">Профи</div>
							</div>
						</div>
						<button type="button"  class='sHackathons__btn btn btn-dark'>Узнай больше о хакатоне</button>
						<svg class="icon icon-check-2 ">
							<use xlink:href="img/svg/sprite.svg#check-2"></use>
						</svg>
						<div class="sHackathons__dataset"  >
							<svg class="icon icon-ai ">
								<use xlink:href="img/svg/sprite.svg#ai"></use>
							</svg>Dataset
						</div>
					</a>
				</div>`;
	};
	let index = 0;
	for (const item of items) {
		document.querySelector(".sHackathons__row").insertAdjacentHTML("beforeend", template(item));
		index++;
	}
}
getEvents(setEvents);
