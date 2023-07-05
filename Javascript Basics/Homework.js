// Redeclaration of variable using var keyword
var name = 'Love';
function walk(){
    var name = 'Bhavya';
    console.log(name);
}
walk();
// Combining method on objects present in arrays
let arr1 = [{1:'Bhavya'},{2:'Love'}];
let arr2 = [{3:'Rahul'},{4:'Shardul'}];
let combined = arr1.concat(arr2);
console.log(combined);
// Slicing method on objects present in arrays
let sliced = combined.slice(1,3);
console.log(sliced);
// Sorting in objects
let arr3 = [{2:'Bhavya'},{3:'Love'},{1:'Rahul'}];
arr3.sort((a, b) => {
    const keyA = parseInt(Object.keys(a)[0]);
    const keyB = parseInt(Object.keys(b)[0]);
  
    return keyA - keyB;
});
console.log(arr3);
// Sorting on numbers
let nums = [10,1,4,40];
nums.sort((a,b)=>(a-b));
console.log(nums);
// Finally block -> Executed regardless of the result of try block