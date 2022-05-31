function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const searchElements = document.querySelectorAll("tbody tr");
   let query = document.getElementById("searchField");
   function onClick() {
      for (let element of searchElements) {
         element.classList.remove('select');
         if (element.innerHTML.includes(query.value)) {
            element.className = 'select';
         }
      }
   }
}