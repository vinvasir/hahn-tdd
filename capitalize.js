function capitalize(str) {
	var first = str[0].toUpperCase();
	var rest = str.slice(1).toLowerCase();
	return first + rest;
}

module.exports = capitalize;