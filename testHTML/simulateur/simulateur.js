/* initialise et définit une valeur constante*/
const definedValue = 5;
var result_Participant;
var RESULT_EXPECTED;

var mobiteachAPI =	 parent.window.mobiteachAPI;

var valid = function () {
	console.log(mobiteachAdivisionPI);
	mobiteachAPI.commit(result_Participant == RESULT_EXPECTED);
	console.log(result_Participant);
	console.log(RESULT_EXPECTED);
}

/* affiche première valeur sélectionnée*/
var valueInt = document.getElementById("sliderValue");
var firstInputElement = document.getElementById("pfirstValue");
firstInputElement.innerHTML = valueInt.value;

/* met à jour l'affichage de la première valeur dès qu'elle est sélectionnée par l'utilisateur*/
valueInt.oninput = function() {
	firstInputElement.innerHTML = this.value;
}

/* affiche la valeur constante dans le html*/
var constValue = document.getElementById("constantValue");
constValue.innerHTML = definedValue;

/* récupérer valeur de résultat saisie*/
function setResult(val) {
	result_Participant = val;
	return result_Participant;
}

/* calculer résultat correct */
function setCorrectResult(val) {
	RESULT_EXPECTED = document.getElementById("constantValue").value *document.getElementById("sliderValue").value;
	result_Participant = val;
	return result_Participant;
}
