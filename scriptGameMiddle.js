const imageCard1 = document.querySelector('.image__card1');
const imageCard2 = document.querySelector('.image__card2');
const imageCard3 = document.querySelector('.image__card3');
const imageCard4 = document.querySelector('.image__card4');
const imageCard5 = document.querySelector('.image__card5');
const imageCard6 = document.querySelector('.image__card6');

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

function getLoser3() {
	imageCard3.classList.add('loser__card');
	imageCard3.classList.remove('image__card3');
	imageCard3.removeEventListener('click', getLoser3);
	let loserCard = document.querySelector('.loser__card');
	loserCard.addEventListener('click', event => document.location='index.html');
};

imageCard3.addEventListener('click', getLoser3);

function getWinner() {
	imageCard4.classList.add('winner__card');
	imageCard4.classList.remove('image__card4');
	imageCard4.removeEventListener('click', getWinner);
	let winnerCard = document.querySelector('.winner__card');
	winnerCard.addEventListener('click', event => document.location='index.html');
};

imageCard4.addEventListener('click', getWinner);

function getLoser5() {
	imageCard5.classList.add('loser__card');
	imageCard5.classList.remove('image__card5');
	imageCard5.removeEventListener('click', getLoser5);
	let loserCard = document.querySelector('.loser__card');
	loserCard.addEventListener('click', event => document.location='index.html');
};

imageCard5.addEventListener('click', getLoser5);

function getLoser6() {
	imageCard6.classList.add('loser__card');
	imageCard6.classList.remove('image__card6');
	imageCard6.removeEventListener('click', getLoser6);
	let loserCard = document.querySelector('.loser__card');
	loserCard.addEventListener('click', event => document.location='index.html');
};

imageCard6.addEventListener('click', getLoser6);







