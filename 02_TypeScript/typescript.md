<div align="center">
  <h1>TypeScript</h1>
<sub>Author:
<a href="https://www.linkedin.com/in/bhuvanaganesan-l-2209047a" target="_blank">Bhuvan Ganesan</a><br>
</sub>
</div>

## What is TypeScript ?

TypeScript is Typed JavaScript. TypeScript adds types to JavaScript to help you speed up the development by catching errors before you even run the JavaScript code.

TypeScript is an open-source programming language that builds on top of JavaScript. It works on any browser, any OS, any environment that JavaScript runs.

TypeScript files use the .ts extension rather than the .js extension of JavaScript files.

TypeScript improves your productivity by avoid bugs

```sh
function add(x, y) {
   return x + y;
}
```

```sh
let result = add(input1.value, input2.value);
console.log(result); // result of concatenating strings
```


```sh
function add(x: number, y: number) {
   return x + y;
}
```

```sh
let result = add(input1.value, input2.value);
```
## TypeScript Setup
 Check the below link to setup typescript as project and experiment 
 https://www.typescriptlang.org/
https://www.typescripttutorial.net/typescript-tutorial/setup-typescript/


## Base Type & Primitives 

- **Primitives**  -- number, string, boolean, (null, undefined, any etc not used as it doesn't make sense in codding) and use small case **number** not **Number**
  - ``` let result: number; ```
- **Complex Types** 
  - array 
  ```sh
    let hobbies: string[];
  ```
  - object 
  ```sh 
    let employee: {
     firstName: string;
     lastName: string;
     age: number;
     jobTitle: string;
   }
  ```
  - union 
  ```sh
    let result: number | string;
    result = 10; // OK
    result = 'Hi'; // also OK
    result = false; // a boolean value, not OK
  ```
  - type aliases 
  ```sh
    type alphanumeric = string | number;
    let input: alphanumeric;
    input = 100; // valid
    input = 'Hi'; // valid
    input = false; // Compiler error
  ```

## Function
TypeScript functions are the building blocks of readable, maintainable, and reusable code.
Like JavaScript, you use the function keyword to declare a function in TypeScript:

```sh
let add: (a: number, b: number) => number =
    function (x: number, y: number) {
        return x + y;
    };
```

## Class

JavaScript does not have a concept of class like other programming languages such as Java and C#. In ES5, you can use a constructor function and prototype inheritance to create a “class”.
ES6 allowed you to define a class which is simply syntactic sugar for creating constructor function and prototypal inheritance:

Javascript
```sh
class Person {
    ssn;
    firstName;
    lastName;

    constructor(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let person = new Person('171-28-0926','John','Doe');
console.log(person.getFullName());
```
TypeScript

```sh
class Person {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let person = new Person(171280926, 'John', 'Doe');
```
 ## Interface

 TypeScript interfaces define the contracts within your code. They also provide explicit names for type checking.
 
```sh
 interface Person {
    firstName: string;
    lastName: string;
}

function getFullName(person: Person) {
    return `${person.firstName} ${person.lastName}`;
}

let john = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(getFullName(john));
```
 ## Generics

 TypeScript generics allow you to write the reusable and generalized form of functions, classes, and interfaces. In this tutorial, you’re focusing on developing generic functions.

 ```sh
function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
 ```

### Useful links
- https://www.typescriptlang.org/
- https://www.typescriptlang.org/play 
- https://www.typescripttutorial.net/
