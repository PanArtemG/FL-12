const addOne = (x) => x+1;

const pipe = (...arrArguments) => {
    let number = arrArguments[0];
    for (let i = 1; i < arrArguments.length; i++){
        number = arrArguments[i](number);
        console.log(number);
    }
    return number

};

pipe(1, addOne, addOne, addOne);