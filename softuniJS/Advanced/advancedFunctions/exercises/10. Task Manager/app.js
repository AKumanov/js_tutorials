function solve() {
   const input = {
    task: document.getElementById('task'),
    description: document.getElementById('description'),
    date: document.getElementById('date'),
   }

   const [_, openSection, inProgressSection, completeSection] = document.getElementsByTagName('section');

   document.getElementById('add').addEventListener('click', onAdd);

   function onAdd(e) {
    e.preventDefault();

    if (!input.task.value || !input.description.value || !input.date.value) return;

    const article = createElement('article', '', '');
    article.appendChild(createElement('h3', input.task.value, ''));
    article.appendChild(createElement('p', `Description: ${input.description.value}`, ''));
    article.appendChild(createElement('p', `Due Date: ${input.date.value}`, ''));

    const startButton = createElement('button', 'Start', 'green');
    const deleteButton = createElement('button', 'Delete', 'red');
    const finishButton = createElement('button', 'Finish', 'orange');

    const buttonWrapper = createElement('div', '', 'flex');
    buttonWrapper.appendChild(startButton);
    buttonWrapper.appendChild(deleteButton);

    article.appendChild(buttonWrapper);

    input.task.value = '';
    input.description.value = '';
    input.date.value = '';
   
    openSection.childNodes[3].appendChild(article);

    const handleStart = (e) => {
        e.preventDefault();
        startButton.remove();
        buttonWrapper.appendChild(finishButton);
        inProgressSection.childNodes[3].appendChild(article);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        article.remove();
    }

    const handleFinish = (e) => {
        e.preventDefault();
        completeSection.childNodes[3].appendChild(article);
        buttonWrapper.remove();
    }

    finishButton.addEventListener('click', handleFinish)

    startButton.addEventListener('click', handleStart)

    deleteButton.addEventListener('click', handleDelete);

    function createElement(tagName, textContent, className) {
        const element = document.createElement(tagName);
        element.textContent = textContent;
        if (className) {
            element.className = className;
        }

        return element;
        }

   }

}