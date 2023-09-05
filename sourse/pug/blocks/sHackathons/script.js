
function setEvents(items) {
	const template = (item) => { 
		let buttonAttr = '';
		let buttonTitle = '';
		let buttonUPTitle = '';
		let dateNUmbers = item.startDate.split("-",2);
		let fistDate = item.firstDate; 
		let secondDate = item.secondDate; 
		let date = `
							<div class="date-numbers">${fistDate}</div> 
							<div class="date-numbers">${secondDate}</div> 
							<small>${item.month}</small>
							`;
		
		if (item.isDisabled == true && item.isEnded == false) {
			buttonTitle = 'Регистрация еще не началась';
			// buttonUPTitle = "Регистрация откроется 2 сентября";
			buttonUPTitle =   "Регистрация скоро откроется  ";
		}
		else if (item.isDisabled == false && item.isEnded == false) {
			buttonTitle = 'Регистрируйся на хакатон'
			// buttonUPTitle = "Регистрация открыта до 2 августа";
			buttonUPTitle = "Регистрация открыта";
			
		}
		else if ( item.isEnded == true) {
			buttonTitle = 'Узнать, как все прошло'
		}
		else{
			buttonUPTitle = "Мероприятие  проходит";
			buttonTitle = 'Подробнее'

		}
		return `
				<div class="col-sm-6 col-md-4 col-xl-3" data-aos="fade-up" data-aos-duration="500"  data-aos-offset="0">
					<a href='/hackathons.html?eventId=${item.eventId}' class="sHackathons__item ${item.isDisabled ? 'disabled' : " "}">
						<div class="sHackathons__content">
							<div class="row">
								<div class="col">
									<div class="h3"  >${item.name}</div>
									<div class="sHackathons__city">${item.region}</div>
								</div>
								<div class="col-auto sHackathons__date">${date}</div>
							</div>
						</div>
						<div class="sHackathons__item-text">${buttonUPTitle}</div>
						<button type="button"  class='sHackathons__btn btn btn-dark'  >${buttonTitle}</button>
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
	for (const item of items.events.events) {
		document.querySelector(".sHackathons__row").insertAdjacentHTML("beforeend", template(item));
		index++;
	}

	

	let btn = document.querySelector(".headerBlock__btn");
	// console.log(items);
	// Change items.isRegistrationAvailable to items.events.isRegistrationAvailable
	switch (items.events.isRegistrationAvailable) {
		case true:
			// btn.innerHTML = 'Регистрируйся на хакатон';	
			btn.innerHTML = 'Регистрация на хакатон';	
			break;
			
		default:
			btn.innerHTML = 'Регистрация скоро откроется'; 
			btn.setAttribute('disabled', '');
			break;
	}

}
// getMainPageData(setEvents ,false);
