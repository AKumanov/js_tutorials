export const formValidator = (formData) => {
    let result = true;

    formData.forEach((element) => {
        if (!element) {
            result = false;
        }
    });

    return result;
}

export const passwordValidator = (pass1, pass2) => {
    return pass1 === pass2;
}