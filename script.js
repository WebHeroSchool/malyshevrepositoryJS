const levels = [
  document.getElementById('simple'),
  document.getElementById('middle'),
  document.getElementById('hard')
];

levels.forEach(setLevel => {
	setLevel.onclick = function() {
		levels.forEach(setLevels => setLevels.classList.remove('level-selector'));
		this.classList.add('level-selector');
	};
});
 
const button = document.getElementById('startButton');

function getStartGame() {
	if (levels[0].classList.contains('level-selector')) {
		document.location='gameSimple.html';
	} else if (levels[1].classList.contains('level-selector')) {
		document.location='gameMiddle.html';
	} else if (levels[2].classList.contains('level-selector')) {
		document.location='gameHard.html';
	} else {
		document.location='index.html';
	};
};

button.addEventListener('click', getStartGame);




