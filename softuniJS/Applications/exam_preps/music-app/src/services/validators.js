export const validateForm = (formData) => {
    let result = true;
    formData.forEach((input) => {
        if (!input) {
            result = false;  
        } 
    })

    return result

}