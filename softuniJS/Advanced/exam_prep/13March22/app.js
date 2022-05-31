function solve() {
    const recipientNameElement = document.querySelector("#recipientName");
    const titleElement = document.querySelector("#title");
    const messageElement = document.querySelector("#message");
    const addBtn = document.querySelector("#add");
    const resetBtn = document.querySelector("#reset");
    const listElement = document.querySelector(".list-mails > ul");
    const sendBtn = document.createElement("button");
    sendBtn.setAttribute("id", "send");
    sendBtn.textContent = "Send";
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", "delete");
    deleteBtn.textContent = "Delete";
    const listActionElement = document.createElement("div");
    listActionElement.setAttribute("id", "list-action");
    const liEl = document.createElement("li");
    const newLi = document.createElement("li");
    const newDelBtn = document.createElement("button");
    newDelBtn.textContent = "Delete";
    const sentMailsElement = document.querySelector(".sent-mails > ul");
    console.log(sentMailsElement);
    const trashElement = document.querySelector(".trash > ul");



    const handleAddEvent = (e) => {
        e.preventDefault();
        if (!recipientNameElement.value || !titleElement.value || !messageElement.value) return;
        console.log(listElement);
        liEl.innerHTML = `
            <h4>Title: ${titleElement.value}</h4>
            <h4>Recipient Name: ${recipientNameElement.value}</h4>
            <span>${messageElement.value}</span>
        `;
        listActionElement.appendChild(sendBtn);
        listActionElement.appendChild(deleteBtn);
        liEl.appendChild(listActionElement);
        listElement.appendChild(liEl);

        recipientNameElement.value = "";
        titleElement.value = "";
        messageElement.value = "";

    }   

    const handleResetEvent = (e) => {
        e.preventDefault();
        recipientNameElement.value = "";
        titleElement.value = "";
        messageElement.value = "";
    }

    const handleSendEvent = (e) => {
        e.preventDefault();
        let to = liEl.children[1].textContent.split(": ")[1];
        let title = liEl.children[0].textContent.split(": ")[1];
        newLi.innerHTML = `
            <span>To: ${to}</span>
            <span>Title: ${title}</span>
        `;
        const divElement = document.createElement("div");
        divElement.classList.add("btn");
        divElement.appendChild(newDelBtn);
        newLi.appendChild(divElement);
        sentMailsElement.appendChild(newLi);
        // listElement.innerHTML = "";
    }

    const handleDeleteEvent = (e) => {
        e.preventDefault();
        console.log(newLi.children)
        sentMailsElement.removeChild(newLi);
        let to = newLi.children[0].textContent.split(": ")[1];
        let title = newLi.children[1].textContent.split(": ")[1];
        newLi.innerHTML = `
            <span>To: ${to}</span>
            <span>Title: ${title}</span>
        `;
        trashElement.appendChild(newLi);

    }

    addBtn.addEventListener("click", handleAddEvent);
    resetBtn.addEventListener("click", handleResetEvent);
    sendBtn.addEventListener("click", handleSendEvent);
    newDelBtn.addEventListener("click", handleDeleteEvent);
};
solve();