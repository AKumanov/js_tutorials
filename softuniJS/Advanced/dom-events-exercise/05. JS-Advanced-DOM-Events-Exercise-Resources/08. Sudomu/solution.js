function solve() {
  let [checkBtn, clearBtn] = document.querySelectorAll("button");
  console.log(checkBtn);
  console.log(clearBtn);

  clearBtn.addEventListener("click", (e) => {
      location.reload();
    
  });

  checkBtn.addEventListener("click", (e) => {
    let matrix = createMatrix();
    let isFilled = checkAllPositions(matrix);
    let isCorrect = isNumValid(matrix);
    let horizontalRule = checkHorizontals(matrix);
    let verticalRule = checkVerticals(matrix);
    let table = document.querySelector("table");
    let resultItem = document.querySelector("#check p");
    console.log(resultItem);
    if (isFilled == true && horizontalRule == true && verticalRule == true && isCorrect == true) {
      table.style.border = "2px solid green";
      resultItem.textContent = "You solve it! Congratulations!";
      resultItem.style.color = "green";
    } else {
      table.style.border = "2px solid red";
      resultItem.textContent = "NOP! You are not done yet...";
      resultItem.style.color = "red";
    }
  });

  // TODO: check if all positions are filled
  function checkAllPositions(matrix) {
    let result = true;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (matrix[i][j] == 0) {
          result = false;
        }
      }
    }
    return result;
  }

  // TODO: check horizontals
  function checkHorizontals(matrix) {
    let result = true;
    for (let i = 0; i < matrix.length; i++) {
      if (
        matrix[i][0] == matrix[i][1] ||
        matrix[i][0] == matrix[i][2] ||
        matrix[i][1] == matrix[i][2]
      ) {
        result = false;
      }
    }
    return result;
  }

  // TODO: check verticals
  function checkVerticals(matrix) {
    let result = true;
    for (let i = 0; i < matrix.length; i++) {
      if (
        matrix[0][i] == matrix[1][i] ||
        matrix[0][i] == matrix[2][i] ||
        matrix[1][i] == matrix[2][i]
      ) {
        result = false;
      }
    }
    return result;
  }


  function isNumValid(matrix) {
    let result = true;
    for (i=0; i<matrix.length; i++) {
        for (j=0; j<matrix.length; j++) {
            if (matrix[i][j] > 3 || matrix[i][j] < 1) {
                result = false;
            }
        }
    }
    return result;
  }


  function createMatrix() {
    let table = Array.from(document.querySelectorAll('input[type="number"]'));
    let numbers = [];
    for (let item of table) {
      numbers.push(Number(item.value));
    }
    let row0 = numbers.slice(0, 3);
    let row1 = numbers.slice(3, 6);
    let row2 = numbers.slice(6, 9);

    let matrix = [];
    matrix.push(row0);
    matrix.push(row1);
    matrix.push(row2);

    return matrix;
  }
}
