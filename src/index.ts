let alpha: string | number;

alpha = 'wolf';

let cid: any = 1
let customerId = cid as string;


let x:number[] = [1,2,4,6];

// for (let i:number = 0; i < x.length; i++){
//       console.log(x[i]);
// }

//tuples in typescript

var ama = [32, "seven", "angel", "miracle"];

let anna:string = "true";

///interface with a functiom 

interface Mathfunc {
      (x: number, y:number): number
}

const val:Mathfunc = (x:number, y: number):number => x + y


interface PersonInterface {
      id: number,
      name: string
      register() : string
}

///Classes 
class Person implements PersonInterface {

      constructor (id: number, name: string ) {
            this.id = id
            this.name = name
      }

      id: number
      name: string

      register() {
            return `${this.name} is now registered`
      }
}


const brad = new Person(1, 'brad')
const mike = new Person(2, 'Mike Jordan')


class Employee extends Person {

      position: string

      constructor (id: number, name: string, position: string) {
            super(id,name)
            this.position = position
      }
      
      returnVal() {
            console.log(`${this.name} is the ${this.position} and has an id of ${this.id}`)
      }
}

const emp = new Employee(3, 'John', 'Manager')


//Generics

function getArray <T> (items:T[]) : T[] {
      return new Array().concat(items)
}

let numArray = getArray <number>([1,2,3,4,5])
let strArray = getArray <string> (['any', 'book', 'is', 'a', 'book'])

//strArray.push(1)
strArray.push('value')


///Using with React

