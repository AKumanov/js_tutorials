window.addEventListener("load", solve);

function solve() {
  //make, model, year, fuel, original-cost, selling-price
  const publishButton = document.getElementById('publish');
  const tableBody = document.getElementById('table-body'); 
  const ulElement = document.getElementById('cars-list');
  const profitElement = document.getElementById('profit');


  const input = {
    makeElement: document.getElementById('make'),
    modelElement: document.getElementById('model'),
    yearElement: document.getElementById('year'),
    fuelElement: document.getElementById('fuel'),
    originalCostElement: document.getElementById('original-cost'),
    sellingPriceElement: document.getElementById('selling-price'),

  };

  function handlePublishEvent(e) {
    e.preventDefault();
    
    const make = input.makeElement.value;
    const model = input.modelElement.value;
    const year = input.yearElement.value;
    const fuel = input.fuelElement.value;
    const originalPrice = input.originalCostElement.value;
    const sellingPrice = input.sellingPriceElement.value;
    
    // console.log(make, model, year, fuel, originalPrice, sellingPrice);

    if(!make || !model || !year || !fuel || !originalPrice || !sellingPrice || originalPrice > sellingPrice) return;

    const trElement = createElement('tr', '', 'row');

    [make, model, year, fuel, originalPrice, sellingPrice].forEach((element) => {
      const newElement = createElement('td', element);
      trElement.appendChild(newElement);
    })

    const editButton = createElement('button', 'Edit', 'action-btn edit');
    const sellButton = createElement('button', 'Sell', 'action-btn sell');

    const tdButtons = createElement('td', '', '');
    tdButtons.appendChild(editButton);
    tdButtons.appendChild(sellButton);
    trElement.appendChild(tdButtons);

    tableBody.appendChild(trElement);

    for (const key in input) {
      input[key].value = '';
    }

    const editBtn = trElement.querySelector('.edit');
    const sellBtn = trElement.querySelector('.sell');

    editBtn.addEventListener('click', handleEditEvent);
    sellBtn.addEventListener('click', handleSellEvent);


    function handleEditEvent(e) {
    input.makeElement.value = make
    input.modelElement.value = model
    input.yearElement.value = year
    input.fuelElement.value = fuel
    input.originalCostElement.value = originalPrice
    input.sellingPriceElement.value = sellingPrice

    trElement.remove();

    }

    function handleSellEvent(e) {
      const liElement = createElement('li', '', 'each-list');
      const firstSpanElement = createElement('span', `${make} ${model}`, '');
      const secondSpanElement = createElement('span', year, '');
      const thirdSpanElement = createElement('span', `${sellingPrice - originalPrice}`, '');

      liElement.appendChild(firstSpanElement);
      liElement.appendChild(secondSpanElement);
      liElement.appendChild(thirdSpanElement);
      ulElement.appendChild(liElement);
      trElement.remove();

      
     const currentProfit = Number(profitElement.textContent) + Number(sellingPrice - originalPrice);
     profitElement.textContent = currentProfit.toFixed(2);

    }


    function createElement(tagName, textContent, className) {
      const newElement = document.createElement(tagName);
      newElement.textContent = textContent;
      if(className) {
        newElement.className = className;
      }
      return newElement;
    }

  }

  publishButton.addEventListener('click', handlePublishEvent);
}
