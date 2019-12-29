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

makeNumber('ijifjgdj');