/* Scope and lexical scoping */
/* var a = 'Hello';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hola';
        console.log(a + b + c);
    }
} */

/* This keyword */



/* how hoisting works in here */
/* calculateAge(1995); */

//Function declarations
/* function calculateAge(year) {
    console.log(2019 - year);
}
//Function exp */
function calculateAge(year) {
    console.log(2019 - year);
}
//Function exp
//retirement(1998);
var retirement = function (year) {
    console.log(65 - (2016 - year));
}



//variable


/* console.log(age); */
/* var age = 23;


function foo() {
    var age = 65;
    console.log(age);
}

foo(); */
/* console.log(age); */

/* Scope chaining */
/* var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'hey!';
        console.log(a + b + c);
    }
} */






/* Execution stack */
/* var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'hey!';
        third();
    }
}

function third() {
    var d = 'john';
    console.log(a + b + c + d);
} */



/* This keyword */

/* console.log(this); 

calculateAge(1997);

function calculateAge(year) {
    console.log(2019 - year);
    console.log(this);
}
*/

var john = {
    name: 'javier',
    yearOfBirth: 1996,
    calculateAge: function () {
        console.log(this);
        console.log(2019 - this.yearOfBirth);
        /* function innerFunction() {
            console.log(this);
        }

        innerFunction(); */
    }
}
john.calculateAge();

var mike = {
    name: 'mike',
    yearOfBirth: 1992
}

/* borrowing methods to another one */

mike.calculateAge = john.calculateAge;

mike.calculateAge();