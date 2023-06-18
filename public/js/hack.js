var params = window
	.location
	.search
	.replace('?', '')
	.split('&')
	.reduce(
		function (p, e) {
			var a = e.split('=');
			p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
			return p;
		},
		{}
	);

let pageId = params['eventId'];
console.log(pageId);

function setHackPageData(data) {
	// console.log(data);
	document.title = data.event.name;
	document.querySelector('.sAbout__date').innerHTML = 
		data.event.dateRange[0] + '<br> ' +
		+ data.event.dateRange[1] 
		+ ' <span>' + data.event.dateRange[2] + '</span>';

	if (data.playground.city && data.playground.city){ 
		document.querySelector('.sAbout__types-inner').insertAdjacentHTML("beforeend", `
		<div class="sAbout__type sAbout__type--1 h4"><div class="sAbout__type sAbout__type--1 h4">${data.playground.city || " "}</div>
		<div class="sAbout__type sAbout__type--2 h4">${data.playground.adress || " "}</div></div>
		`);
	}
	console.log(data);
	document.querySelector('.sAbout__wrap').style.background = data.event.colors.background;
	document.querySelector('.sAbout__date').style.color = data.event.colors.date;
	document.querySelector('.sAbout__wrap source').srcset = data.event.avatarDesktop;
	document.querySelector('.sAbout__wrap img').src = data.event.avatarMobile;
	document.querySelector('h1').innerHTML = data.event.name;
	document.querySelector('.sAbout h2').innerHTML = data.event.district;
	document.querySelector('.sAbout__text').innerHTML = data.event.description;
	
	if (data.event.isEnded == false){
		document.querySelector(".sAbout__info-wrap").insertAdjacentHTML("afterbegin", `
		<div class="sAbout__banner" data-aos="fade-up" data-aos-duration="700">
		<div class="h3"> ${data.event.deadline_date}</div>
		<span>Дедлайн подачи заявок</span>
		</div>
		`);
		document.querySelector('.sAbout__banner').style.background = data.event.colors.deadlineCard;
		
		document.querySelector(".sAbout__content").insertAdjacentHTML("beforeend", `
		<a class="sAbout__btn btn btn-dark" href="https://lk.hacks-ai.ru">Принять участие</a>`);
	}
	else{
		document.querySelector(".sAbout__info-wrap").insertAdjacentHTML("afterbegin", `
		<div class="sAbout__banner" data-aos="fade-up" data-aos-duration="700" data-aos-offset="0">
		<div class="h3"> МЕРОПРИЯТИЕ <br> ЗАВЕРШЕНО</div>
		</div>
		`);

	}

	document.querySelector('.count-attendee').innerHTML = data.event.count.attendee_count;
	document.querySelector('.count-team').innerHTML = data.event.count.team_count;




	
	
	if(data.partners.length>0) {
		const templatePartner = item => {
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

		document.querySelector("#parters-wrap").insertAdjacentHTML("afterbegin", 
		`<!-- start sPartners-->
		<section class="sPartners sPartners--2 section" id="sPartners2">
				<div class="container">
					<div class="sPartners__wrap">
						<div class="section-title" data-aos="fade-up" data-aos-duration="700">
							<h2>Партнеры окружного хакатона</h2>
							</div>
						<div class="sPartners__row row">
						</div>
						</div>
						</div>
			</section>
			<!-- end sPartners-->`
	);
	for (const item of data.partners) {
		// console.log(item);
		document.querySelector("#sPartners2 .sPartners__row").insertAdjacentHTML("beforeend", templatePartner(item));
	}
					}


	// Cases
	// BTns
	const templateBtn = (item, active) => {
		return `
				<a class="sCases__link tabs__btn scroll-link ${active}" href="#sCases">
					<p>${item.shortDescription}</p>
					<span>${item.name}</span>
				</a>`;
	};

	// Tabs
	const templateTabs = (item, active, disableClass) => {
		let expertisesItems = ()=>{ 
			let content = ' '
			if (item.expertises.length == 0) return ' ';
			for (const subItem of item.expertises) { 
				content += ` <a class="sCases__tag" href="#">${subItem.name} </a>` 
			}
			return content;
		}
		
		let partnersItem = ()=>{
			let content = ' '
			if (item.partners.length == 0) return ' ';
			for (const subItem of item.partners) {
				content += `
								<a class="sCases__director " href="${subItem.link}" data-aos="fade-up" data-aos-duration="700">
										<img src="${subItem.avatar_url}" alt="" loading="lazy"/>
										<div>
										<span>${subItem.description}</span>
											<p>${subItem.name}</p>
										</div>
								</a>`
			}
			return content;
		}




		let placmentPers = (items) => {
			let content = ' ';

			if (items == 0) return ' ';
			for (const item of items) {
				let avatar = item.avatar != null 
					? `<img src='${item.avatar}'/>	` 
					: '<svg class="icon icon-user "><use xlink:href = "img/svg/sprite.svg#user" ></use></svg >';
				content += `
					<div class='col-xl-6 col-xxl-4'>
						<div class="sCases__personal">
							<div class="sCases__personal-img-wrap">
								${avatar}
							</div>
							<div>
								<div class='h6'>${item.surname} ${item.name}</div>
								<span>${item.region_iso_code}</span>
							</div>
						</div>
					</div>`;
			}
			return content;
		}

		let resultPlacment = (items, subItem) => {
			let content = ' ';

			if (items == 0) return ' ';
			let index = 0;
			for (const item of items) {
				let teg = item.is_profi == 1 ? '<div class="sCases__tag">Профи</div>' :    '<div class="sCases__tag text-primary" >Новички</div>';
				let ratingDiv = `
				<div class='sCases__rating'>
				<span>${item.position}</span>
				<p>Общий рейтинг</p>
				</div>
				`
				let rating = subItem == 'all' ? '' : ratingDiv;
				content += `
					<div class='sCases__placment'>
					<div class='row'>
							<div class='col-sm-auto'>
								<div class='sCases__place'>
									<span>${index + 1}</span>
									<p>место</p>
								</div>
								${rating}
								
							</div>
							<div class='col-sm'>
								<div class='row'>
									<div class='col'>
										<div class='h4'>${item.name}</div>
									</div>
									<div class='col-auto'>
							
										${teg}
									</div>
								</div>
								<div>
									${item.short_text}
								</div>
								<div class="row">
									<div class="col-auto">
										<a href='#modal-${item.team_id}'  class='sCases__presentation btn d-block btn-outline-primary link-modal-js'>Читать полностью</a>
										<div id="modal-${item.team_id}" style="display: none">
											<div class="modal-win">
												${item.long_text}
											</div>
										</div>
									</div>
									<div class="col-auto">
										<a href='${item.presentation_url}' target="_blank" class='sCases__presentation sCases__presentation--pres btn d-block btn-outline-primary'>Презентация</a>
									</div>

								</div>
								<br>
								<div class='row'>
									${placmentPers(item.attendees)}
								</div>
							</div>
						</div>
					</div>`;
				index++;
			}
			return content;
		}
		

		let casesResults = () => {
			let content = ' ';

			let results = item.results; 
			
			if (results.length == 0) return ' ';
			let index = 0;
			for (const  subItem in results) {
				let active = index == 0 ? 'active' : ' '; 
				content += `
								<div class="personalRating__content ${active}">
										${resultPlacment(results[subItem], subItem)}
								</div>`;
				index++;
			}
			return content;
		}
		
		
		let partnersVideo = () => { 
			let video = item.video; 
			
			if (video.length == 0) return ' '; 
			return `
			<div class="ratio ratio-16x9 mb-4"  data-aos="fade-up" data-aos-duration="700" data-aos-offset="0">
			${video}
			</div>
			`;
		}
		

		let partnersPeoplesItem = (items) => {
			let content = ' ';

			if (items == 0) return ' ';
			for (const item of items) {
				let avatar = item.avatar != null
					? `<img src='${item.avatar}'/>	`
					: '<svg class="icon icon-user "><use xlink:href = "img/svg/sprite.svg#user" ></use></svg >';
				content += `
					<div class='col-md-6 col-xxl-4'  data-aos="fade-up" data-aos-duration="700" data-aos-offset="0">
						<div class="sCases__personal">
							<div class="sCases__personal-img-wrap">
								${avatar}
							</div>
							<div>
								<div class='h6'>${item.surname} ${item.name}</div>
								<span>${item.company}</span>
							</div>
						</div>
					</div>`;
			}
			return content;
		}
		
		let partnersPeoples = () => {
			let content = ' ';

			let staff = item.staff; 
			
			if (staff.length == 0) return ' ';
			let index = 0;
			for (const subItem in staff) { 
				content += `
							<div class="section mt-4">
								<h3>${subItem}</h3>
								<div class="row">
									${partnersPeoplesItem(staff[subItem], subItem)}
								</div>
								</div>
								`;
							
				index++;
			}
			return content;
		}
		
		return `
				<div class="  tabs__content  ${active}" data-aos="fade-up" data-aos-duration="700" data-aos-offset="0">
					<div class="innerTabs">
						<div class="innerTabs__caption"  >
							<div class="innerTabs__btn active">Описание</div>
							<div class="innerTabs__btn ${item.results.length == 0 ? ' disabled ' : ' '}">Результаты</div>
						</div>
						<div>
							<div>
								<div class="innerTabs__content active">
									<div class="sCases__tags"  >
										${expertisesItems()}
									</div>
									${item.longDescription}
									${partnersVideo()}
									${partnersItem()}
									${partnersPeoples()}
								</div>
								<div class="innerTabs__content ">
									<div class='personalRating'>
										<div class='personalRating__caption'>
											<div class="personalRating__btn active">Общий рейтинг</div>
											<div class="personalRating__btn">Профи</div>
											<div class="personalRating__btn">Новички</div>
										</div>
										<div class="personalRating__wrap">
											${casesResults()}
										</div>
									</div>
								</div>
							</div>
						</div>
						
					</div>
					
				</div>`;
	};
	if (data.cases.length>0){
		document.querySelector("#cases-wrap").insertAdjacentHTML("afterbegin", `
		<!-- start sCases-->
				<section class="sCases section" id="sCases">
					<div class="container">
						<div class="sCases__wrap">
						<div class="section-title" data-aos="fade-up" data-aos-duration="700">
								<h2>Кейсовые задания</h2>
								</div>
							<div class="row tabs">
							<div class="col-lg order-lg-2" data-aos="fade-up" data-aos-duration="700"  data-aos-offset="0"></div>
								<div class="col-lg-auto order-lg-1 tabs__caption">
								<div class="sCases__links" data-aos="fade-up" data-aos-duration="700" >
								</div>
								</div>
							</div>
						</div>
					</div>
					</section>
					<!-- end sCases-->
					`);
		}
					for (const [index,item] of data.cases.entries()) {
		let active = index == 0 ? 'active' : " ";
		document.querySelector(".sCases__links").insertAdjacentHTML("beforeend", templateBtn(item, active));
		document.querySelector(".sCases .row.tabs .col-lg").insertAdjacentHTML("beforeend", templateTabs(item, active));
	}


	if (Object.keys(data.playground).length !== 0 
		&& data.playground.name !== undefined 
		&& data.playground.adress !== undefined 
		&& data.playground.description 
		&& data.playground.description !== undefined 
		&& data.playground.avatar !== undefined 
		&& data.playground.map_link !== undefined
		) {
		document.querySelector(".sInfo").classList.remove('d-none');
		let gridTextLink = document.querySelector('.sInfo__grid-item--text a');
		document.querySelector('.sInfo h2').innerHTML = data.playground.name;
		document.querySelector('.sInfo .addr').innerHTML = data.playground.adress;
		document.querySelector('.sInfo__inner').innerHTML = data.playground.description;
		document.querySelector('.modal-win--text').innerHTML = data.playground.description;
		document.querySelector('.img-avatar').setAttribute("src", data.playground.avatar);
		document.querySelector('.map-img').innerHTML = data.playground.map_link;

		let sInfoTextSybols = 0;
		for (const item of document.querySelector('.sInfo__inner').children) {
			sInfoTextSybols += item.innerText.split('').length;
		}
		if (sInfoTextSybols <= 190) {
			gridTextLink.remove();
		} 
		const templateMap = item => {
			return `
					<div class="sInfo__grid-item bg-wrap aos-init aos-animate" data-aos="fade-up" data-aos-duration="700">
					<img class="object-fit-js picture-bg" src="${item} " alt="" loading="lazy">
					</div>`;
		};
		
		for (const item of data.playground.photos) {
			document.querySelector(".sInfo__grid-item--text").insertAdjacentHTML("afterend", templateMap(item));
		}
	}
	else{
		document.querySelector(".sInfo").remove();
	}



	function templateVideoSections(item) {
		return `<a class="default-slider__slide swiper-slide" href="${item.url}" data-fancybox="video-gallery" data-aos="fade-up" data-aos-duration="700">
			<div class="default-slider__video-wrap bg-wrap">
				<div class="default-slider__play-btn">
					<svg class="icon icon-play ">
						<use xlink:href="img/svg/sprite.svg#play"></use>
					</svg>
				</div>
				<img class="object-fit-js" src='${item.preview_image}' alt=""/>
			</div>
			<h6>${item.title}</h6>
			${item.description}
		</a>`
	}

	if (data.videos.length > 0) {
		for (const item of data.videos) {
			document.querySelector(".sVideo .default-slider__slider--js .swiper-wrapper").insertAdjacentHTML("beforeend", templateVideoSections(item));
		}
	}
	else{
		document.querySelector(".sVideo").remove();
	}

	setNews(data.news);
	setPartnersMain(data.allPartners);

	console.log(data);
}
getHackPageData(setHackPageData, pageId)