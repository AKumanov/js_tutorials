function search() {
   let matches = 0
   let query = document.getElementById("searchText").value;
   let content = document.querySelectorAll("ul#towns li");
   for (let element of content) {
      element.style.textDecoration = "none";
      element.style.fontWeight = "normal";
      text = element.textContent;
      if (text.match(query)) {
         matches++;
         element.style.fontWeight = "bold";
         element.style.textDecoration = "underline";
      }
   }

   document.getElementById("result").textContent = `${matches} matches found`;
}
