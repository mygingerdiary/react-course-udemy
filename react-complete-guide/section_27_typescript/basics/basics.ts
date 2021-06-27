// Primitives: number, string, boolean
// Complex: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string | string[] = 'Patrycja'; // union type

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Sport', 'Cooking', 'Rollerblading'];

type Person = {
    name: string,
    age: number,
};

let person: Person;

person = {
    name: 'Max',
    age: 32,
};

let people: Person[];

// Type inference

let course: string | number = 'React - The Complete Guide'; // union type

course = 1234;

// functions & types

function add(a: number, b: number) {
    return a + b;
}

function print_output(value: any) {
    console.log(value);
}

// generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

const  stringArray = insertAtBeginning(['a', 'b'], 'z');


