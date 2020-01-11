const convert = (...arg) => {
    const arrConvertArg = [];
    for (let i = 0; i < arg.length; i++)
        (typeof (arg[i]) === 'string') ? arrConvertArg.push(+arg[i]) : arrConvertArg.push(arg[i] + '');
    return arrConvertArg
};
// convert('1', 2, 3, '4');

//2
const executeforEach = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
};
// executeforEach([1,2,3], function first(el) {console.log(el * 2)});

//3
const mapArray = (arr, func) => {
    let transformArr = [];
    executeforEach(arr, el => transformArr.push(func(+el)));
    return transformArr;
};
// mapArray([2, '5', 8], function (el) {return el + 3}); // returns [5, 8, 11]

//4
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
// console.log(filterArray([2, 5, 8, 10, 11], function (el) {return el % 2 === 0})); // возвращает [2, 8]

//5
const flipOver = (str) => {
    let flipOverString = '';
    for (let l = str.length - 1; l >= 0; l--) {
        flipOverString += str[l]
    }
    return flipOverString
};
// console.log(flipOver('hey world'));

//6
const makeListFromRange = (arr) => {
    const listRange = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
        listRange.push(i)
    }
    return listRange;
};
// console.log(makeListFromRange([5, 7]));

//7
const actors = [
    {name: 'tommy', age: 36},
    {name: 'lee', age: 28}
];
const getArrayOfKeys = (arr, key) => {
    const name = [];
    executeforEach(arr, (el) => name.push(el[key]));
    return name
};
// console.log(getArrayOfKeys(actors, 'name')); // [‘tommy’, ‘lee’]

//8
const substitute = (arr) => {
    let transformArr = [];
    mapArray(arr, el => (el <= 30) ? transformArr.push('*') : transformArr.push(el));
    return transformArr
};
// console.log(substitute([58, 14, 48, 2, 31, 29, 2,4,111])); // [58, '*', 48, '*', 31, '*']
