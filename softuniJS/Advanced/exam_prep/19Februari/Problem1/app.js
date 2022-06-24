function solve() {
    const hireButton = document.getElementById('add-worker');
    const tableBody = document.getElementById('tbody');
    const totalSum = document.getElementById('sum');

    const input = {
        firstNameElement:document.getElementById('fname'),
        lastNameElement:document.getElementById('lname'),
        emailElement:document.getElementById('email'),
        birthElement:document.getElementById('birth'),
        positionElement:document.getElementById('position'),
        salaryElement:document.getElementById('salary'),
    }

    function handleHireEvent(e) {
        e.preventDefault();

        const firstName = input.firstNameElement.value;
        const lastName = input.lastNameElement.value;
        const email = input.emailElement.value;
        const birth = input.birthElement.value;
        const position = input.positionElement.value;
        const salary = input.salaryElement.value;

        if(!firstName || !lastName || !email || !birth || !position || !salary) return;

        const trElement = document.createElement('tr');

        [firstName, lastName, email, birth, position, salary].forEach((element) => {
            const newElement = createElement('td', element);
            trElement.appendChild(newElement);
        })

        const firedButton = createElement('button', 'Fired', 'fired');
        const editButton = createElement('button', 'Edit', 'edit');

        trElement.appendChild(firedButton);
        trElement.appendChild(editButton);

        tableBody.appendChild(trElement);

        clearInputFields(input);

        updateBudget(salary, 'add');

        const editBtn = trElement.querySelector('.edit');
        const firedBtn = trElement.querySelector('.fired');

        editBtn.addEventListener('click', handleEdit);
        firedBtn.addEventListener('click', handleFire);

        function handleEdit(e) {
            input.firstNameElement.value = firstName;
            input.lastNameElement.value = lastName;
            input.emailElement.value = email;
            input.birthElement.value = birth;
            input.positionElement.value = position;
            input.salaryElement.value = salary;

            updateBudget(salary, 'subtract');
            trElement.remove();
        }

        function handleFire(e) {
            updateBudget(salary, 'subtract');
            trElement.remove();
        }

        function updateBudget(salary, action) {
            if(action === 'add') {
                const currentSum = Number(totalSum.textContent) + Number(salary);
                totalSum.textContent = currentSum.toFixed(2);
            } else {
                const currentSum = Number(totalSum.textContent) - Number(salary);
                totalSum.textContent = currentSum.toFixed(2);
            }
        }

        function clearInputFields(input) {
            for (let key in input) {
                input[key].value = '';
            }
        }

        function createElement(tagName, textContent, className) {
            const element = document.createElement(tagName);
            if(className) {
                element.className = className;
            }
            element.textContent = textContent;
            return element;
        }

    }

    hireButton.addEventListener('click', handleHireEvent);
    
}
solve()