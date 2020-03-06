/* var a = 10;
var b = a;
a = 40;

var array1 = [1,2,3,4];
var array2 = array1;
array1[0] = 'vete a la verga';



console.table(array1);
console.table(array2);




console.log(a);
console.log(b);

var obj1 = {
    name: 'john',
    age: 26
}

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
console.log(obj.city); */

/* var puta = {
    nombre:'diamantina',
    ets: true,
    edad: 40
};
var clonaPuta = Array.a

clonaPuta.ets = false;
puta.age = 18;
console.table(puta);
console.table(clonaPuta);
 */

var arrayPrimero = [2,3,4,5]
var arraySegundo = arrayPrimero.slice();

arrayPrimero[1] = 123;

console.log(arrayPrimero);
console.log(arraySegundo);