// Monitor and unmonitor events
// monitorEvents(document); // Write in console
// unmonitorEvents(document); // Write in console

// Event listeners
document.addEventListener('click',function(){
    console.log("I clicked on the document");
})
let content = document.querySelector('h2');
function changeColor(){
    content.style.color = 'green';
}
content.addEventListener('click',changeColor);
// content.removeEventListener('click',changeColor);

// The event object
content.addEventListener('click',function(event){
    console.log(event);
})

// Preventing default action
let anchorTag = document.querySelector('a');
anchorTag.addEventListener('click',function(event){
    event.preventDefault();
    console.log('Prevented opening of other link');
})

// Avoiding too many events

// let myDiv = document.createElement('div');
// for(let i = 1;i<=10;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para' + i;
//     newElement.addEventListener('click',function(event){
//         console.log('I have clicked on para');
//     });
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

// By the below code we lost individuality of the paragraphs

// let myDiv = document.createElement('div');
// myDiv.addEventListener('click',function(event){
//     console.log('I have clicked on para');
// })
// for(let i = 1;i<=10;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para' + i;
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

// event target property
let myDiv = document.createElement('div');
myDiv.addEventListener('click',function(event){
    console.log(event.target.textContent);
})
for(let i = 1;i<=10;i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para' + i;
    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);

// Filtering over specific tags
let element = document.querySelector('#wrapper');
element.addEventListener('click',function(event){
    if(event.target.nodeName === 'SPAN'){
        console.log('Clicked on span');
    }
})