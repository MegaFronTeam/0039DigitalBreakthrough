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

let pageId = params['news_id'];
// console.log(pageId);

function setArticlePageData(data) {
	// console.log(data);
	document.title = data.name;
	document.description = data.description;
	// document.querySelector('.sContent__date').innerHTML = 
	// 	data.event.dateRange[0] + ' ' +
	// 	+ data.event.dateRange[1] 
	// 	+ ' <span>' + data.event.dateRange[2] + '</span>';
	// document.querySelector('.sAbout__type--1').innerHTML = data.playground.city;
	// document.querySelector('.sAbout__type--2').innerHTML = data.playground.adress;
	document.querySelector('h1').innerHTML = data.name;
	// document.querySelector('.sAbout h2').innerHTML = data.event.district;
	// document.querySelector('.sAbout__text').innerHTML = data.event.description;
	// document.querySelector('.sAbout__banner .h3').innerHTML = data.event.deadline_date;
	// document.querySelector('.count-attendee').innerHTML = data.event.count.attendee_count;
	// document.querySelector('.count-team').innerHTML = data.event.count.team_count;

}

getSingleNewsPageData(setArticlePageData, pageId);