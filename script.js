const button = document.querySelector(".submit-button");

const errors = document.querySelectorAll(".error-message");
const inputs = document.querySelectorAll("input");

const cardholderName = inputs[0];
const cardholderNameRegex = /^[a-z]+[\sa-z]*$/i;

const cardNumber = inputs[1];
const cardRegex = /^\d+$/;
const validCardRegex = /^\d{16}$/;
const numberSpacingRegex = /.{1,4}/g;

const monthInput = inputs[2];
const yearInput = inputs[3];
const cvcInput = inputs[4];

const cardInfoArray = [
	document.querySelector(".cardholder-name"),
	document.querySelector(".card-number"),
	document.querySelector(".month"),
	document.querySelector(".year"),
	document.querySelector(".cvc"),
];

button.addEventListener("click", (e) => {
	e.preventDefault();

	checkForInputErrors();
});

inputs.forEach((input, index) => {
	input.addEventListener("input", () => {
		changeText(input, index);
	});
});

// Changes card info on input
function changeText(input, index) {
	let inputValue = input.value;

	if (index == 1) {
		if (inputValue.length < 16) {
			const zeros = "0".repeat(16 - inputValue.length);
			inputValue += zeros;
		}
		inputValue = inputValue.match(numberSpacingRegex).join(" ");
	}
	cardInfoArray[index].textContent = inputValue;
}

monthInput.addEventListener("keydown", () => {
	limit(monthInput);
});
yearInput.addEventListener("keydown", () => {
	limit(yearInput);
});
cvcInput.addEventListener("keydown", () => {
	limit(cvcInput, 2);
});

function checkForErrorCardholder() {
	if (!cardholderName.value) {
		activateError(cardholderName, 0);
	} else {
		if (!cardholderNameRegex.test(cardholderName.value)) {
			activateError(
				cardholderName,
				0,
				"Wrong format, alphabetical characters only"
			);
		} else {
			deactivateError(cardholderName, 0);
			return false;
		}
	}
	return true;
}

function checkForErrorCardNumber() {
	if (!cardNumber.value) {
		activateError(cardNumber, 1);
	} else {
		if (!cardRegex.test(cardNumber.value)) {
			activateError(cardNumber, 1, "Wrong format, numbers only");
		} else {
			if (!validCardRegex.test(cardNumber.value)) {
				activateError(
					cardNumber,
					1,
					"Wrong format, 16 numbers required"
				);
			} else {
				deactivateError(cardNumber, 1);
				return false;
			}
		}
	}
	return true;
}

function checkForErrorMonthAndYear() {
	if (!monthInput.value || !yearInput.value) {
		errors[2].classList.remove("error-inactive");
		if (!monthInput.value) {
			monthInput.classList.add("error-active");
		} else {
			monthInput.classList.remove("error-active");
		}
		if (!yearInput.value) {
			yearInput.classList.add("error-active");
		} else {
			yearInput.classList.remove("error-active");
		}
	} else {
		deactivateError(monthInput, 2);
		deactivateError(yearInput, 2);
		return false;
	}
	return true;
}

function checkForErrorCvc() {
	if (!cvcInput.value) {
		activateError(cvcInput, 3);
	} else {
		if (cvcInput.value.length < 3) {
			activateError(cvcInput, 3, "3 numbers required");
		} else {
			deactivateError(cvcInput, 3);
			return false;
		}
	}
	return true;
}

function deactivateError(input, index) {
	activateError(input, index, false, true);
}

// errors[0] -> cardholderName, errors[1] -> cardNumber,
// errors[2] -> mmyy, errors[3] -> cvc
function activateError(input, index, message = false, deactivate = false) {
	if (!deactivate) {
		errors[index].classList.remove("error-inactive");
		input.classList.add("error-active");
		if (message) {
			errors[index].textContent = message;
		}
	} else {
		errors[index].classList.add("error-inactive");
		input.classList.remove("error-active");
	}
}

function checkForInputErrors() {
	// checkForError functions return false only if there is no error
	const errorName = checkForErrorCardholder();
	const errorNumber = checkForErrorCardNumber();
	const errorMonthOrYear = checkForErrorMonthAndYear();
	const errorCvc = checkForErrorCvc();
	if (!errorName && !errorNumber && !errorMonthOrYear && !errorCvc) {
		const form = document.querySelector("form");
		const completedState = document.querySelector("#completed-state");

		form.classList.toggle("hidden");
		completedState.classList.toggle("hidden");
	}
}

function limit(element, max_chars = 1) {
	if (element.value.length > max_chars) {
		element.value = element.value.substr(0, max_chars);
	}
}
