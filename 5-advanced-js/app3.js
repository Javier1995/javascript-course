var john = {
  name: 'john',
  yearOfBirth:1990,
  job: 'teacher'
};

//Function contructor
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job
};


Person.prototype.calculateAge = function(){
    console.log(2020 - this.yearOfBirth);
}


var javier = new Person('Javier', 1995, 'Developer');
var Jose = new Person('Jose', 1994, 'Developer');
var diana = new Person('diana', 1993, 'Nurse');

javier.calculateAge();
diana.calculateAge();
Jose.calculateAge();