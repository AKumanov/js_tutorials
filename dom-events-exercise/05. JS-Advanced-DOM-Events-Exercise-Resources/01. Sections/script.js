function create(input) {
   let parentElement = document.getElementById('content');
   for (let word of input) {
      let divElement = document.createElement('div');
      let parElement = document.createElement('p');
      parElement.style.display = 'none';
      parElement.textContent = word;
      divElement.appendChild(parElement);
      divElement.addEventListener('click', (e) => {
         e.target.childNodes[0].style.display = 'inline-block';
      })
      parentElement.appendChild(divElement);
   }
}
