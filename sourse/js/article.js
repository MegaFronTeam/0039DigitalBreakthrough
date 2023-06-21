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
	document.querySelector('meta[name="description"]').content = data.description;
	document.querySelector('meta[property="og:description"]').content = data.description;
	
	document.querySelector('h1').innerHTML = data.name;
	document.querySelector('.sContent__img-wrap img').src = data.avatar;
	document.querySelector('.sContent__date').innerHTML = data.publication_date;

	if(data.text !== null) {
		document.querySelector("#inner-content").insertAdjacentHTML("beforeend", data.text);
	}

	loadingContent();
}

getSingleNewsPageData(setArticlePageData, pageId);