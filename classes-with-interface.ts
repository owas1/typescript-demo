import {Human} from './interface-type';

class Instructor implements Human {
    firstName: string;
    age: number;
    greet() {
        console.log('Ciao!!!');
    }
}