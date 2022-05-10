async function lockedProfile() {
    const url = `http://localhost:3030/jsonstore/advanced/profiles`;
    const response = await fetch(url)
    const container = document.getElementById('container');
    const main = document.querySelector('#main');

    try {
        main.innerHTML = '';
        if (!response.status === 200) throw new Error('error');
        const data = await response.json();

        for (let temp of Object.entries(data)) {
            const profile = temp[1];
            const profileDivElement = document.createElement('div');
            profileDivElement.classList.add('profile');
            profileDivElement.innerHTML = `
            <img src="./iconProfile2.png" class="userIcon"/>
            <label>Lock</label>
            <input type="radio" name="user1Locked" value="lock" checked>
            <label>Unlock</label>
            <input type="radio" name="user1Locked" value="unlock"><br>
            <hr>
            <label>Username</label>
            <input type="text" name="user1Username" value="${profile.username}" disabled readonly/>
            <div class="hiddenInfo" id="user1HiddenFields">
                <hr>
                <label>Email:</label>
                <input type="email" name="user1Email" value="${profile.email}" disabled readonly/>
                <label>Age:</label>
                <input type="email" name="user1Age" value="${profile.age}" disabled readonly/>
            </div>
            <button>Show more</button>`;
            main.appendChild(profileDivElement);
        }



    } catch (error) {
        console.log(error);
    }



    const allBtns = document.querySelectorAll('button');
    for(let button of allBtns) {
        button.addEventListener('click', (e) => {
            if(!e.target.parentElement.querySelector('input[value="unlock"]').checked) {
                if(e.target.textContent === 'Show more') {
                    e.target.parentElement.querySelector('#user1HiddenFields').classList.remove('hiddenInfo');
                    e.target.textContent = 'Hide it';

                } else {
                    e.target.parentElement.querySelector('#user1HiddenFields').classList.add('hiddenInfo');
                    e.target.textContent = 'Show more';
                }
            }
        })
    }
}