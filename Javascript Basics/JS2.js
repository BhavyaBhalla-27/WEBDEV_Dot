// Creation of object
const rectangle = {
    length:1,
    breadth:2,
    // Defining the method
    // draw : function(){
    //     console.log('draw');
    // }
    draw(){
        console.log('draw');
    }
}
// Factory function 
function createRectangle(l,b){
    let rectangle = {
        length:l,
        breadth:b
    }
    return rectangle;
};
let a = createRectangle(5,6);
console.log(a.length);
// Constructor function
function Rectangle(l,b){
    this.length = l;
    this.breadth = b;
    this.draw = function(){
        console.log('drawing');
    }
}
let rectangleObj = new Rectangle(5,6);
console.log(rectangleObj.length);
console.log(rectangleObj.breadth);
// Dyanamic nature of object
let obj = {
    a : 1,
    b : 2
}
obj.c = 3;
delete obj.c;
// Iterating through objects
let rectangle1 = {
    length : 2,
    breadth : 4
}
// for in loop
for(let key in rectangle1){
    console.log(key,rectangle1[key]); 
}
// for of loop
for(let key of Object.entries(rectangle1)){
    console.log(key);
}
// Way to find whether a particular property exist in object or not
if('color' in rectangle1){
    console.log('Present');
}
else{
    console.log('Absent');
}
// Object cloning
// Iteration
let src = {value : 10};
let dest = {};
for(let key in src){
    dest[key] = src[key];
}
// Assign
let dest1 = Object.assign({},src);
// Spread
let dest2 = {...src};