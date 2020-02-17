//Function's constructor

//Simple Object
/* var john = {
    name: 'john',
    yearOfBirth: 1990,
    job: 'teacher'
}

//Prototype or constructor (Mainly known as Class in other programming languaages based on OOP)
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};



//Inheritances with methods by using prototype property

Person.prototype.calculateAge = function () {
    console.log(2016 - this.yearOfBirth);
};
//Inherentances with Properties by using prototype Property(Not very common)
Person.prototype.isMan = true;
Person.prototype.isMarried = false;

//Instances
var john = new Person('Jonh', 1969, 'teacher');
var mark = new Person('mark', 1980, 'designer');
var jane = new Person('jane', 1990, 'retired');

//Instances' methods
john.calculateAge();
mark.calculateAge();
jane.calculateAge();

console.log(john.isMan);
console.log(john.isMarried);
console.log(john); */

//Object.create

/* var PersonProto = {
    calculateAge: function () {
        console.log(2016 - this.yearOfBirth);
    }
}


var john = Object.create(PersonProto);
john.name = 'john';
john.yearOfBirth = 1990;
john.job = 'teacher';



var javier = Object.create(PersonProto, {
    name: {
        value: 'Javier'
    },
    yearOfBirth: {
        value: 1995
    },
    job: {
        value: 'Engineer'
    }
}); */


//Primitives vs Object

//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a, b);

//Objects
var obj1 = {
    name: 'john',
    age: 26
}
var obj2 = obj1;

obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

//Functions

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
}


function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);


//Impresion de informacion en JS
console.log(age);
console.log(obj.city);