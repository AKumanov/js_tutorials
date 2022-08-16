export const formValidator = (formData) => {
    let result = true;

    formData.forEach((input) => {
        if (!input) {
            result = false;
        }
    })
    return result;
}

export const passwordValidator = (password1, password2) => {
    return password1 === password2;
}