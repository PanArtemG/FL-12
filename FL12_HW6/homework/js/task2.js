let a = prompt('Enter value side A:');
let b = prompt('Enter value side B:');
let c = prompt('Enter value side C:');

let checkInputValues = isNaN(+a) && a !== '' || isNaN(+b) && b !== '' || isNaN(+c) && c !== '';

if (checkInputValues) {
    alert('input values should be ONLY numbers')
} else {
    if (!(+a < (+b + +c) && +b < (+a + +c) && +c < (+a + +b))) {
        alert("Triangle doesn’t exist");
    } else if (a === b && a === c) {
        console.log('Equilateral triangle');
    } else if (a === b && a !== c || b === c && b !== a) {
        console.log('Isosceles triangle')
    } else {
        console.log('Scalene triangle');
    }
}