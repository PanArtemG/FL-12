const convert = (...arg) => {
    const arrConvertArg = [];
    for (let i = 0; i < arg.length; i++)
        (typeof (arg[i]) === 'string') ? arrConvertArg.push(+arg[i]) : arrConvertArg.push(arg[i] + '');
    return arrConvertArg
};

// convert('1', 2, 3, '4');

const executeforEach = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
};
// executeforEach([1,2,3], function first(el) {console.log(el * 2)});

function mapArray(arr, func) {
    let transformArr = [];
    executeforEach(arr, (el) => {
        transformArr.push(func(+el));
    });
    return transformArr;
}
console.log(mapArray([2, '5', 8], function (el) {return el + 3}));

// const filterArray = (arr, func) => {
//     executeforEach(arr, func)
// };
// filterArray ([2, 5, 8], function (el) {
//     console.log(el % 2 === 0);}) // возвращает [2, 8]

const flipOver = (str) => {
    let flipOverString = '';
    for (let l = str.length - 1; l >= 0; l--) {
        flipOverString += str[l]
    }
    return flipOverString
};
// flipOver('hey world');

const makeListFromRange = (arr) => {
    const newArr = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
        newArr.push(i)
    }
    return newArr;
};
// makeListFromRange ([2, 7]);

const actors = [
    {name: 'tommy', age: 36},
    {name: 'lee', age: 28}
];
const getArrayOfKeys = (arr,) => {

};
getArrayOfKeys(actors, 'name'); // [‘tommy’, ‘lee’]