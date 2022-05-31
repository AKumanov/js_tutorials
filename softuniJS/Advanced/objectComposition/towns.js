const inputOne = [
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
]

const inputTwo = [
    '| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'

]


function towns(args) {
    let result = []
    for (let i=1; i<args.length; i++) {
        let [town, latitude, longitude] = args[i].split(" | ");
        town = town.split("| ")[1]
        latitude = Number(latitude).toFixed(2)
        longitude = Number(longitude.split(" ")[0]).toFixed(2)
        result.push({
            Town: town,
            Latitude: parseFloat(latitude),
            Longitude: parseFloat(longitude),
        })
    }
    return(JSON.stringify(result));
}

console.log(towns(inputTwo));