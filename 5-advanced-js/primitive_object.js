var a = 10;
var b = a;
a = 40;

console.log(a);
console.log(b);


var obj1 = {
    name: 'john',
    age: 26
};

var obj2  = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);
var age = 50;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
}


function change(a, b){
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);
console.info(age);
console.log(obj.city);