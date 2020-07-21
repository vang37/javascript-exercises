function translate(str) {
	let array = str.split(" ");
	let result = [];
	for (let i = 0; i < array.length; i++) {
		let string = array[i];
		let uTest = array[i].match(/u/i), vowelTest = array[i].match(/[aeio]/i), consonantTest = array[i].match(/[b-df-hj-np-tv-z]/i);
		if (uTest) {
			if (uTest.index > 0 && (string[uTest.index - 1] == "Q" || string[uTest.index - 1] == "q")) {
				result.push(array[i].slice(uTest.index + 1) + array[i].slice(0, uTest.index + 1) + "ay")
			}
			else if (uTest.index == 0) {
				result.push(array[i] + "ay")
			}
			else if (uTest.index >= 1) {
				result.push(array[i].slice(uTest.index) + array[i].slice(0, uTest.index) + "ay")
			}
		}
		else if (vowelTest && consonantTest) {
			if (vowelTest.index < consonantTest.index) {
				result.push(array[i] + "ay")
			}
			else if (vowelTest.index > consonantTest.index) {
				result.push(array[i].slice(vowelTest.index) + array[i].slice(0, vowelTest.index) + "ay")
			}
		}
	}
	return result.join(" ")
}

module.exports = {
	translate
}

