const inputOne = {
    items: [14, 7, 17, 6, 8],
    operator: 'asc',
};

const inputTwo = {
    items: [14, 7, 17, 6, 8],
    operator: 'desc',
};

function sortArray(items, argument) {
    const tempArray = items;
    tempArray.sort((a, b) => {
        return argument === 'asc' ? a - b : b - a;
    })
    return tempArray;
}


console.log(sortArray(inputTwo.items, inputTwo.operator));
