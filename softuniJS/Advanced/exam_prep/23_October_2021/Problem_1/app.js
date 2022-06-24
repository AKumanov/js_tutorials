window.addEventListener('load', solve);

function solve() {
    const addBtn = document.getElementById('add-btn');
    const allHitsContainer = document.querySelector('.all-hits-container'); 
    const likes = document.querySelector('.likes').querySelector('p');
    const savedContainer = document.querySelector('.saved-container');

    const input = {
        genreElement: document.getElementById('genre'),
        nameElement: document.getElementById('name'),
        authorElement: document.getElementById('author'),
        dateElement: document.getElementById('date'),
    }

    addBtn.addEventListener('click', handleAddButton)

    function handleAddButton(e) {
        e.preventDefault();
        const genre = input.genreElement.value;
        const name = input.nameElement.value;
        const author = input.authorElement.value;
        const date = input.dateElement.value;
        if(!genre || !name || !author || !date) return;

        const hitsInfo = createElement('div', '', 'hits-info');

        hitsInfo.appendChild(createElement('img', '', ''));
        hitsInfo.appendChild(createElement('h2', `Genre: ${genre}`, ''));
        hitsInfo.appendChild(createElement('h2', `Name: ${name}`), '');
        hitsInfo.appendChild(createElement('h2', `Author: ${author}`), '');
        hitsInfo.appendChild(createElement('h3', `Date: ${date}`, ''));
        hitsInfo.appendChild(createElement('button', 'Save song', 'save-btn'));
        hitsInfo.appendChild(createElement('button', 'Like song', 'like-btn'));
        hitsInfo.appendChild(createElement('button', 'Delete', 'delete-btn'));

        allHitsContainer.appendChild(hitsInfo);

        input.genreElement.value = '';
        input.nameElement.value = '';
        input.authorElement.value = '';
        input.dateElement.value = '';

        // get the buttons individually for every record
        const likeBtn = hitsInfo.querySelector('.like-btn');
        const saveBtn = hitsInfo.querySelector('.save-btn');
        const deleteBtn = hitsInfo.querySelector('.delete-btn');

        likeBtn.addEventListener('click', handleLikeButton);
        saveBtn.addEventListener('click', handleSaveButton);
        deleteBtn.addEventListener('click', handleDeleteButton);


        function handleDeleteButton(e) {
            hitsInfo.remove();
        }

        function handleSaveButton(e) {
            savedContainer.appendChild(hitsInfo);
            saveBtn.remove();
            likeBtn.remove();
        }

        function handleLikeButton(e) {
            let currentLikes = Number(likes.textContent.split(' ')[2]) + 1;
            likes.textContent = `Total Likes: ${currentLikes}`;
            e.target.disabled = true;
        }

        function createElement(tagName, textContent, className) {
            const newElement = document.createElement(tagName);
            if (tagName === 'img') {
                newElement.src = './static/img/img.png';
            } else {
                newElement.textContent = textContent;
                if (className) newElement.className = className;
                
            }
            return newElement;
        }

    }
}