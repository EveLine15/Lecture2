//Task1
// const country = 'Sweden';
// const access = country == 'Sweden' ? true: false;
// console.log(access);

//Task2
// let number = 10;
// for(let i = 0; i < 10; i++){
//     number++;
// }
// console.log(number);

//Task3
// for(let i = 0; i <= 8 ; i+=2){
//     let pNumber = prompt('Input a number');
//     pNumber == 10 ? console.log('Equals 10') : console.log('Not equals 10');
// }

//Task4
// const amountOfElements = prompt("Input amount of squares you wanna get");
// for(let i = 0 ; i < amountOfElements; i++){
//     console.log(i**2);
// }

//Task5
// const number = 3;
// if(number % 5 == 0 && number % 3 == 0) console.log('FizzBuzz');
// else if (number % 5 == 0) console.log('Buzz');
// else if (number % 3 == 0) console.log('Fizz');
// else console.log('Not acceptable');

//Task6
// let i = 0;
// while(i < 3){
//     alert( `number ${i}!` );
//     i++;
// }

//Task7
// function squaresOfNumbers(min, max){
//         for(let i = 0 ; i < max; i++){
//         const res = i**2;
//         if(res >= min && i < max) console.log(res);
//     }
// }
// const amountOfElements = prompt("Input amount of squares you wanna get");
// const minElement = prompt("Input amount the first element");
// squaresOfNumbers(minElement ,amountOfElements);

//Task8
// function getRandomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// function getRandomRGB(){
//     const num1 = getRandomInteger(0, 256);
//     const num2 = getRandomInteger(0, 256);
//     const num3 = getRandomInteger(0, 256);

//     color = 'rgb('+num1+','+num2+','+num3+')';
//     return color;
// }
// console.log(getRandomRGB());

//Task9
// function isInteger(n){
//     for(let i = 0; i < n; i+=0.5){
//         Number.isInteger(i) ? console.log(i + ' is intager') : console.log(i + ' is decimal');
//     }
// }
// const n = 10;
// isInteger(n);

//Task10
// function calcPrice(day){
//     const amountForDay = 40;
//     let price;
//     let sale = 0;
//     if(isNaN(days) || days < 0){
//         console.log('Invalid value');
//     } 
//     else {
//         if(days >= 7) sale = 50;
//         else if(days >= 3) sale = 20;
//         else sale = 0;
//         price = Number(days)*amountForDay - sale;
//         return price;
//     }
// }
// const days = prompt('Input the amount of days you are going to book a car for');
// console.log('Price: ' + calcPrice(days));