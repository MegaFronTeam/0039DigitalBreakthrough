
function setMapStats(items) { 
	
	let allHackathons = 0;
	let allPlayers = 0;
	let allTeams = 0;
	let allResults = 0;
	for (let key in items) {
		let subObj = items[key]; 
		let path =  document.querySelector(`.map-svg g.path-${key}`);

		path.setAttribute("data-hackathons", subObj.events);
		path.setAttribute("data-players", subObj.attendees);
		path.setAttribute("data-teams", subObj.teams);
		path.setAttribute("data-results", subObj.solutions);

		allHackathons += +subObj.events;
		allPlayers += +subObj.attendees;
		allTeams += +subObj.teams;
		allResults += +subObj.solutions;
	}
	document.querySelector(".sMap__item .hackathons").innerHTML = allHackathons;
	document.querySelector(".sMap__item .players").innerHTML = allPlayers;
	document.querySelector(".sMap__item .teams").innerHTML = allTeams;
	document.querySelector(".sMap__item .results").innerHTML = allResults;

}
getMapStats(setMapStats);