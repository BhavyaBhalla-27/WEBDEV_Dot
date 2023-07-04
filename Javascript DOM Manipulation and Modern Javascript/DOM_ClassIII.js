// Performance

// Initial code
const t1 = performance.now();
for(let i = 1;i<=10;i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para - ' + i;
    document.body.appendChild(newElement);
}
const t2 = performance.now();
console.log(t2-t1);
// Optimizing code
const t3 = performance.now();
let myDiv = document.createElement('div');
for(let i = 1;i<=10;i++){
    let element = document.createElement('p');
    element.textContent = 'This is para - ' + i;
    myDiv.appendChild(element);
}
document.body.appendChild(myDiv);
const t4 = performance.now();
console.log(t4-t3);
// Using document fragment
const t5 = performance.now();
let fragment = document.createDocumentFragment();
for(let i = 1;i<=10;i++){
    let element = document.createElement('p');
    element.textContent = 'This is para - ' + i;
    fragment.appendChild(element);
}
document.body.appendChild(fragment);
const t6 = performance.now();
console.log(t6-t5);
// setTimeout method
setTimeout(function(){
    console.log('Hello jee');
},4000);