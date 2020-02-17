/* Function's constructor */
/* 
var Animal = function (name, breed) {
    this.name = name
    this.breed = breed;
}


Animal.prototype.walk = function () {
    return this.name + ' can walk';
}

Animal.prototype.run = function () {
    return this.name + ' can run all along the house';
}

Animal.prototype.getType = function () {
    return this.name + ' belongs to breed: ' + this.breed;
}

var perro = new Animal('tobby', 'mixed');

console.log(perro.run());
console.log(perro.walk());
console.log(perro.getType()); */



//Object.create

var PersonProto = {
    calculateAge: function () {
        let date = new Date();
        return date.getFullYear() - this.yearOfBirth;
    }
}

var john = Object.create(PersonProto);

john.name = 'John';
john.yearOfBirth = 1995;
john.run = function () {
    return this.name + ' likes running every morning at 7:00'
}
var javier = Object.create(PersonProto, {
    name: {
        value: 'Javier'
    },
    yearOfBirth: {
        value: 1998
    }
})