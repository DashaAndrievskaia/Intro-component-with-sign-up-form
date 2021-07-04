function submitForm() {
    const inputName = document.querySelector(".name");
    const inputLastName = document.querySelector(".last-name");
    const inputEmail = document.querySelector(".email");
    const inputPassword = document.querySelector(".password");

    validateRequired(inputName);
    validateRequired(inputLastName);
    validateRequired(inputPassword);

    validateRequired(inputEmail);
    if (validatorValue(inputEmail)) {
        validateEmail(inputEmail);
    } else {
        hideEmailError(inputEmail);
    }
}

function validateEmail(input) {
    const valueEmail = input.value;
    if (!validateEmailValue(valueEmail)) {
        showErrorState(input);
        showEmailError(input);
    } else {
        hideErrorState(input);
        hideEmailError(input);
    }
}

function showEmailError(input) {
    const errorElement = input.parentElement.querySelector("p.error-email");
    errorElement.style.display = "block";
}

function hideEmailError(input) {
    const errorElement = input.parentElement.querySelector("p.error-email");
    errorElement.style.display = "none";
}



function validateEmailValue(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateRequired(input) {
    if (!validatorValue(input)) {
        showErrorState(input);
        showRequiredError(input);
    } else {
        hideErrorState(input);
        hideRequiredError(input);
    }
}

function validatorValue(input) {
    const value = input.value;
    if (value) {
        return true;
    } else {
        return false;
    }
}

function showRequiredError(input) {
    const errorElement = input.parentElement.querySelector("p.error-required");
    errorElement.style.display = "block";

}

function hideRequiredError(input) {
    const errorElement = input.parentElement.querySelector("p.error-required");
    errorElement.style.display = "none";
}

function showErrorState(input) {
    input.classList.add("error-icon");
}

function hideErrorState(input) {
    input.classList.remove("error-icon");

}