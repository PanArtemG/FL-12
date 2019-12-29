function getMin () {
    let minNum = arguments[0];
    let quantityArg = arguments.length;

    for ( let i = 0; i < quantityArg; i++) {
        if (arguments[i] < minNum) {
            minNum = arguments[i];
        }
    }
    return minNum
}

getMin(3, 0, -3);