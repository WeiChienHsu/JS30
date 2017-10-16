const inventors = [
	{ first: 'Albert', last:'Einstein', year: 1840, passed: 1905},
	{ first: 'Lina', last:'Coodka', year: 1440, passed: 1955},
	{ first: 'Peter', last:'Lamdda', year: 1940, passed: 1955},
	{ first: 'Sam', last:'Hippeo', year: 1340, passed: 1395},
	{ first: 'Lilly', last:'Amaakd', year: 1840, passed: 1925},
	{ first: 'Ben', last:'Hsu', year: 1740, passed: 1775},
];

const people = ["Beck, Glenn","Beck, Carl","Beckett, Samuel","Beddoes, Mick","Berry, Jaele","Benef, Djeedw"];


//filter
const sisteen = inventors.filter(inventor => (inventor.year > 1500));

console.log(sisteen);


//map
const fullName = inventors.map(inventor => inventor.first + " " + inventor.last);

console.log(fullName);

//sort
const ordered = inventors.sort((a,b) => b.year > a.year? 1:-1);
const ordered1 = inventors.sort(function(a,b){
	if(b.year > a.year){
		return 1;
	} else{
		return -1;
	}
})
console.log(ordered);

//reduce
const totalYear = inventors.reduce(function (total,inventor){
	return total + (inventor.passed - inventor.year);
},0) //total init = 0

const totalYear1 = inventors.reduce((total,inventor) =>{ return total + (inventor.passed - inventor.year) },0)

console.log(totalYear);


// sort their ages
const oldest = inventors.sort(function(a,b){
	const lastGuy = a.passed - a.year;
	const nextGuy = b.passed - b.year;
	return lastGuy > nextGuy? 1:-1;
})

console.log(oldest);

// find the key words in a website
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const category = document.querySelector('.mw-category');
const lists = Array.from(category.querySelectorAll('a'));
const de = lists.map(link => link.textContent).filter(streetName => streetName.includes('de'));
console.log(de);

