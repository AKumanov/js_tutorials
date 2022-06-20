function validate() {
  const emailElement = document.getElementById("email");

  emailElement.addEventListener("change", validateEmail);

  function validateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailElement.value)) {
        emailElement.classList.remove('error');
    } else {
        emailElement.classList.add('error');
    }
  }
}
