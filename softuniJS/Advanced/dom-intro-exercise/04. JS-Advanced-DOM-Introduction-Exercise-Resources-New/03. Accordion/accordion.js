function toggle() {
    const moreBtn = document.getElementsByClassName("button")[0];
    textArea = document.querySelector("#extra");

    if (moreBtn.textContent === "More") {
        textArea.style.display = "block";
        moreBtn.textContent = "Less";
    } else {
        textArea.style.display = "none";
        moreBtn.textContent = "More";
    }

}