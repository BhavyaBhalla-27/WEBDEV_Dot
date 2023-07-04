// Window 
window.console.log('Hello world');
// DOM
console.log(document);
console.log(document.body);
console.log(document.getElementById('header'));
console.log(document.getElementsByClassName('heading'));
console.log(document.getElementsByTagName('div'));
console.log(document.querySelector('#header'));
console.log(document.querySelector('.heading'));
console.log(document.querySelector('div'));
console.log(document.querySelectorAll('div'));
// Updating existing content
// innerHTML
let a = document.querySelector('.code-example');
console.log('Printing inside content of code example classs');
console.log(a.innerHTML);
a.innerHTML = ' ';
console.log('Printing inside content of code example classs');
console.log(a.innerHTML);
// textContent
let b = document.querySelector('.coding');
console.log(b.textContent);
console.log(b.innerHTML);
// innerText
console.log(b.innerText);

// Adding new element or content
let newChild = document.createElement('span');
a.appendChild(newChild);
console.log(a);

// Creating text node
// Method - 1
let newPara = document.createElement('p');
let textPara = document.createTextNode('Hello World');
newPara.appendChild(textPara);
a.appendChild(newPara);
console.log(a);
// Method - 2
let myPara = document.createElement('p');
myPara.textContent = 'Hello Word';
a.appendChild(myPara);
console.log(a);
// .insertAdjacentHTML
let newText = document.createElement('h3');
newText.textContent = 'ABCD';
a.insertAdjacentElement('beforeend',newText);
console.log(a);
// remove child method
let parent = document.querySelector('.parent');
let child = document.querySelector('.child');
parent.removeChild(child);
console.log(parent);

// CSS using JS
let content = document.querySelector('.content');
// Method - 1
content.style.color = 'red';
content.style.backgroundColor = 'aqua';
// Method - 2
content.style.cssText = 'color : red; font-size:4em;';
// Method - 3
content.setAttribute("style","color : orange; background-color : red;");
