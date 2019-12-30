const makeNumber = (string) => {
    let arrStr = string.split('');
    let newString = '';

    for (let i = 0; i < arrStr.length; i++ ) {
        if ( !isNaN(+arrStr[i]) && arrStr[i] !== " " ) {
            newString += +arrStr[i]
        }
    }
    return newString
};

const countNumbers = (string) => {
    const objCountNumber = {};
    const number = makeNumber(string).split('');

    for (let i = 0; i < number.length; i++ ) {
        if (objCountNumber[number[i]]) {
            objCountNumber[number[i]] = ++objCountNumber[number[i]]
        } else {
            objCountNumber[number[i]] = 1
        }
    }
    return objCountNumber;
};

countNumbers('jdjjka000466588kkkfs662555');