
let arrAll = [];
function setMapStats(items) {
	for (let key in items.regions) {

		let subObj = items.regions[key];
		if (subObj.region === 'Общая статистика') {
			arrAll = [
				subObj.events,
				subObj.attendees['newbie'],
				subObj.attendees['profi'],
				subObj.teams['newbie'],
				subObj.teams['profi'],
				subObj.solutions['newbie'],
				subObj.solutions['profi']
			];
			setMap();
		}
		else {

			let path = document.querySelector(`.map-svg [data-region="${subObj.region}"]`);
			path.setAttribute("data-result-hackathons", subObj.events);
			path.setAttribute("data-result-attendees-newbie", subObj.attendees['newbie']);
			path.setAttribute("data-result-attendees-profi", subObj.attendees['profi']);
			path.setAttribute("data-result-teams-newbie", subObj.teams['newbie']);
			path.setAttribute("data-result-teams-profi", subObj.teams['profi']);
			path.setAttribute("data-result-solutions-newbie", subObj.solutions['newbie']);
			path.setAttribute("data-result-solutions-profi", subObj.solutions['profi']);
		}
	}


	let map = document.querySelector('.map-svg');
	let mapParts = map.children;
	let numbersElements = document.querySelectorAll(".sMap__number span");
	let select = document.querySelector('.sMap__select-wrap select');

	document.addEventListener('click', function (e) {
		let target = e.target.closest('[data-region]');
		let selectTarget = e.target.closest('.sMap__select-wrap  ');

		if (target && !target.classList.contains("active")) {
			if(document.querySelector('[data-region].active')){
				document.querySelector('[data-region].active').classList.remove('active')
			}
			target.classList.add('active');

			let index = 0;
			let attributeNodeArray = [...target.attributes].filter(item => item.name.includes('data-result'));
			for (const el of numbersElements) {
				counter(el, attributeNodeArray[index]['value']);
				index++;
			}
			select.value = target.getAttribute('data-region');
		}
		else if ($(mapParts).hasClass('active') && !selectTarget && !target) {
			for (const mapPart of mapParts) {
				mapPart.classList.remove('active');
			}
			setMap()
			select.value = 'Выберите округ'
		}

	});


	select.addEventListener('change', function (e) {
		let value = this.value;
		for (const path of mapParts) {
			if (path.getAttribute('data-region') !== value) {
				path.classList.remove('active');
			}
			else {
				path.classList.add('active');
				let index = 0;
				let attributeNodeArray = [...path.attributes].filter(item => item.name.includes('data-result'));
				for (const el of numbersElements) {

					counter(el, +attributeNodeArray[index]['value'], 100);
					index++;
				}
			}
		}
	});

}

function counter(id, end) {

	let obj = id,
		current = +id.textContent,
		start = current,
		increment = end > start ? 1 : -1,
		range =  ( end > start) ? (end - start) : (start - end),
		step =   Math.abs(Math.floor(1 / (range**range )));
	if (end != current) {
		let timer = setInterval(() => {
			if ( Math.abs(current - end) > 1000) {
				current += increment * 500;
			}
			else if(  Math.abs(current - end) > 500) {
				current += increment * 100;
			}
			else{
				current += increment ;
			}
			obj.textContent = current;

			if (increment > 0 && current == end) {

				+current == +end;
				clearInterval(timer);
			}
			else if (increment < 0 && current == end) {
				+current == +end;
				clearInterval(timer);
			}
		}, 1);
	}
}

function setMap(arr = arrAll) {
	let numbersElements = document.querySelectorAll(".sMap__number span")
	let index = 0;
	for (const el of numbersElements) {
		counter(el, + arr[index++]);
	}
}
// getMainPageData(setMapStats);
