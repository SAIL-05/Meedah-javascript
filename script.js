
// let myAge = 55;
//  myAge = 20;

//  console.log(myAge);
//  let is a cheater

//  const yourAge = 67;
//  yourAge = 45;
//  console.log(yourAge);
//  const is loyal

//  let age;
//  age = 45;
//  console.log(age);

// //Primitive data types

//  string '' ""

//  let hameedah;
//  hameedah = "oh my shayla,happy birthday boo";
//  console.log(hameedah);


// // number

//  let myNum = 5;
//  myNum = 12;
//  console.log(myNum);
//   it assigns just number and not text

// //null
// let test2 = null;

// test2 = 56;
// console.log(test2);

// // Non-primitive data types
// // objects

//  const student = {
//    name: "blessing",
//    age: 56,
//    isNotPregnant: true,
//  };

//  console.log(student);

// // arrays

//  const myArray = ["Chinbuzo", "Chinyere", 354, false, { name: "Falila" }, [2, 4, 6]];
//  console.log(myArray[0]);
//  console.log(myArray[1]);
//  console.log(myArray[4]);

// // functions

//Arithemetic Operator

  // let a = 20;
  // let b = 56;


// //Modulus
//  const modul = b % a;
//  console.log(modul);

// //Assignment Operators
//  let c = 39
//  +=
// c += 23;
// console.log(c)
//  -=
// c -= 20;
// console.log(c)
// *=
// c *= 12;
// console.log(c);


//Logical Operator
// Logical OR ||
// Logical NOT !
// Logiacl AND &

// //Ayo's Admission Details
// const fee = true;
// const uniform = false;
// const textbooks = false;
// const idCard = false;

// const checkOR = fee || !textbooks || uniform || idCard;
// const checkAND = fee && textbooks && uniform && idCard;
// const checkAyo = fee && textbooks;
// const checkAyoAgain = (fee && idCard) || (fee && uniform);
// const checkAyoAgain = (fee && (idCard || uniform));
// console.log(checkAyoAgain);


// //Tenary Operator
// // (contition) ? "" : ""

//  const tenTest = 50 > 25 ? "correct" : " wrong";
//  console.log(tenTest);

//Write a program that tells if a user is legible to vote

// let ages = 12;
// let canVote = ages >= 18 ? "Yes you can" : "No you cant";

// let canVote = ages <= 18 ? "yes" : "no"
// console.log(canVote);

//  let ages = 60;

//  let voting = ages < 18 ? "You cannot vote" : "You can vote";
//  console.log(voting);

// let voting = ages < 100 && age >= 18 ? "You can vote" : "You cannot vote";
//  console.log(voting);

// const username =prompt("Enter your name")
// alert(`Welcome ${username}`)

// let valueOne = parseInt(prompt("Enter your first Number"))
// let valueTwo =parseInt(prompt("Enter your second Number"))
// let ans = valueOne + valueTwo
// alert(ans);

// let number = parseInt(prompt("Enter a number"))
// if (number % 2 == 0 ){
//   alert(`${number} is an even number `)
// }
// else{
//   alert(`${number} is an odd number`)
// }


// const number1 =parseInt(prompt("enter a number"));
// const number2 =parseInt(prompt("enter a number"));

// if (number1 > number2) {
//   alert (`${number1} is greater`);
// } else if (number1 === number2) {
//   alert("This is invalid")
// } else {
//   alert(`${number2} is greater`)
// }

// let scores = parseInt(prompt("Enter your score"))
// if(scores >=0 &&  scores <=39){
//   alert(`${scores} Is F`)
// }
// else if( scores >=40 && scores <=44){
//   alert(`${scores} IS E`)
// }
// else if( scores >= 45 && scores <=49){
//   alert(`${scores} is D`)
// }
// else if(scores >= 50 && scores <= 59){
//   alert(`${scores} is C`)
// }
// else if (scores >= 60 && scores<= 69){
//   alert(`${scores} is B`)
// }
// else if (scores >= 70 && scores <= 100){
//   alert(`${scores} is A`)
// }
// else {
//   alert(`${scores} is Invalid`)
// }

// let weight =parsefloat(prompt())

const num = parseFloat(prompt("enter your height in cm"))
const heightInMeters = num/100
const weightInKilogram  =parseFloat(prompt("enter your weight in kg")) 
 const bmi = weightinKg/((heightInMeters)*(heightInMeters))

 if (bmi<=18.5) {
        console.log(bmi)
        console.log("You are UNDERWEIGHT")
        alert("You are UNDERWEIGHT")
    } else if (bmi>=18.5 && bmi === 24.9){
            console.log(bmi)
            console.log("your are NORMAL")
            alert(bmi)
            alert("your are NORMAL") 
        } else if (bmi >= 25 && bmi === 29.9){
            console.log(bmi)
            console.log("you are overweight")
            alert(bmi)
            alert("you are overweight")
        } else {
            console.log(bmi)
            console.log("your are OBESE")
            alert(bmi)
            alert("your are OBESE")
        }
 