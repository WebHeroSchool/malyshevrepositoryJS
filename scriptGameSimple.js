const imageCard1 = document.querySelector('.image__card1');
const imageCard2 = document.querySelector('.image__card2');
const imageCard3 = document.querySelector('.image__card3');

function getLoser1() {
	imageCard1.classList.add('loser__card');
	imageCard1.classList.remove('image__card1');
	imageCard1.removeEventListener('click', getLoser1);
	let loserCard = document.querySelector('.loser__card');
	loserCard.addEventListener('click', event => document.location='index.html');
};

imageCard1.addEventListener('click', getLoser1);

function getLoser2() {
	imageCard2.classList.add('loser__card');
	imageCard2.classList.remove('image__card2');
	imageCard2.removeEventListener('click', getLoser2);
	let loserCard = document.querySelector('.loser__card');
	loserCard.addEventListener('click', event => document.location='index.html');
};

imageCard2.addEventListener('click', getLoser2);

function getWinner() {
	imageCard3.classList.add('winner__card');
	imageCard3.classList.remove('image__card3');
	imageCard3.removeEventListener('click', getWinner);
	let winnerCard = document.querySelector('.winner__card');
	winnerCard.addEventListener('click', event => document.location='index.html');
};

imageCard3.addEventListener('click', getWinner);







