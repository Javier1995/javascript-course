var javier = {
    name: 'javier',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('good' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ' , I \'m a ' + this.job + 'and I\'m ' + this.age  + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! what\'s  up? I\'m ' + this.name + );
        }
    }
}