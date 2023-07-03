// Math object
console.log(Math.random());
console.log(Math.PI);
console.log(Math.round(1.86));
console.log(Math.max(1,2,3,4));
console.log(Math.min(1,2,3,4));
console.log(Math.abs(-2));

// String object
let a = 'Bhavya';
let b = new String('Bhavya');
console.log(typeof(b));
console.log(a.length);
console.log(a[0]);
console.log(a.includes('Bh'));
console.log(a.startsWith('Bha'));
console.log(a.endsWith('vya'));
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.replace('Bha','car'));
let message = 'This is my first message';
let words = message.split(' ');
console.log(words);

// Template literal
// let message1 = 'This is \n my first message';
// console.log(message1);
let message1 = `This is
my first
message.`
console.log(message1);
let firstName = 'Bhavya';
let message2 = `Hello ${firstName}`;
console.log(message2);

// Date object
let date = new Date();
console.log(date);
let date1 = new Date('June 20 1998 07:15');
console.log(date1);
let date2 = new Date(1998,11,20,7); // 0 based indexing
date2.setFullYear(1947);
console.log(date2);

// Creation of array
let arr = [1,2,3,4,5];
// Insertion 
// End
arr.push(6);
// Start
arr.unshift(0);
// Middle
arr.splice(2,0,'a','b');
// Searching in array
if(arr.indexOf(4) !== -1){
    console.log('Present');
}
if(arr.includes(4) === true){
    console.log('Present');
}
// Searching in array advanced
let course = [{no:1,name:'love'},{no:2,name:'bhavya'}];
let ans = course.find(function(course){
    return course.name === '1';
})
console.log(ans);
// Arrow function
let ans1 = course.find(course => course.name === 'love');
console.log(ans1);

// Remove an element from array
let nums = [1,2,3,4,5,6];
// start
nums.pop();
// end
nums.shift();
// middle
nums.splice(3,1);
console.log(nums);

// Emptying an array
let nums1 = [1,2,3,4,5];
let nums2 = nums1;

// Method 1
// nums1 = []; // Here nums1 will be empty but nums2 wont be empty
// Method 2
// nums1.length = 0; // Both nums1 and nums2 will be empty
// Method 3
// nums1.splice(0,nums.length); // Both nums1 and nums2 will be empty
// Method 4
while(nums1.length > 0){
    nums1.pop();
}
console.log(nums1);
console.log(nums2);

// Combining and slicing arrays
let first = [1,2,3];
let second = [4,5,6];
let combined = first.concat(second);
console.log(combined);
let sliced = combined.slice(2,5);
console.log(sliced);

// Combining using spread operator
let combined1 = [...first,...second];
console.log(combined1);
// Creating copy
let copy = [...combined1];
console.log(copy);

// Iterating an array
let arr1 = [1,2,3,4,5];
for(let value of arr1){
    console.log(value);
}
arr1.forEach(function(number){
    console.log(number);
})
arr1.forEach(number=>console.log(number));

// Joining the array
let numbers = [1,2,3];
let joined = numbers.join(',');
console.log(joined);

// Sorting the array
let nums3 = [2,4,3];
nums3.sort();
console.log(nums3);

// Filtering the array
let x = [1,2,-1,-4];
let positive = x.filter(value=>value>=0);
console.log(positive);

// Mapping arrays
let y = [7,8,9,10];
let mapping = y.map(value=>'student_no'+value);
console.log(mapping);

// Chaining
let z = [1,2,-6,-9];
let items = z.filter(val=>val>=0).map(num=>{value:num});
