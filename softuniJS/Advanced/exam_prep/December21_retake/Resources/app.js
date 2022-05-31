window.addEventListener("load", solve);

function solve() {
  const clearBtn = document.querySelector(".clear-btn");
  const description = document.querySelector("#description");
  const completedOrdersElement = document.querySelector("#completed-orders");
  const startBtn = document.createElement("button");
  startBtn.classList.add("start-btn");
  startBtn.textContent = "Start repair";
  const finishBtn = document.createElement("button");
  finishBtn.classList.add("finish-btn");
  finishBtn.textContent = "Finish repair";
  finishBtn.disabled = true;

  const clearInputFormValue = (arr) => {
    for (let el of arr) {
      el.value = "";
    }
  };

  const handleClickEvent = (e) => {
    for (let cont of document.querySelectorAll(".container")) {
      completedOrdersElement.removeChild(cont);
    }
  };

  const handleFinishEvent = (e) => {
    let containerElement = document.querySelector(".container");
    containerElement.removeChild(startBtn);
    containerElement.removeChild(finishBtn);
    completedOrdersElement.appendChild(containerElement);
    startBtn.disabled = false;
    finishBtn.disabled = true;
  };

  const handleStartEvent = (e) => {
    startBtn.disabled = true;
    finishBtn.disabled = false;
  };

  const handleForm = (e) => {
    e.preventDefault();
    const dataContainer = document.createElement("div");
    const receivedOrdersElement = document.querySelector("#received-orders");
    dataContainer.classList.add("container");
    const productType = e.target["type-product"];
    const clientName = e.target["client-name"];
    const clientPhone = e.target["client-phone"];
    if (
      !productType.value ||
      !clientName.value ||
      !clientPhone.value ||
      !description.value ||
      !productType.value === "Computer" ||
      !productType.value === "Phone"
    )
      return;

    dataContainer.innerHTML = `
            <h2>Product type for repair: ${productType.value}</h2>
            <h3>Client information: ${clientName.value}, ${clientPhone.value}</h3>
            <h4>Description of the problem: ${description.value}</h4>
        `;
    dataContainer.appendChild(startBtn);
    dataContainer.appendChild(finishBtn);

    receivedOrdersElement.appendChild(dataContainer);

    clearInputFormValue([productType, clientName, clientPhone, description]);
  };

  const form = document.querySelector("form");
  form.addEventListener("submit", handleForm);
  startBtn.addEventListener("click", handleStartEvent);
  finishBtn.addEventListener("click", handleFinishEvent);

  clearBtn.addEventListener("click", handleClickEvent);
}
