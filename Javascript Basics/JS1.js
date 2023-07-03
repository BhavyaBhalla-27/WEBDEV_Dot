// Print on console
console.log('Hello jee');

// Variable in JS
let a = 5;
console.log(a);
let b = 'Bhavya';
console.log(b);

// Constants in JS
const c = 5;
// c=6; // This gives an error 

// Dyanamic Typing
let number = 5;
number = 'Sir';
console.log(number); // Sir will be printed here 

// Operators in JS
// Arithemetic Operators
let x = 2;
let y = 3;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);
// Comparasion operators
console.log(x>y);
console.log(x>=y);
console.log(x<y);
console.log(x<=y);
console.log(x===y);
console.log(x!==y);
// Ternary operator 
let age = 18;
let status = (age>=18) ? 'I can vote' : 'I can not vote';
console.log(status);

// Control statements
// if else 
let marks = 96;
if(marks >= 90){
    console.log('Grade = A');
}
else if(marks >= 80){
    console.log('Grade = B');
}
else{
    console.log('Grade = C');
}
// switch case
let num = 2;
switch(num){
    case 1 : console.log('a'); break;
    case 2 : console.log('b');break;
    default : console.log('d');
}

// Loops
// for loop
for(let i = 0;i<5;i++){
    console.log(i);
}
// while loop
let i = 0;
while(i<5){
    console.log(i);
    i++;
}
// do while loop
let j = 0;
do{
    console.log(j);
    j++;
}
while(j<10);
