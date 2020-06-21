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






