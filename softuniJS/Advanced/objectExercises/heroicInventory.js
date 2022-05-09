const firstInput = ['Isaac / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara'];

function register(input) {
    let inventory = []
    input.forEach(heroItem => {
        let [name, level, heroItems] = heroItem.split(' / ');
        level = Number(level);
        let items = heroItems ? heroItems.split(', ') : [];
        inventory.push({name, level, items});
    })
    return JSON.stringify(inventory);
}

// other way: 

// function register(input) {
//     let inventory = []
//     input.forEach(heroItem => {
//         const currentItem = {}
//         const [heroName, heroLevel, heroItems] = heroItem.split(' / ');
//         let itemsArray = heroItems ? heroItems.split(', ') : [];
//         currentItem.name = heroName;
//         currentItem.level = Number(heroLevel);
//         currentItem.items = itemsArray;
//         inventory.push(currentItem);
//     })
//     return JSON.stringify(inventory);
// }


console.log(register(firstInput));