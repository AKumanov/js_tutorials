let button = document.getElementsByTagName('button')[0];

button.addEventListener('click', () => {
    let heading = document.getElementById('title')
    heading.classList.toggle('hidden');
})