const convert = (...arg) => {
    const arrConvertArg = [];
    for (let i = 0; i < arg.length; i++) {
        typeof arg[i] === 'string' ? arrConvertArg.push(+arg[i]) : arrConvertArg.push(arg[i] + '');
    }
    return arrConvertArg
};

const executeforEach = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
};

const mapArray = (arr, func) => {
    let transformArr = [];
    executeforEach(arr, el => transformArr.push(func(+el)));
    return transformArr;
};

const filterArray = (arr, func) => {
    let transformArr = [];
    let i = 0;
    executeforEach(arr, (el) => {
        if (func(el)) {
            transformArr.push(arr[i]);
            i++
        } else {
            i++
        }
    });
    return transformArr
};

const flipOver = str => {
    let flipOverString = '';
    for (let l = str.length - 1; l >= 0; l--) {
        flipOverString += str[l]
    }
    return flipOverString
};

const makeListFromRange = arr => {
    const listRange = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
        listRange.push(i)
    }
    return listRange;
};

const actors = [
    {name: 'tommy', age: 36},
    {name: 'lee', age: 28}
];
const getArrayOfKeys = (arr, key) => {
    const name = [];
    executeforEach(arr, (el) => name.push(el[key]));
    return name
};

const substitute = arr => {
    let transformArr = [];
    mapArray(arr, el => el <= 30 ? transformArr.push('*') : transformArr.push(el));
    return transformArr
};

const date = new Date(2019, 0, 2);
const getPastDay = (date, day) => {
    const dayInMs = 86400000;
    const convertDayInMs = day * dayInMs;

    return new Date(date.getTime() - convertDayInMs).getDate()
};

const formatDate = date => {
    const objData = {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear()
    };
    return `${objData.year}/${objData.month}/${objData.day}`
};