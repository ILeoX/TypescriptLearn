"use strict";
let alpha;
alpha = 'wolf';
let cid = 1;
let customerId = cid;
let x = [1, 2, 4, 6];
// for (let i:number = 0; i < x.length; i++){
//       console.log(x[i]);
// }
//tuples in typescript
var ama = [32, "seven", "angel", "miracle"];
let anna = "true";
const val = (x, y) => x + y;
///Classes 
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'brad');
const mike = new Person(2, 'Mike Jordan');
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
    returnVal() {
        console.log(`${this.name} is the ${this.position} and has an id of ${this.id}`);
    }
}
const emp = new Employee(3, 'John', 'Manager');
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(['any', 'book', 'is', 'a', 'book']);
//strArray.push(1)
strArray.push('value');
///Using with React
