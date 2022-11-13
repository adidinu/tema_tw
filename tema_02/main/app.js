function addTokens(input, tokens) {
	if (typeof input == 'object') {
		if (!(input instanceof String)) {
			throw new Error('Invalid input');
		}
	} else {
		if (typeof input != 'string') {
			throw new Error('Invalid input');
		}
	}
	if (input.length < 6) {
		throw new Error('Input should have at least 6 characters');
	}
	if (typeof tokens != 'object' || !(tokens instanceof Array)) {
		throw new Error('Invalid array format');
	}
	tokens.forEach((tok) => {
		if (typeof tok != 'object' || Object.keys(tok).length > 1 || tok.hasOwnProperty('tokenName') == false) {
			throw new Error('Invalid array format');
		}
		if (typeof tok.tokenName != 'string') {
			throw new Error('Invalid array format');
		}
	});
	if (!input.includes('...')) {
		return input;
	}

	tokens.forEach((tok) => {
		input = input.replace('...', `\${${tok.tokenName}}`);
	});
	return input;
}

const app = {
	addTokens: addTokens,
};

module.exports = app;

console.log(addTokens('Subsemnatul ... ...', [{ tokenName: 'subsemnatul' }, { tokenName: 'subsemnatul2' }]));
