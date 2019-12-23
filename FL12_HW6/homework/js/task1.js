let a = +prompt("Enter number 'A'");
let b = +prompt("Enter number 'B'");
let c = +prompt("Enter number 'C'");
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('Invalid input data')
} else {
    let D = Math.pow(b, 2) - 4 * a * c;
    if ( D === 0 ) {
        let x = (b * -1) / 2 * a;
        console.log(`x = ${x}`);
    } else if ( D > 0) {
        let x1 = (b * -1) + Math.sqrt(D) / 2 * a;
        let x2 = (b * -1) - Math.sqrt(D) / 2 * a;
        console.log(`x1 = ${x1} & x2 = ${x2}`);
    } else {
            console.log(`Discriminant = ${D} - The quadratic equation has no solution`);
    }
}