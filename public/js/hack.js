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
	console.log(data);
	document.title = data.event.name;
	document.querySelector('.sAbout__date').innerHTML = 
		data.event.dateRange[0] + ' ' +
		+ data.event.dateRange[1] 
		+ ' <span>' + data.event.dateRange[2] + '</span>';
	document.querySelector('.sAbout__type--1').innerHTML = data.playground.city;
	document.querySelector('.sAbout__type--2').innerHTML = data.playground.adress;
	document.querySelector('h1').innerHTML = data.event.name;
	document.querySelector('.sAbout h2').innerHTML = data.event.district;
	document.querySelector('.sAbout__text').innerHTML = data.event.description;
	document.querySelector('.sAbout__banner .h3').innerHTML = data.event.deadline_date;
	document.querySelector('.count-attendee').innerHTML = data.event.count.attendee_count;
	document.querySelector('.count-team').innerHTML = data.event.count.team_count;




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

	

	for (const item of data.partners) {
		// console.log(item);
		document.querySelector("#sPartners2 .sPartners__row").insertAdjacentHTML("beforeend", templatePartner(item));
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
	const templateTabs = (item, active) => {
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

		return `
				<div class="  tabs__content  ${active}" data-aos="fade-up" data-aos-duration="700">
									<div class="innerTabs">
										<div class="innerTabs__caption" data-aos="fade-up" data-aos-duration="700">
											<div class="innerTabs__btn active">Описание</div>
											<div class="innerTabs__btn disabled">Результаты</div>
										</div>
										<div>
										
											<div class="innerTabs__content active">
												<div class="sCases__tags" data-aos="fade-up" data-aos-duration="700">
													${expertisesItems()}
												</div>
												${item.longDescription}
												
											</div>
											<div class="innerTabs__content">
												<div class="sCases__tags" data-aos="fade-up" data-aos-duration="700">
													<a class="sCases__tag" href="#">Edtech
													</a>
													<a class="sCases__tag" href="#">NeuralNetwork
													</a>
													<a class="sCases__tag" href="#">Signs
													</a>
												</div>
												<p data-aos="fade-up" data-aos-duration="700">В&nbsp;Российской Федерации на&nbsp;постоянной основе поддерживается и&nbsp;развивается научно-техническая деятельность</p>
												<p data-aos="fade-up" data-aos-duration="700">Разработка методологии и&nbsp;прототипа системы, определяющей &laquo;фронтиры&raquo; науки и&nbsp;технологий в&nbsp;целях планирования научных исследований и&nbsp;постановки прорывных задач технологического развития страны</p>
												<p data-aos="fade-up" data-aos-duration="700">Основной задачей кейса является определения перечня &laquo;фронтиров&raquo; научно-технологических исследований и&nbsp;прогноз перспективных направлений. В&nbsp;мире уже существует несколько сотен миллионов различных информационных источников/материалов, анализ которых требуется для определения &laquo;фронтиров&raquo;. Решение описанной задачи в&nbsp;настоящее время представляется максимально эффективным на&nbsp;основе передовых ML-технологий.</p>
												<p data-aos="fade-up" data-aos-duration="700">&laquo;Фронтиры&raquo; научно-технического развития&nbsp;&mdash; это наиболее популярные направления исследований, где идёт активное развитие и&nbsp;большое количество прорывов. Точное определение приоритетных направлений (&laquo;фронтиров&raquo;) науки и&nbsp;технологии позволит выделять госфинансирование на&nbsp;темы, которые в&nbsp;наибольшей степени углубят научные знания, принесут пользу экономике и&nbsp;социальной сфере, позволят российским командам исследователей решать задачи &laquo;на&nbsp;опережение&raquo; и&nbsp;выйти на&nbsp;лидирующие позиции в&nbsp;научном мировом сообществе.</p>
												
											</div>
										</div>
										${partnersItem()}
									</div>
									
								</div>`;
	};


	for (const [index,item] of data.cases.entries()) {
		let active = index == 0 ? 'active' : " ";
		document.querySelector(".sCases__links").insertAdjacentHTML("beforeend", templateBtn(item, active));
		document.querySelector(".sCases .row.tabs .col-lg").insertAdjacentHTML("beforeend", templateTabs(item, active));
	}

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

	setNews(data.news);
	setPartners(data.allPartners);
}
getHackPageData(setHackPageData, pageId)