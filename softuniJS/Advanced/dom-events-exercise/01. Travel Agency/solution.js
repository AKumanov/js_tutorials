window.addEventListener('load', solution);

function solution() {
  console.log('TODO: Write the missing functionality!');
  const form = document.getElementById('form');
  // INPUT FIELDS
  const fullName = document.getElementById('fname');
  // console.log(fullName.previousElementSibling.innerHTML);
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const address = document.getElementById('address');
  const code = document.getElementById('code');

  // BUTTONS
  const submitBtn = document.getElementById('submitBTN');
  const editBtn = document.getElementById('editBTN');
  const continueBtn = document.getElementById('continueBTN');


  // PREVIEW UL
  const previewArea = document.getElementById('infoPreview');

  // FUNCTIONS
  const populateEditView = function() {
    if(!fullName.value || !email.value) return;

    const liItems = [];
    liItems.push(
      fullName,
      email,
      phone,
      address,
      code
    );
    liItems.forEach(item => {
      let li = document.createElement('li');
      li.textContent = (`${item.previousElementSibling.textContent} ${item.value}`);
      previewArea.appendChild(li);
    });
    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

    liItems.forEach(item => {
      item.value = null;
    })
  };


  const populateFormView = function() {
    // get info from preview view
    const info = previewArea.childNodes;
    
    const tempObj = {
      fname: info[0].textContent.split(': ')[1],
      email: info[1].textContent.split(': ')[1],  
      phone: info[2].textContent.split(': ')[1],  
      address: info[3].textContent.split(': ')[1],  
      code: info[4].textContent.split(': ')[1],  
    }

    for(let item in tempObj) {
      if(item === 'code') document.querySelector(`#${item}`).value = Number(tempObj[item]);
      document.querySelector(`#${item}`).value = tempObj[item];
    }

    editBtn.disabled = true;
    continueBtn.disabled = true;
    submitBtn.disabled = false;
    previewArea.innerHTML = '';
    
  }


  const continueView = function() {
    const block = document.querySelector('#block');
    block.innerHTML = '';
    const heading = document.createElement('h3');
    heading.textContent = 'Thank you for your reservation!';
    block.appendChild(heading);
  }

  // BUTTON EVENT LISTENERS
  submitBtn.addEventListener('click', populateEditView);
  editBtn.addEventListener('click', populateFormView);
  continueBtn.addEventListener('click', continueView);
};