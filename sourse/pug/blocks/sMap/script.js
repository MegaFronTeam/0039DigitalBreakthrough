
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
			setMap()
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
	let numbersElements = document.querySelectorAll(".sMap__number")

	document.addEventListener('click', function (e) {
		let target = e.target.closest('[data-region]');
		let select = e.target.closest('.sMap__select-wrap select');

		if (target) {
			for (const mapPart of mapParts) {
				mapPart.classList.remove('active');
			}
			target.classList.add('active');

			let index = 0;
			let attributeNodeArray = [...target.attributes].filter(item => item.name.includes('data-result'));
			for (const el of numbersElements) {
				counter(el, +attributeNodeArray[index]['value'], 200);
				index++;
			}
		}
		else if (!$(mapParts).hasClass('active') && !select) {
			for (const mapPart of mapParts) {
				mapPart.classList.remove('active');
			}
			setMap()
		}

	});

	let select = document.querySelector('.sMap__select-wrap select');
	select.addEventListener('change', function (e) {
		let value = this.value;
		let paths = document.querySelectorAll(`.map-svg [data-region]`);
		for (const path of paths) {
			if (path.getAttribute('data-region') !== value) {
				path.classList.remove('active');
			}
			else {
				path.classList.add('active');
				let index = 0;
				let attributeNodeArray = [...path.attributes].filter(item => item.name.includes('data-result'));
				for (const el of numbersElements) {
					counter(el, +attributeNodeArray[index]['value'], 200);
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
		range = (start > 200 || end > 200) ? (end - start) * 2 : end - start,
		increment = end > start ? 1 : -1,
		step = Math.abs(Math.floor(200 / range));
	increment = (start > 300 || end > 300) ? increment * 5 : increment;
	if (end == start) return;
	let timer = setInterval(() => {
		current += increment;
		obj.textContent = current;
		if (increment > 0 && current >= end) {
			current == end;
			clearInterval(timer);
		}
		else if (increment < 0 && current <= end) {
			current == end;
			clearInterval(timer);
		}
	}, step);
}

function setMap(arr = arrAll) {
	let numbersElements = document.querySelectorAll(".sMap__number")
	let index = 0;
	for (const el of numbersElements) {
		counter(el, + arr[index++]);
	}
}
getMainPageData(setMapStats);