var bugs_data = [	
	{ id: 1, name: "Common Butterfly", type: "Flying", value: 160, time: "4 a.m. - 7 p.m.", season: "September-June (Northern) / March-December (Southern)" },
	{ id: 2, name: "Yellow Butterfly", type: "Flying", value: 160, time: "4 a.m. - 7 p.m.", season: "March-June, September-October (Northern) / March-April, September-December (Southern)" },
	{ id: 3, name: "Tiger Butterfly", type: "Flying", value: 240, time: "4 a.m. - 7 p.m.", season: "March-September (Northern) / September-March (Southern)" },
	{ id: 4, name: "Peacock Butterfly", type: "Flying by hybrid flowers", value: 2500, time: "4 a.m. - 7 p.m.", season: "March-June (Northern) / September-December (Southern)" },
	{ id: 5, name: "Common Bluebottle", type: "Flying", value: 300, time: "4 a.m. - 7 p.m.", season: "April-August (Northern) / October-February (Southern)" },
	{ id: 6, name: "Paper Kite Butterfly", type: "Flying", value: 1000, time: "8 a.m. - 7 p.m.", season: "Year-round (Northern and Southern)" },
	{ id: 7, name: "Great Purple Emperor", type: "Flying", value: 3000, time: "4 a.m. - 7 p.m.", season: "May-August (Northern) / November-February (Southern)" },
	{ id: 8, name: "Monach Butterfly", type: "Flying", value: 140, time: "4 a.m. - 5 p.m.", season: "September-November (Northern) / March-May (Southern)" },
	{ id: 9, name: "Emperor Butterfly", type: "Flying", value: 4000, time: "5 p.m. - 8 a.m.", season: "June-September, December-March (Northern) / December-March, June-September (Southern)" },
	{ id: 10, name: "Agrias Butterfly", type: "Flying", value: 3000, time: "8 a.m. - 5 p.m.", season: "April-September (Northern) / November-March (Southern)" },
	{ id: 11, name: "Raja Brooke's Birdwing", type: "Flying by purple flowers", value: 2500, time: "8 a.m. - 5 p.m.", season: "April-September, December-February (Northern) / November-March, June-August (Southern)" },
	{ id: 12, name: "Queen Alexandra's Birdwing", type: "Flying", value: 4000, time: "8 a.m. - 4 p.m.", season: "May-September (Northern) / November-March (Southern)" },
	{ id: 13, name: "Moth", type: "Flying by light", value: 130, time: "7 p.m. - 4 a.m.", season: "Year-round (Northern and Southern)" },
	{ id: 14, name: "Atlas Moth", type: "On trees", value: 3000, time: "7 p.m. - 4 a.m.", season: "April-September (Northern) / October-March (Southern)" },
	{ id: 15, name: "Madagascan Sunset Moth", type: "Flying", value: 2500, time: "8 a.m. - 4 p.m.", season: "April-September (Northern) / October-March (Southern)" },
	{ id: 16, name: "Long Locust", type: "On ground", value: 200, time: "8 a.m. - 7 p.m.", season: "April-November (Northern) / November-May (Southern)" },
	{ id: 17, name: "Migratory Locust", type: "On ground", value: 600, time: "8 a.m. - 7 p.m.", season: "August-November (Northern) / February-May (Southern)" },
	{ id: 18, name: "Rice Grasshopper", type: "On ground", value: 160, time: "8 a.m. - 7 p.m.", season: "August-November (Northern) / February-May (Southern)" },
	{ id: 19, name: "Grasshopper", type: "On ground", value: 160, time: "8 a.m. - 5 p.m.", season: "July-September (Northern) / January-March (Southern)" },
	{ id: 20, name: "Cricket", type: "On ground", value: 130, time: "5 p.m. - 8 a.m.", season: "September-November (Northern) / March-May (Southern)" },
	{ id: 21, name: "Bell Cricket", type: "On ground", value: 430, time: "5 p.m. - 8 a.m.", season: "September-October (Northern) / March-April (Southern)" },
	{ id: 22, name: "Mantis", type: "On flowers", value: 430, time: "8 a.m. - 5 p.m.", season: "March-November (Northern) / September-May (Southern)" },
	{ id: 23, name: "Orchid Mantis", type: "On white flowers", value: 2400, time: "8 a.m. - 5 p.m.", season: "March-November (Northern) / September-May (Southern)" },
	{ id: 24, name: "Honeybee", type: "Flying", value: 200, time: "8 a.m. - 5 p.m.", season: "March-July (Northern) / March-July (Southern)" },
	{ id: 25, name: "Wasp", type: "Falls from shaking trees", value: 2500, time: "All day", season: "Year-round (Northern and Southern)" },
	{ id: 26, name: "Brown Cicada", type: "On trees", value: 250, time: "8 a.m. - 5 p.m.", season: "July-August (Northern) / January-February (Southern)" },
	{ id: 27, name: "Robust Cicada", type: "On trees", value: 300, time: "8 a.m. - 5 p.m.", season: "July-August (Northern) / January-February (Southern)" },
	{ id: 28, name: "Giant Cicada", type: "On trees", value: 600, time: "8 a.m. - 5 p.m.", season: "July-August (Northern) / January-February (Southern)" },
	{ id: 29, name: "Walker Cicada", type: "On trees", value: 400, time: "8 a.m. - 5 p.m.", season: "August-September (Northern) / February-March (Southern)" },
	{ id: 30, name: "Evening Cicada", type: "On trees", value: 660, time: "4 a.m. - 8 a.m., 4 p.m. - 7 p.m.", season: "July-August (Northern) / January-February (Southern)" },
	{ id: 31, name: "Cicada Shell", type: "On trees", value: 10, time: "All day", season: "July-August (Northern) / January-February (Southern)" },
	{ id: 32, name: "Red Dragonfly", type: "Flying", value: 180, time: "8 a.m. - 7 p.m.", season: "September-October (Northern) / March-April (Southern)" },
	{ id: 33, name: "Darner Dragonfly", type: "Flying", value: 230, time: "8 a.m. - 5 p.m.", season: "April-October (Northern) / October-April (Southern)" },
	{ id: 34, name: "Banded Dragonfly", type: "Flying", value: 4500, time: "8 a.m. - 5 p.m.", season: "May-October (Northern) / November-April (Southern)" },
	{ id: 35, name: "Damselfly", type: "Flying", value: 500, time: "All day", season: "November-February (Northern) / May-August (Southern)" },
	{ id: 36, name: "Firefly", type: "Flying", value: 300, time: "7 p.m. - 4 a.m.", season: "June (Northern) / December (Southern)" },
	{ id: 37, name: "Mole Cricket", type: "Underground", value: 500, time: "All day", season: "November-May (Northern) / May-November (Southern)" },
	{ id: 38, name: "Pondskater", type: "Ponds", value: 130, time: "8 a.m. - 7 p.m.", season: "May-September (Northern) / November-March (Southern)" },
	{ id: 39, name: "Diving Beetle", type: "Ponds and rivers", value: 800, time: "8 a.m. - 7 p.m.", season: "May-September (Northern) / November-March (Southern)" },
	{ id: 40, name: "Giant Water Bug", type: "Ponds and rivers", value: 2000, time: "7 p.m. - 8 a.m.", season: "April-September (Northern) / October-March (Southern)" },
	{ id: 41, name: "Stinkbug", type: "On flowers", value: 120, time: "All day", season: "March-November (Northern) / September-May (Southern)" },
	{ id: 42, name: "Man-faced Stink Bug", type: "On flowers", value: 1000, time: "7 p.m. - 8 a.m.", season: "March-November (Northern) / September-May (Southern)" },
	{ id: 43, name: "Ladybug", type: "On flowers", value: 200, time: "8 a.m. - 5 p.m.", season: "March-June, October (Northern) / September-December, April (Southern)" },
	{ id: 44, name: "Tiger Beetle", type: "On ground", value: 1500, time: "All day", season: "February-November (Northern) / August-May (Southern)" },
	{ id: 45, name: "Jewel Beetle", type: "On tree stumps", value: 2400, time: "All day", season: "April-August (Northern) / October-February (Southern)" },
	{ id: 46, name: "Violin Beetle", type: "On tree stumps", value: 450, time: "All day", season: "May-June, September-November (Northern) / November-December, March-April (Southern)" },
	{ id: 47, name: "Citrus Long-horned Beetle", type: "On tree stumps", value: 350, time: "All day", season: "Year-round (Northern and Southern)" },
	{ id: 48, name: "Rosalia Batesi Beetle", type: "On tree stumps", value: 3000, time: "All day", season: "May-September (Northern) / November-March (Southern)" },
	{ id: 49, name: "Blue Weevil Beetle", type: "On coconut trees", value: 800, time: "All day", season: "July-August (Northern) / January-February (Southern)" },
	{ id: 50, name: "Dung Beetle", type: "Pushing snowballs", value: 3000, time: "", season: "December-February (Northern) / June-August (Southern)" },
	{ id: 51, name: "Earth-boring Dung Beetle", type: "On ground", value: 300, time: "All day", season: "July-September (Northern) / January-March (Southern)" },
	{ id: 52, name: "Scarab Beetle", type: "On trees", value: 10000, time: "11 p.m. - 8 a.m.", season: "July-August (Northern) / January-February (Southern)" },
	{ id: 53, name: "Drone Beetle", type: "On trees", value: 200, time: "All day", season: "June-August (Northern) / December-February (Southern)" },
	{ id: 54, name: "Goliath Beetle", type: "On coconut trees", value: 8000, time: "5 p.m. - 8 a.m.", season: "June-September (Northern) / December-March (Southern)" },
	{ id: 55, name: "Saw Stag", type: "On trees", value: 2000, time: "All day", season: "July-August (Northern) / January-February (Southern)" },
	{ id: 56, name: "Miyama Stag", type: "On trees", value: 1000, time: "All day", season: "July-August (Northern) / January-February (Southern)" },
	{ id: 57, name: "Giant Stag", type: "On trees", value: 10000, time: "11 p.m. - 8 a.m.", season: "July-August (Northern) / January-February (Southern)" },
	{ id: 58, name: "Rainbow Stag", type: "On trees", value: 6000, time: "7 p.m. - 8 a.m.", season: "June-September (Northern) / December-March (Southern)" },
	{ id: 59, name: "Cyclommatus Stag", type: "On coconut trees", value: 8000, time: "5 p.m. - 8 a.m.", season: "July-August (Northern) / January-February (Southern)" },
	{ id: 60, name: "Golden Stag", type: "On coconut trees", value: 12000, time: "5 p.m. - 8 a.m.", season: "July-August (Northern) / January-February (Southern)" },
	{ id: 61, name: "Giraffe Stag", type: "On coconut trees", value: 12000, time: "5 p.m. - 8 a.m.", season: "July-August (Northern) / January-February (Southern)" },
	{ id: 62, name: "Horned Dynastid", type: "On trees", value: 1350, time: "5 p.m. - 8 a.m.", season: "July-August (Northern) / January-February (Southern)" },
	{ id: 63, name: "Horned Atlas", type: "On coconut trees", value: 8000, time: "5 p.m. - 8 a.m.", season: "July-August (Northern) / January-February (Southern)" },
	{ id: 64, name: "Horned Elephant", type: "On coconut trees", value: 8000, time: "5 p.m. - 8 a.m.", season: "July-August (Northern) / January-February (Southern)" },
	{ id: 65, name: "Horned Herucles", type: "On coconut trees", value: 12000, time: "5 p.m. - 8 a.m.", season: "July-August (Northern) / January-February (Southern)" },
	{ id: 66, name: "Walking Stick", type: "On trees", value: 600, time: "4 a.m. - 8 a.m., 5 p.m. - 7 p.m.", season: "July-November (Northern) / January-May (Southern)" },
	{ id: 67, name: "Walking Leaf", type: "Near trees, disguised as furniture leaf", value: 600, time: "All day", season: "July-August (Northern) / January-March (Southern)" },
	{ id: 68, name: "Bagworm", type: "Falls from shaking trees", value: 600, time: "All day", season: "Year-round (Northern and Southern)" },
	{ id: 69, name: "Ant", type: "On rotten food", value: 80, time: "All day", season: "Year-round (Northern and Southern)" },
	{ id: 70, name: "Hermit Crab", type: "Beach", value: 1000, time: "7 p.m. - 8 a.m.", season: "Year-round (Northern and Southern)" },
	{ id: 71, name: "Wharf Roach", type: "On rocks at beach", value: 200, time: "All day", season: "Year-round (Northern and Southern)" },
	{ id: 72, name: "Fly", type: "On trash items", value: 60, time: "All day", season: "Year-round (Northern and Southern)" },
	{ id: 73, name: "Mosquito", type: "Flying", value: 130, time: "5 p.m. - 4 a.m.", season: "June-September (Northern) / December-March (Southern)" },
	{ id: 74, name: "Flea", type: "On villagers", value: 70, time: "All day", season: "April-November (Northern) / October-May (Southern)" },
	{ id: 75, name: "Snail", type: "On rocks (raining)", value: 250, time: "All day", season: "Year-round (Northern and Southern)" },
	{ id: 76, name: "Pill Bug", type: "Hit rocks", value: 250, time: "11 p.m. - 4 p.m.", season: "September-June (Northern) / March-December (Southern)" },
	{ id: 77, name: "Centipede", type: "Hit rocks", value: 300, time: "4 p.m. - 11 p.m.", season: "September-June (Northern) / March-December (Southern)" },
	{ id: 78, name: "Spider", type: "Falls from shaking trees", value: 480, time: "7 p.m. - 8 a.m.", season: "Year-round (Northern and Southern)" },
	{ id: 79, name: "Tarantula", type: "On ground", value: 8000, time: "7 p.m. - 4 a.m.", season: "November-April (Northern) / May-October (Southern)" },
	{ id: 80, name: "Scorpion", type: "On ground", value: 8000, time: "7 p.m. - 4 a.m.", season: "May-October (Northern) / November-April (Southern)" },
];



var bugs_names_only = [];
for (i = 0; i < bugs_data.length; i++) {
	bugs_names_only.push(bugs_data[i]["name"]);
}

function critters_lookup_by_name(name) {
	for (i = 0; i < bugs_data.length; i++) {
		if (bugs_data[i]["name"] == name) {
			return bugs_data[i]["id"];
		}
	}

	console.log("critters_lookup_by_name - name (" + name + ") not found!");
	return 0;
}
