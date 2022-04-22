function solve() {
  let wrapper = document.querySelector('.wrapper')

  let textArea = document.querySelectorAll('#exercise textarea')[0];
  let finalTextArea = document.querySelectorAll('#exercise textarea')[1];
  let generateBtn = document.querySelectorAll('#exercise button')[0];
  generateBtn.addEventListener('click', saveData);
  let buyBtn = document.querySelectorAll('button')[1];
  buyBtn.addEventListener('click', buyItem)
  let items = [];
  let totalPrice = 0;
  let decorationFactor = 0;
  let numberOfItems = 0;
  let finalString = 'Bought furniture: ';

  function buyItem() {
    let tableRow = Array.from(document.querySelectorAll('tr'));
    for (let row of tableRow) {
      let input = row.querySelector('input[type="checkbox"]');
      if (input) {
        if (input.checked) {
          let name = row.children[1].querySelector('p').textContent;
          items.push(name);
          totalPrice += Number(row.children[2].querySelector('p').textContent);
          numberOfItems += 1
          decorationFactor += Number(row.children[3].querySelector('p').textContent);
        }
      }
      
    }
    finalString += items.join(', ');
    finalString += '\n';
    finalString += `Total price: ${totalPrice.toFixed(2)}`;
    finalString += '\n'
    finalString += `Average decoration factor: ${decorationFactor / numberOfItems}`;
    finalTextArea.textContent = finalString;
    
     
  };

  function saveData() {
    let inputArray = JSON.parse(textArea.value);
    for (let obj of inputArray) {
      let element = `
        <tr>
          <td><img src=${obj.img}></td>
          <td><p>${obj.name}</p></td>
          <td><p>${obj.price}</p></td>
          <td><p>${obj.decFactor}</p></td>
          <td><input type="checkbox"></td>
        </tr>
      `;
      let tableObject = document.querySelector('.table tbody');
      tableObject.innerHTML += element;
      
      
    }    
  }

}
