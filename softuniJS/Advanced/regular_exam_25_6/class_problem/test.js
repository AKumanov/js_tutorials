const tempObj = {
    rila: 3300,
    botev: 1800,
    rodopi: 2500,
}

const tempArr = [
    {
        peak: 'Musala',
        time: 3,
        difficultyLevel: "hard"
    },
    {
        peak: 'Rui',
        time: 1,
        difficultyLevel: "easy"
    },
    {
        peak: 'Everest',
        time: 10,
        difficultyLevel: "hard"
    },
]
const criteria = "hard"
const hardPeaks = tempArr.filter((peak) => peak.difficultyLevel === criteria);
console.log(hardPeaks);