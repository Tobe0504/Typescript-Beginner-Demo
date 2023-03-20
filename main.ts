export {};

let message = "Welcome back";

console.log(message);

let x = 10;
let y = 20;

const title = "Tobe's first typescript run";

let isBeginner: boolean = true;
let total: number = 30;
let name: string = "Tobenna";

let sentence: string = `My name is ${name}
And I am a beginner in Typescript`;

let n: null = null;
let u: undefined = undefined;

let list1: number[] = [1, 2, 3, 4, 5];
let list2: Array<number> = [1, 2, 3, 4, 5];

let person1: [string, number] = ["Tobe", 22];

enum Colors {
  Red,
  Blue,
  Green,
}
let c: Colors = Colors.Green;

let randomValue: any = 10;
randomValue = true;
randomValue = "This is a test for random values";

const myVariable: unknown = 10;

(myVariable as string).toUpperCase();

// When the value from here is not under your control
let multiType: boolean | number;
multiType = 20;
multiType = true;

// Functions
const add = (num1: number, num2?: number): number => {
  if (num1 && num2) {
    return num1 + num2;
  } else {
    return num1;
  }
};

add(10, 5);
add(5);

interface Person {
  firstname: string;
  lastName?: string;
}

const fullName = (person: Person) => {
  console.log(person.firstname, person.lastName);
};

const arinze = { firstname: "Tobenna", lastName: "Ezimorah" };
fullName(arinze);

console.log(c);

console.log(sentence);
