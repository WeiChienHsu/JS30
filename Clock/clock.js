const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setData(){
	const now = new Date();
	const second = now.getSeconds();
	const secondDegree = ((second/60)*360)+90;
	secondHand.style.transform = `rotate(${secondDegree}deg)`;
	// second

	const minute = now.getMinutes();
	const minuteDegree = ((minute/60)*360)+90;
	minHand.style.transform = `rotate(${minuteDegree}deg)`;
	//minute

	const hour = now.getHours();
	const hourDegree = ((hour/48)*360)+90;
	hourHand.style.transform = `rotate(${hourDegree}deg)`;
	console.log(hour);
	//hour

}	

setInterval(setData,1000);