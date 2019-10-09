var bookingHeader = document.querySelector(".booking__label");
var formField = document.querySelector(".form__field");

formField.classList.add("form__field__hide");

bookingHeader.addEventListener("click", function (evt) {
	evt.preventDefault();
	if (formField.classList.contains("form__field__hide")) {
		formField.classList.remove("form__field__hide")
	}
	else {
		formField.classList.add("form__field__hide")
	}
});