function saveAnswers() {
	var firstName = document.getElementById("firstNameInput").value;
	document.querySelector('#firstName').textContent = firstName;
	var lastName = document.getElementById("lastNameInput").value;
		document.querySelector('#lastName').textContent = lastName;
	var illness = document.getElementById("illnessInput").value;
		document.querySelector('#illness').textContent = illness;
	var pluralNoun = document.getElementById("pluralNounInput").value;
	document.querySelector('#pluralNoun').textContent = pluralNoun;
	var adjective = document.getElementById("adjectiveInput").value;
		document.querySelector('#adjective').textContent = adjective;
	var adjective2 = document.getElementById("adjective2Input").value;
	document.querySelector('#adjective2').textContent = adjective2;
	var sillyWord =  document.getElementById("sillyWordInput").value;
	document.querySelector('#sillyWord').textContent = sillyWord;	
	var	place = document.getElementById("placeInput").value;
		document.querySelector('#place').textContent = place;
	var number = document.getElementById("numberInput").value;
	document.querySelector('#number').textContent = number;	
	var sillyWord2 = document.getElementById("sillyWord2Input").value;
	document.querySelector('#sillyWord2').textContent = sillyWord2;
	var elem = document.getElementById('results');
	elem.style.visibility = 'visible';
	window.location.hash = "results";
}