export const formValidator = (formData) => {
    let result = true;
    formData.forEach((input) => {
        if(!input) {
            result = false;
        }
    })
    return result;
}