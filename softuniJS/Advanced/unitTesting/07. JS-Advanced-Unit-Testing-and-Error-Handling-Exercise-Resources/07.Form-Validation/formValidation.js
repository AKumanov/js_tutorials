function validate() {
    const usernameRegex = /^[a-zA-Z0-9]{3,20}$/
    const emailRegex = /^.*@.*\..*$/;
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const iscompany = document.getElementById('company');
    const companyInfo = document.getElementById('companyInfo')
    const valid = document.getElementById('valid');
    const companyNumber = document.getElementById('companyNumber');


    const submitBtn = document.getElementById('submit');

    function testUsername(username) {
        let isValid = true;
        if (usernameRegex.test(username.value)) {
            username.style.border = 'none';
        } else {
            username.style.borderColor = 'red';
            isValid = false;
        }

        return isValid;
    }

    function testEmail(email) {
        let isValid = true;
        if (emailRegex.test(email.value)) {
            email.style.border = 'none';
        } else {
            email.style.borderColor = 'red';
            isValid = false;
        }
        return isValid;
      }

    function testPassword(password1, password2) {
        let isValid = true
        if(/^[a-z0-9_]+$/i.test(password1.value) && password1.value.length >= 5 && password1.value.length <= 15) {
            password1.style.border = 'none';
            confirmPassword.style.border = 'none';
        } else {
            password1.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
            isValid = false;
        }

        if(/^[a-z0-9_]+$/i.test(password2.value) && password2.value.length >= 5 && password2.value.length <= 15) {
            password1.style.border = 'none';
            confirmPassword.style.border = 'none';
        } else {
            password1.style.borderColor = 'red';
            password2.style.borderColor = 'red';
            isValid = false;
        }

        if (password1.value !== password2.value) {
            password1.style.borderColor = 'red';
            password2.style.borderColor = 'red';
            isValid = false;
        }
        return isValid;
    }

    function companyHandler() {
        if (companyInfo.style.display === 'block') {
            companyInfo.style.display = 'none';
        } else {
            companyInfo.style.display = 'block';

        }
    }

    iscompany.addEventListener('change', companyHandler)

    function testCompanyNumber(companyNumber) {
        let isValid = true;
        if (companyNumber.value >= 1000 && companyNumber.value <= 9999) {
            companyNumber.style.border = 'none'
        } else {
            companyNumber.style.borderColor = 'red';
            isValid = false; 
        }

        return isValid;
    }

    const submitHandler = (e) => {
        e.preventDefault();

        // test username
        const usernameIsValid = testUsername(username);
       
        // test email
        const emailIsValid = testEmail(email);

        // test password
        const passwordIsValid = testPassword(password, confirmPassword);

        const companyIsValid = testCompanyNumber(companyNumber);

        if(iscompany.checked) {
            if (usernameIsValid && emailIsValid && passwordIsValid && companyIsValid ) {
                valid.style.display = 'block'
            } else {
                valid.style.display = 'none';
            }
        } else {
            if (usernameIsValid && emailIsValid && passwordIsValid) {
                valid.style.display = 'block';
            } else {
                valid.style.display = 'none';
            }
        }

    }

    submitBtn.addEventListener('click', submitHandler);
}
