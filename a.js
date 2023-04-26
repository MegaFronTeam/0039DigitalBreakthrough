//https://github.com/MegaFronTeam/0021YouthBit/blob/main/sourse/pug/blocks/sLogos/script.js

// В прошлый раз было вот так
//
//
function getPartners() {
	
	const url = `${baseUrl}/site/company`
	handleRequest(url).then(res => {
		const arr = res.filter(el => el.category ==='Партнёры');
		for (const item of arr) {
			// console.log(item);
			
			document.querySelector(".sLogos__slider--partners-js .swiper-wrapper").insertAdjacentHTML("beforeend", template(item.avatar_url, item.description, item.link));
		}
	});
}

getPartners();

--------------------------------------------------
// Теперь как-то вот так
//

function setPartners(partners) {
		for (const item of partners) {
			// console.log(item);
			
			document.querySelector(".sLogos__slider--partners-js .swiper-wrapper").insertAdjacentHTML("beforeend", template(item.avatar_url, item.description, item.link));
		}
}

getParnters(setPartners);
