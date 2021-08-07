// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types: parameters

// Primitives

let age:number;

age = 12;

let userName: string;

userName = 'Owas';

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

let person: {
    name: string;
    age: number;
}

person = {
    name: 'Matteo',
    age: 30
};

let people: {
    name: string;
    age: number;
}[];


// Type inference

let course = 'React - The Complete Guide';

// Union Types

let tutorial: string | number = 'Angular 12 Complete Guide';






