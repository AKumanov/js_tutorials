function timeToWalk(numberOfSteps, lengthOfStep, speed) {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let distanceInMeters = lengthOfStep * numberOfSteps;
    let numberOfBreaks = Math.floor(distanceInMeters / 500);


    let distanceInKm = distanceInMeters / 1000;

    let timeInHours = distanceInKm / speed;
    let timeInMinutes = ((timeInHours * 60) + numberOfBreaks);
    let secondsLeft = timeInMinutes - Math.floor(timeInMinutes);
    if (timeInMinutes < 60) {
        minutes = Math.floor(timeInMinutes);
        seconds = Math.floor((timeInMinutes - Math.floor(timeInMinutes)) * 60);
    }
    let result = `0${hours}:${minutes}:${(timeInMinutes - Math.floor(timeInMinutes) < 0.50 ? seconds : seconds + 1)}`;
    return result;
}

console.log(timeToWalk(4000, 0.60, 5));
console.log(timeToWalk(2564, 0.70, 5.5));