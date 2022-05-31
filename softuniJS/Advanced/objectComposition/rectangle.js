function rectangle(width, height, color) {
    const str = color;
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    const rectagle = {
        width: Number(width),
        height: Number(height),
        color: str2,
        calcArea: () => {
            return width * height
        }
    }
    return rectagle
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());