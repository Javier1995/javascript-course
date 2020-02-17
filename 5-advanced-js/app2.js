/* Lecture: passing functions as arguments */

/* var years = [1990, 1965, 1937, 2005, 1998, 1995]; */

/* Main function where I pass another function into it */
/* function arrayCalc(arr, fn) {
    var arrRes = [];

    for (let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
 */


/* Functions to work with passed as arguments */
/* function calculateAge(el) {
    let currentDate = new Date();
    return currentDate.getFullYear() - el;
}


function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    }
    return -1;
}
 */

/* var ages = arrayCalc(years, calculateAge);
var fullAge = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAge); 
console.log(rates);*/



/* lecture:  IMMEDIATELY INVOKED FUNCTION EXPRESSION(IIFE) */
/* (function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

var year = 1998;

(function (year) {
    var date = new Date();
    console.log(date.getFullYear() - year);
})(year); */



/* Closures */
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function (yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log(retirementAge - age + a);
    }

}

/* retirement(60)(1995); */

/* Closures challenges */


/* function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach?, ' + name);
        } else {
            console.log('hello, ' + name + ' what do you do for living?');
        }
    }
}

var javier = interviewQuestion('designer')('javier');
var monica = interviewQuestion('teacher')('monica');
var adriana = interviewQuestion('perro')('adriana'); */


/* Lectures: Bind, call and apply */


var javier = {
    name: 'Javier',
    age: 24,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var karla = {
    name: 'karla',
    age: 35,
    job: 'designer'
};



/* javier.presentation('formal', 'morning'); */

/* Call function */
/* javier.presentation.call(karla, 'friendly', 'afternoon'); */
/* Apply function */
/* javier.presentation.apply(karla, ['friendly', 'afternoon']); */
/* Bind function */
var javierFriendly = javier.presentation.bind(javier, 'friendly');
/* javierFriendly('morning');
javierFriendly('evening'); */

var karlaFriendly = javier.presentation.bind(karla, 'formal');
/* karlaFriendly('evening');
karlaFriendly('morning'); */


/* Example for bind function */

var years = [1990, 1965, 1937, 2005];

function arrayCalc(arr, fn) {
    var arrRes = [];

    for (let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

/* var ages = arrayCalc(years, calculateAge);

var fullJapa = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapa); */