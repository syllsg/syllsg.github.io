

class mobiteachAPI {



	/* initialise les valeurs sur mbt*/
	/* récupère les valeurs par défaut du simulateur??
	* array of value
	* */
	initValues(data){

	}


	/* set une valeur en fonction d'un id */

	/*
	 * async
	*data.id
	*data.name
	*data.value
	* */
	setValue(data,callback){
		ServiceHTML.setValue(data).success(...).error(....);
	}



	/* set un tableau de valeur  */
	/*
	 * async
	 * array of value
	 * */
	setValues(data,callback){
		ServiceHTML.setValues(data).success(...).error(....);
	}




	/* récupère toutes les valeurs sauvegardé dans mbt */

	/*
	 * async
	 * */
	getValues(callback){
	}


	/* récupère une valeur	*/

	/*
	 * async
	* */
	getValue(attrId,callback){
	}



	/* valide le résultat
	 succes : ['correct','partial','incorrect']
	 */
	commit(succes,callback){
	}

}

window.mobiteachAPI = new mobiteachAPI();
