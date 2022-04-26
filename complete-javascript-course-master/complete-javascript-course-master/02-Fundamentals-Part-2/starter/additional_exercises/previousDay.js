function previousDay(year, month, day) {
    if (month == 1 && day == 1) {
        return `${year - 1}-12-30`;
    } else if (day == 1) {
        return `${year}-${month - 1}-30`;
    } else {
        return `${year}-${month}-${day - 1}`;
    }
}


console.log(previousDay(2016, 1, 1));
