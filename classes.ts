// Classes

// class Student {
//     firstName: string;
//     lastName: string;
//     age: number;
//     private courses: string[];

//     constructor(first: string, last: string, age: number, courses: string[]){
//         this.firstName = first;
//         this.lastName = last;
//         this.age = age;
//         this.courses = courses;
//     }
//     enrol(courseName: string){
//         this.courses.push(courseName);
//     }

//     listCourses(){
//         return this.courses.slice();
//     }
// }


class Student {
    constructor(public firstName: string, public lastName: string, public age: number, public courses: string[]){
    }
    enrol(courseName: string){
        this.courses.push(courseName);
    }

    listCourses(){
        return this.courses.slice();
    }
}

const student = new Student('Matteo', 'Luca', 30, ['Angular']);
student.enrol('React');
student.listCourses();

