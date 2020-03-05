//Returning a function from inside a function
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', Can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log(name + ', Can you please tell us what language you use?');
        }
    } else {
        return function (name) {
            console.log(name + ', What do you do?');
        }
    }
}

//Outputs
var question = interviewQuestion('teacher');
question('Javier');
question('Pedro');
question('Naara');
question('Carlos');