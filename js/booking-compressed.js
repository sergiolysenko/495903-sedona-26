var bookingHeader=document.querySelector(".booking__label"),formField=document.querySelector(".form__field");formField.classList.add("form__field__hide"),bookingHeader.addEventListener("click",function(e){e.preventDefault(),formField.classList.contains("form__field__hide")?formField.classList.remove("form__field__hide"):formField.classList.add("form__field__hide")});