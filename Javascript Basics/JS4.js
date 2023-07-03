// Creating functions in Javascript
// Method - 1
function run(){
    console.log('running');
}
// function invoke
run(); 
// Method - 2
// Named function assignment
let stand = function walk(){
    console.log('walking');
}
stand();
// Anonymous function assignment
let stand1 = function (){ // function name not present
    console.log('walking1');
}
stand1();
// Dyanamic nature in JS
function sum(a,b){
    let total = 0;
    for(let val of arguments){
        total += val;
    }
    return total;
}
console.log(sum(1,2,3,4,5));
// Rest operator
function sum(...args){
    console.log(args);
}
sum(1,2,3,4,5);
// Default parameters
function sum(a,b=2,c=3){
    return a + b + c;
}
console.log(sum(1));
// Getter and setter
let person = {
    fName : 'Bhavya',
    lName : 'Bhalla',
    get fullName(){
        return `${person.fName} ${person.lName}`;
    },
    set setName(val){
        // if(typeof(val) !== String){
        //     throw new Error("You have not passed a string sir");
        // }
        let parts = val.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
}
console.log(person.fullName);
person.setName = 'Love Babbar';
console.log(person.fullName);
// Error handling
try{
    person.setName = 1;
}
catch(e){
    alert('You have not passed a string');
}

// Reducing an array
let arr = [1,2,3,4];
let totalSum = arr.reduce((accumulator,currentValue)=>accumulator + currentValue,0);
console.log(totalSum);  
