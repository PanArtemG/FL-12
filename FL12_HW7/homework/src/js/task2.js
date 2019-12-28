let userConfirm = confirm('Do you want to play a game?');
let prize = null;
let possiblePrizeFirstTry = 100;
let possiblePrizeSecondTry = 50;
let possiblePrizeThreeTry = 25;
let attempts = null;
let minNumber = 0;
let maxNumber = 8;

while (userConfirm) {
    attempts = 3;
    let randomNumber = Math.ceil(Math.random() * (Math.floor(maxNumber) - Math.ceil(minNumber)) + Math.ceil(minNumber));
    console.log(randomNumber);
    let userNumber = +prompt
    (`Choose a roulette pocket number from ${minNumber} to ${maxNumber} \n
                Attempts left: ${attempts} \n
                Total prize: ${prize} \n
                Possible prize on current attempt: ${possiblePrizeFirstTry}$`,
        '0');
    if (userNumber === randomNumber) {
        prize += possiblePrizeFirstTry;
        userConfirm = confirm(`Congratulation, you won!   Your prize is: ${prize}$. Do you want to continue?`);
        if (userConfirm) {
            maxNumber += 4;
            possiblePrizeFirstTry += possiblePrizeFirstTry;
            possiblePrizeSecondTry += possiblePrizeSecondTry;
            possiblePrizeThreeTry += possiblePrizeThreeTry;
        } else {
            alert(`Thank you for your participation. Your prize is: ${prize}$`);
        }
    } else {
        attempts -= 1;
        userNumber = +prompt
        (`Choose a roulette pocket number from ${minNumber} to ${maxNumber} \n
                Attempts left: ${attempts} \n
                Total prize: ${prize} \n
                Possible prize on current attempt: ${possiblePrizeSecondTry}$`,
            '0');

        if (userNumber === randomNumber) {
            prize += possiblePrizeSecondTry;
            userConfirm = confirm(`Congratulation, you won!   Your prize is: ${prize}$. Do you want to continue?`);
            if (userConfirm) {
                maxNumber += 4;
                possiblePrizeFirstTry += possiblePrizeFirstTry;
                possiblePrizeSecondTry += possiblePrizeSecondTry;
                possiblePrizeThreeTry += possiblePrizeThreeTry;
            } else {
                alert(`Thank you for your participation. Your prize is: ${prize}$`);
            }
        } else {
            attempts -= 1;
            userNumber = +prompt
            (`Choose a roulette pocket number from ${minNumber} to ${maxNumber} \n
                Attempts left: ${attempts} \n
                Total prize: ${prize} \n
                Possible prize on current attempt: ${possiblePrizeThreeTry}$`,
                '0');

            if (userNumber === randomNumber) {
                prize += possiblePrizeThreeTry;
                userConfirm = confirm(`Congratulation, you won!   Your prize is: ${prize}$. Do you want to continue?`);
                if (userConfirm) {
                    maxNumber += 4;
                    possiblePrizeFirstTry += possiblePrizeFirstTry;
                    possiblePrizeSecondTry += possiblePrizeSecondTry;
                    possiblePrizeThreeTry += possiblePrizeThreeTry;
                } else {
                    alert(`Thank you for your participation. Your prize is: ${prize}$`);
                }
            } else {
                prize = 0;
                maxNumber = 8;
                possiblePrizeFirstTry = 100;
                possiblePrizeSecondTry = 50;
                possiblePrizeThreeTry = 25;
                alert(`Thank you for your participation. Your prize is: ${prize}$`);
                userConfirm = confirm('Do you want to play the game again?')
            }
        }
    }
}

alert('You did not become a billionaire, but can.');
