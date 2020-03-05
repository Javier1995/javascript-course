// Closures 
function retirament(retiramentAge) {
    var a = ' years left until retirement';
    return function (yearOfBirth) {

        var age = 2016 - yearOfBirth;
        console.log((retiramentAge - age) + a);
    }
}

var retirementUS = retirament(66);
retirementUS(1990);
retirament(66)(1990);

function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ' Great and cool!');
        } else if (job === 'teacher') {
            console.log(name + ' excelent and much better!');
        } else {
            console.log(name + ', what do you do, then?');
        }
    }
}

var question = interviewQuestion('designer')
question('Javier');