function solve() {
    const hireButton = document.getElementById('add-worker');
    const tableBody = document.getElementById('tbody');
    const totalSum = document.getElementById('sum');

    function updateTotalSum(action, salaryValue) {
        let currentAmount = Number(totalSum.textContent);
        if (action === '-') {
            totalSum.textContent = (currentAmount - salaryValue).toFixed(2);
        } else {
            totalSum.textContent = (currentAmount + salaryValue).toFixed(2);
        }

    }

    const input = {
        firstName: document.getElementById('fname'),
        lastName: document.getElementById('lname'),
        email: document.getElementById('email'),
        birth: document.getElementById('birth'),
        position: document.getElementById('position'),
        salary: document.getElementById('salary'),
    }
    function hireWorker(e) {
        e.preventDefault();
        const firstNameValue = input.firstName.value;
        const lastNameValue = input.lastName.value;
        const emailValue = input.email.value;
        const birthValue = input.birth.value;
        const positionValue = input.position.value;
        const salaryValue = Number(input.salary.value);
        
        // check validity of form
        if(!firstNameValue || !lastNameValue || !emailValue || !birthValue || !positionValue || !salaryValue) return

        const tdFName = createElement('td', firstNameValue);
        const tdLName = createElement('td', lastNameValue);
        const tdEmail = createElement('td', emailValue);
        const tdBirth = createElement('td', birthValue);
        const tdPosition = createElement('td', positionValue);
        const tdSalary = createElement('td', salaryValue);

        const firedButton = document.createElement('button')
        firedButton.className = 'fired'
        firedButton.textContent = 'Fired'

        const editButton = document.createElement('button')
        editButton.className = 'edit'
        editButton.textContent = 'Edit'
        

        const trElement = document.createElement('tr');
        trElement.appendChild(tdFName);
        trElement.appendChild(tdLName);
        trElement.appendChild(tdEmail);
        trElement.appendChild(tdBirth);
        trElement.appendChild(tdPosition);
        trElement.appendChild(tdSalary);

        trElement.appendChild(firedButton);
        trElement.appendChild(editButton);

        tableBody.appendChild(trElement);


        for (let key in input) {
            input[key].value = '';
        }

        updateTotalSum('+', salaryValue);

        function createElement(tagName, textContent) {
            const newElement = document.createElement(tagName);
            newElement.textContent = textContent
            return newElement;
        }

        trElement.querySelector('.edit').addEventListener('click', editWorker);
        trElement.querySelector('.fired').addEventListener('click', deleteWorker);


        function editWorker(e) {

        input.firstName.value = firstNameValue
        input.lastName.value = lastNameValue
        input.email.value = emailValue
        input.birth.value = birthValue
        input.position.value = positionValue
        input.salary.value = salaryValue
        trElement.remove();

        updateTotalSum('-', salaryValue);
        }

        function deleteWorker() {
            updateTotalSum('-', salaryValue);
            trElement.remove();
        }
    }

    hireButton.addEventListener('click', hireWorker);

}

solve()