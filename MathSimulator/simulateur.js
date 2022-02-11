/* initialise et définit les valeurs constantes par défaut */
const definedValue = 5;
const defaultSliderValue = 50;
var result_Participant;
var RESULT_EXPECTED;


/* récupère éléments html */
var sliderNumberSelected = document.getElementById('sliderNumberValue');
var sliderValueDisplay = document.getElementById('selectedValue');
var constValue = document.getElementById('constantValue');
var firstOptionStatus = document.getElementById('firstOption');
var secondOptionStatus = document.getElementById('secondOption');
var firstResultEntered = document.getElementById('firstResult');

/* affiche la valeur constante dans le html*/
constValue.innerHTML = definedValue;
sliderValueDisplay.innerHTML = defaultSliderValue;


function valid() {
	var status = evaluateResult();
	console.log('valeur de status : ' + status);
}

/* reset: réinisialiser toutes les valeurs aux valeurs par défaut et désélectionne les options cochées */
function reset() {
	// remet la valeur du slider à sa valeur par défaut dans slider
	sliderNumberSelected.value = defaultSliderValue;
	// et dans l'affichage (p selected value)
	sliderValueDisplay.innerHTML = defaultSliderValue;
	// clear le champ firstResult
	firstResultEntered.value = '';
	// désélectionne les options sélectionnées si elles ont été cochées
	if(firstOptionStatus.checked) {
		firstOptionStatus.checked = false;
	}
	if(secondOptionStatus.checked) {
		secondOptionStatus.checked = false;
	}
	// rest des valeurs participant et attendues
	result_Participant = '';
	RESULT_EXPECTED = '';
	}

function setSliderValue() {
	sliderValueDisplay.innerHTML = sliderNumberSelected.value;
	console.log('slider number selected : ' + sliderNumberSelected.value);
}

function setFirstOption() {
	console.log('first option status : ' + firstOptionStatus.checked + '; id : ' + firstOptionStatus.id);
}

function setSecondOption() {
	console.log('second option status :' + secondOptionStatus.checked);
}

function setResult(val) {
	result_Participant = val;
	console.log('participant result : ' + result_Participant);
}

/* calculer résultat correct, le transmettre à mobiteach, définir valeur de status  */
function evaluateResult() {
	var status;
	RESULT_EXPECTED = definedValue * sliderNumberSelected.value;

	// si la première option est cochée on multiplie le résultat attendu par 2
	if(firstOptionStatus.checked) {
		RESULT_EXPECTED *= 2;
		// si la deuxième option est cochée on divise le résultat attendu par 2
	} if(secondOptionStatus.checked) {
		RESULT_EXPECTED /= 2;
	}

	if(RESULT_EXPECTED == result_Participant) {
		status = 'Congratulations!';
	} /* si plusieurs résultats et qu'un ou plusieurs sont faux status = partial;
	else if() {
	status = 'partial';
} */
else {
	status = 'Try again';
}

console.log('entered result :' + result_Participant + '; expected result : ' + RESULT_EXPECTED + '; status value: '+ status);
alert(status);
return status;
}
