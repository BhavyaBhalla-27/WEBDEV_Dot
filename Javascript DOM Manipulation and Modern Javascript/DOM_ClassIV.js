// Promises
let myPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('I am inside promise');
    },5000);
    resolve(1);
    // reject(new Error('Some error occured'));
});
console.log('first');
console.log(myPromise);
// Methods in Promises
let myPromise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('I am inside promise');
    },5000);
    // resolve(1);
    reject(new Error('Some error occured'));
});
myPromise.then((value)=>{console.log(value)});
myPromise1.catch((error)=>console.log('Error received'));
// Another syntax
myPromise.then((value)=>{console.log(value)},(error)=>console.log('Error received'));

// Multiple Promises
let promise1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('set timeout 1 started');
    },2000);
    resolve(true)
});
let output = promise1.then(()=>{
    let promise2 = new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log('set timeout 2 started');
        },2000);
        resolve("Promise2 resolved");
    });
    return promise2;
})
output.then((value)=>console.log(value));
// async function
console.log('Our first async function');
async function sum(a,b){
    return "hello jee";
}
console.log(sum(1,2));
async function utility(){
    let delhiWeather = new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve('Delhi has hot weather');
        },2000);    
    })
    let hyderabadWeather = new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve('Hyderabad has cold weather');
        },2000);  
    })
    // Line 60 won't be executed unless and until 59 is fully completed
    let dM = await delhiWeather;
    let hM = await hyderabadWeather;
    return [dM,hM];
}
utility();

Fetch API

get call
async function utility1(){
    let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let output = await content.json();
    console.log(output);
}
utility1();  

// post call
let option = {
    method: 'POST',
  body: JSON.stringify({
    title: 'Details',
    body: 'Bhavya Bhalla',
    userId: 2004,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
}
async function utility2(){
    let content = await fetch('https://jsonplaceholder.typicode.com/posts',option);
    let response = content.json();
    console.log(response);
}
utility2();

// Closures
function init(){
    let name = "Bhavya";
    function displayName(){
        console.log(name);
    }
    return displayName;
}
let func = init();
func();
