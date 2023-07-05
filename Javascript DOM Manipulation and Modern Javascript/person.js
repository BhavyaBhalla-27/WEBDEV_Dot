export class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log(`Hello, My name is ${this.name} and age is ${this.age}`);
    }
}