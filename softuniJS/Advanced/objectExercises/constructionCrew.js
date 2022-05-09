const worker = {
    weight: 80,
    experience: 5,
    levelOfHydrated: 100,
    dizziness: false,
};

function workerCare(worker) {
    if (worker.dizziness) {
        const amountOfWater = 0.1 * worker.weight * worker.experience;
        worker.levelOfHydrated += amountOfWater;
        worker.dizziness = false;
    }

    return worker;
}


console.log(workerCare(worker));