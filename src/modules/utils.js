import Payment from "payment";

function clearNumber(value = "") {
	return value.replace(/\D+/g, "");
}

export function formatCreditCardNumber(value) {
	if (!value) {
		return value;
	}

	const issuer = Payment.fns.cardType(value);
	const clearValue = clearNumber(value);
	let nextValue;

	switch (issuer) {
		case "amex":
			nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
				4,
				10
			)} ${clearValue.slice(10, 15)}`;
			break;
		case "dinersclub":
			nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
				4,
				10
			)} ${clearValue.slice(10, 14)}`;
			break;
		default:
			nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
				4,
				8
			)} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`;
			break;
	}

	return nextValue.trim();
}

export function formatCVC(value, prevValue, allValues = {}) {
	const clearValue = clearNumber(value);
	let maxLength = 4;

	if (allValues.number) {
		const issuer = Payment.fns.cardType(allValues.number);
		maxLength = issuer === "amex" ? 4 : 3;
	}

	return clearValue.slice(0, maxLength);
}

export function formatExpirationDate(value) {
	const clearValue = clearNumber(value);

	if (clearValue.length >= 3) {
		// let month = clearValue.slice(0, 2);

		const today = new Date();
		const month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		const year = String(today.getFullYear());
		let cardYear = clearValue.slice(2, 6);
		let cardMonth = clearValue.slice(0, 2);

		if (cardYear.length === 4 && cardYear <= year) {
			cardYear = year;
		}

		if (clearValue.length === 6 && cardYear === year && cardMonth < month) {
			cardMonth = month;
		}

		if (cardMonth > 12) {
			cardMonth = 12;
		}
		return `${cardMonth}/${cardYear}`;
	}

	return clearValue;
}

export function formatFormData(data) {
	return Object.keys(data).map(d => `${d}: ${data[d]}`);
}

export function allLetter(inputtxt) {
	var letters = /^[a-zA-Z\s]*$/;
	if (inputtxt.value.match(letters)) {
		return inputtxt.value;

	}
	else {
		return inputtxt.value = inputtxt.value.substring(0, inputtxt.value.length - 1);
	}
}


