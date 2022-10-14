import { validacoes } from "./validacoes";
window.onload = function () {
    const usernameEl = document.querySelector('#username');
    const passwordEl = document.querySelector('#password');

    const form = document.querySelector('#signup');


    const checkUsername = () => {

        let valid = false;

        const min = 3,
            max = 25;

        const username = usernameEl.value.trim();

        if (!isRequired(username)) {
            showError(usernameEl, 'Seu usuário não pode estar vazio.');
        } else if (!isBetween(username.length, min, max)) {
            showError(usernameEl, `Seu usurário deve ter pelo menos ${min} e ${max} caractéres.`)
        } else {
            showSuccess(usernameEl);
            valid = true;
        }
        return valid;
    };


    const checkPassword = () => {
        let valid = false;


        const password = passwordEl.value.trim();

        if (!isRequired(password)) {
            showError(passwordEl, 'Sua senha não pode estar vazia.');
        } else if (!isPasswordSecure(password)) {
            showError(passwordEl, 'Sua senha deve ter pelo menos 8 caracteres que incluem pelo menos 1 letra minúscula, 1 letra maiúscula, 1 número e 1 caractére especial (!@#$%^&*)');
        } else {
            showSuccess(passwordEl);
            valid = true;
        }

        return valid;
    };


    const isPasswordSecure = (password) => {
        const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return re.test(password);
    };

    const isRequired = value => value === '' ? false : true;
    const isBetween = (length, min, max) => length < min || length > max ? false : true;


    const showError = (input, message) => {
        // get the form-field element
        const formField = input.parentElement;
        // add the error class
        formField.classList.remove('success');
        formField.classList.add('error');

        // show the error message
        const error = formField.querySelector('small');
        error.textContent = message;
    };

    const showSuccess = (input) => {
        // get the form-field element
        const formField = input.parentElement;

        // remove the error class
        formField.classList.remove('error');
        formField.classList.add('success');

        // hide the error message
        const error = formField.querySelector('small');
        error.textContent = '';
    }


    form.addEventListener('submit', function (e) {
        // prevent the form from submitting
        e.preventDefault();

        // validate fields
        let isUsernameValid = checkUsername(),
            isEmailValid = checkEmail(),
            isPasswordValid = checkPassword(),
            isConfirmPasswordValid = checkConfirmPassword();

        let isFormValid = isUsernameValid &&
            isEmailValid &&
            isPasswordValid &&
            isConfirmPasswordValid;

        // submit to the server if the form is valid
        if (isFormValid) {

        }
    });


    const debounce = (fn, delay = 500) => {
        let timeoutId;
        return (...args) => {
            // cancel the previous timer
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            // setup a new timer
            timeoutId = setTimeout(() => {
                fn.apply(null, args)
            }, delay);
        };
    };

    form.addEventListener('input', debounce(function (e) {
        switch (e.target.id) {
            case 'username':
                checkUsername();
                break;
            case 'email':
                checkEmail();
                break;
            case 'password':
                checkPassword();
                break;
            case 'confirm-password':
                checkConfirmPassword();
                break;
        }
    }));
}
