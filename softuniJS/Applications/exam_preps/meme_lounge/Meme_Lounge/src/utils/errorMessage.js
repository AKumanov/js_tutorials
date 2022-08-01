export const showErrorMessage = (element, message) => {
    element.textContent = message;
    element.parentElement.style.display = 'block';
    setTimeout(() => {
        element.parentElement.style.display = 'none';
    }, 3000);
}