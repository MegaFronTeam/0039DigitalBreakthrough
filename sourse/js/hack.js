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
function setHackPageData(data) {
	document.title = data.event.name;
	document.querySelector('.sAbout__date').innerHTML = 
		data.event.dateRange[0] + ' ' +
		+ data.event.dateRange[1] 
		+ ' <span>' + data.event.dateRange[2] + '</span>';
	document.querySelector('.sAbout__type--2').innerHTML = data.playground.adress;
	document.querySelector('h1').innerHTML = data.event.name;
	document.querySelector('.sAbout h2').innerHTML = data.event.district;
	document.querySelector('.sAbout__text').innerHTML = data.event.description;
	document.querySelector('.sAbout__banner .h3').innerHTML = data.event.deadline_date;




	const templatePartner = function (img, title, text, link) {
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

	

	for (const item of data.partners) {
		// console.log(item);
		document.querySelector("#sPartners2 .sPartners__row").insertAdjacentHTML("beforeend", templatePartner(item.avatar_url, item.name, item.description, item.link));
	}


	// Cases
	// BTns
	const templateBtn = function (name, shortDescription, active) {
		return `
				<a class="sCases__link tabs__btn scroll-link ${active}" href="#sCases">
					<p>${shortDescription}</p>
					<span>${name}</span>
				</a>`;
	};

	for (const [index,item] of data.cases.entries()) {
		if(index ==0) {
			active = 'active'
		}
		else{
			active = ' '
		}
		// console.log(item);
		document.querySelector(".sCases__links").insertAdjacentHTML("beforeend", templateBtn(item.name, item.shortDescription, active));
	}


	// Tabs
	const templateTabs = function (longDescription, partners,  expertises, active) {
		let expertisesItems = ()=>{ 
			let content = ' '
			if (expertises.length == 0) return ' ';
			for (const item of expertises) { 
				content += ` <a class="sCases__tag" href="#">${item.name} </a>` 
			}
			return content;
		}
		
		let partnersItem = ()=>{
			let content = ' '
			if (partners.length == 0) return ' ';
			for (const item of partners) {
				content += `
								<a class="sCases__director " href="${item.link}" data-aos="fade-up" data-aos-duration="700">
										<img src="${item.avatar_url}" alt="" loading="lazy"/>
										<div>
										<span>${item.description}</span>
											<p>${item.name}</p>
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
										<div class="innerTabs__content active">
											<div class="sCases__tags" data-aos="fade-up" data-aos-duration="700">
												${expertisesItems()}
											</div>
											${longDescription}
											
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
									
								</div>`;
	};


	for (const [index,item] of data.cases.entries()) {
		if (index == 0) {
			active = 'active'
		}
		else {
			active = ' '
		}

		document.querySelector(".sCases .row.tabs .col-lg").insertAdjacentHTML("beforeend", templateTabs(item.longDescription, item.partners, item.expertises, active));
	}


	document.querySelector('.sInfo h2').innerHTML = data.playground.name;
	document.querySelector('.sInfo .addr').innerHTML = data.playground.adress;
	document.querySelector('.sInfo__grid-item--text').innerHTML = data.playground.description;
	document.querySelector('.map-img').setAttribute("src", data.playground.avatar);



	const templateMap = function (img) {
		return `
				<div class="sInfo__grid-item bg-wrap aos-init aos-animate" data-aos="fade-up" data-aos-duration="700">
				<img class="object-fit-js picture-bg" src="${img} " alt="" loading="lazy">
				</div>`;
	};

	for (const item of data.playground.photos) {
		// console.log(item);
		document.querySelector(".sInfo__grid-item--text").insertAdjacentHTML("afterend", templateMap(item.avatar_url));
	}
}
getHackPageData(setHackPageData, pageId)