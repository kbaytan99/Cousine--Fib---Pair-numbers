/*
  * Write a program that, given a number, checks and shows if it is prime, fibonacci and even.
  * Examples:
  * - With the number 2, it will tell us: "2 is prime, fibonacci and even"
  * - With the number 7, it will tell us: "7 is prime, it is not fibonacci and it is odd"
  */


const mainFunction = () => {
    

    const randomNumbersLength = parseInt((Math.random() * 10));

    console.log('Length of the random numbers is: ' + randomNumbersLength);

    for(let i = 0; i < randomNumbersLength; i++){
        // Random Number
        const randomNumber = (Math.random() * 1000).toFixed(0);

        // Wall
        console.log('________________________________________');

        //Random Number Log
        console.log('Selected Random Number: ' + randomNumber);

        // Getting Prime Number
        const couiseneNumbers = getCouiseneNumber(randomNumber);

        // Is Prime Number?
        couiseneNumbers ? 
            console.log('Yes it is!') : 
            console.log("No it isn't");

        // Get pair numbers
        const pairNumbers = getPairNumbers(randomNumber);

        // Is Pair number?
        pairNumbers ? 
            console.log('Yes it is!') :
            console.log("No it isn't");

        // Get Fibbonacci Numbers
        const fibonacciNumbers = getFibbonacciNumbers(randomNumber);

        // Is Fibonnaci Number?
        fibonacciNumbers ?
            console.log('Yes it is!') :
            console.log("No it isn't");
    }
} 


const getFibbonacciNumbers = (randomNumber) => {
    console.log('Is ' + randomNumber + ' a Fibonacci number?');

    let fibNumber = 0;
    let fibNumber2 = 1;

    while (fibNumber < randomNumber) {
        let temp = fibNumber;
        fibNumber = fibNumber + fibNumber2;
        fibNumber2 = temp;
    }

    return fibNumber === randomNumber;
}

const getPairNumbers = (randomNumber) => {
    console.log('Is ' + randomNumber + ' Pair number?')
    if(randomNumber % 2 === 0) return true;
    return false;
}

const getCouiseneNumber = (randomNumber) => {
    console.log('Is ' + randomNumber + ' Prime Number ?');
    if(randomNumber == 1)
        return false;
    if(randomNumber == 2)
        return true;
    for(i = 2; i < randomNumber; i++){
        if(randomNumber % i === 0) 
            return false;
    }
    return true;
}


mainFunction();