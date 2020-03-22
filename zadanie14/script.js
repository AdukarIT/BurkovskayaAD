addEventListener('DOMContentLoaded', function() {
	//1
	function getAmount(number, arr) {
		let symbol = String.fromCharCode(number);
		let counter = 0;
		for(let i = 0; i < arr.length; i++){
			let temp = arr[i].split('');
			for(let j = 0; j < temp.length; j++){
				if(temp[j] == symbol)
					counter++;
			}
		}
		return counter;
	}
	// console.log(getAmount(100, ['nd fd', 'qwe', 'd']));


	//2
	function getAmount(number) {
		let symbol = String.fromCharCode(number);
		let counter = 0;
		return function(arr) {
			for(let i = 0; i < arr.length; i++){
				let temp = arr[i].split('');
				for(let j = 0; j < temp.length; j++){
					if(temp[j] == symbol)
						counter++;
				}
			}
			return counter;
		}
	}

	let findE = getAmount(101);
	// console.log(findE(['eee', 'rock', 'erock']));


	//3
	function filterCityes(data) {
		return data.filter(function(item){
			if(item.state == 'California' && +item.growth_from_2000_to_2013.split('%')[0] > 0)
				return true;
		});
	}

	 // console.log(filterCityes(data));


	//4
	function counterCityes(data) {
		return data.reduce(function(counter, current) {
			let count = Number(current.population);
			if (current.latitude >= 25 && current.latitude <=30){
				counter = counter + count;
			}
			return counter;

		}, 1);
	}

	// console.log(counterCityes(data));

	//5
	function cityesStartingD() {
		let newArr = data.filter(function(element){
			if (element.city.indexOf("D") == 0) {
				return true;
			}
		});

		newArr.sort(function (first, second) {
		    if (first.city > second.city) {
		        return 1;
		    } else if (first.city < second.city) {
		        return -1;
		    } else return 0;
		});

		return newArr;
	}

	
	// console.log(cityesStartingD());

	//6
	// я совсем не поняла условие :с

});