const isLeapYear = (date) => {
    const year = new Date(date).getFullYear();
    let answer = null;
    if (year) {
        if (!(new Date(year, 1, 29).getMonth() - 1)) {
            answer =`${year} is a leap year`
        } else {
            answer = `${year} is not a leap year`
        }
    } else if (isNaN(year) ) {
        answer = 'Invalid Date'
    }
    return answer
};
isLeapYear(1213131313);