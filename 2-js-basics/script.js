/* variables */

/* var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
console.log(lastName); 

var fullAge = true;
console.info(fullAge);

var job;
console.log(job); */

/**
 * Coding Challenges 1
 * 
 */

/* 
    Mark and John are trying to compare their BMI (Body Mass Index) which
    calculated using the formula: BMI = mass / height^2 = mass / (height * height).
    (mass in and height in meter)

*/

/* var johnMass, johnHeight, markMass, markHeight, isMarkHigherThanJohn = undefined;

johnMass = prompt('Ingrese JohnMass');
johnHeight = prompt('Ingrese JohnHeight');
markMass = prompt('Ingrese Mark\'s mass ');
markHeight = prompt('Ingrese Mark\'s height');

johnBMI = johnMass / Math.pow(johnHeight, 2);
markBMI = markMass / Math.pow(markHeight, 2);
console.log(johnBMI, markBMI);
isMarkHigherThanJohn = markBMI > johnBMI;

console.log('Is mark\'s BMI higher than John\'s? ' + isMarkHigherThanJohn); */


/* var height;
height = 23; 

if(height){
   console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
} */

/**
 * 
 * CODING CHALLENGE 2
 * 
 */
/* 
var jonhScore, mikeScore, divisor = 3;


jonhScore = (120 + 120 + 103) / divisor;
mikeScore = (120 + 120 + 103) / divisor;
maryScore = (100 + 120 + 103) / divisor;

if(  mikeScore > jonhScore  && mikeScore > maryScore ){
    console.log('Mike wins with '+ mikeScore + ' scores');
} else if( jonhScore > mikeScore  && jonhScore > maryScore ){
    console.log('jonh wins with '+ jonhScore + ' scores');
} else if( maryScore > jonhScore &&  maryScore > mikeScore ){
    console.log('Mary wins with '+ maryScore + ' scores');
}else if( jonhScore == mikeScore && mikeScore === jonhScore) {
    console.log('They three tied with ' +  mikeScore +'-' +  jonhScore + '-'+ maryScore +' scores');
}
 */

 /* 
 *   FUNCTIONS 
 */

/* function calculateAge( birthday ){
    let today = new Date();
    return today.getFullYear() - birthday;
}


console.log(calculateAge( 1995 ));
 */


/**
 * CODING CHANLLENGE 2 
 */

/* var calculateTip = function(bill){
    if(bill < 50){
        return 0.2 * bill;
    } else if(bill >= 50 && bill <= 200){
        return 0.15 * bill;
    } else if(bill > 200){
        return 0.10 * bill;
    }
}

let firstBill  = calculateTip(124);
let secondBill = calculateTip(48);
let thirdBill  = calculateTip(268);
let firtArray = [];
let secondtArray = [];

firtArray.push(firstBill);
firtArray.push(secondBill);
firtArray.push(thirdBill);

secondtArray.push(firstBill + 124);
secondtArray.push(secondBill + 48);
secondtArray.push(thirdBill + 268);
console.info(firtArray);
console.info(secondtArray);
 */

/* var Person = {
    name:'Javier',
    lastName: 'Quiroga',
    birthYear: 1997,
    calcAge:function(){
        let today = new Date();
        this.age = today.getFullYear() - this.birthYear; 
        
    }
}
console.log(Person);
 */


/* var John = {
    name:'john',
    mass: 70,
    height:1.7,
    calcBMI:function(){
       return this.mass / Math.pow(this.height, 2);
        
    }
}

var mark = {
    name:'mark',
    mass: 90,
    height:1.9,
    calcBMI:function(){
       return this.mass / Math.pow(this.height, 2);
        
    }
}

let users = [];
users.push(mark);
users.push(John);
console.table(users);

let isMarkHigherThanJohn = mark.calcBMI > John.calcBMI;

console.log(isMarkHigherThanJohn); */


let tipJohn = {
    bills: [124,48,268,180,42],
    calcTip:function(){
       var porcentage, billCollection = [];
       for(var i= 0; i < this.bills.length; i++){

            if( this.bills[i] < 50){
              porcentage = 0.2;
            } else if( this.bills[i] > 50 && this.bills[i] < 200 ){
                porcentage = 0.15;
            } else{
                porcentage = .1;
            }

          billCollection.push(  porcentage * this.bills[i] );
       }
       return billCollection;
    },
    finalPayment:function(){
        var tips = this.calcTip(), paidBill = [];
        for(var i = 0; i < this.bills.length; i++){
            
            paidBill.push(tips[i] + this.bills[i]);

        }
        return paidBill;
    }
}


console.table(tipJohn.bills);
console.table(tipJohn.calcTip());
console.table(tipJohn.finalPayment());
console.table('-----------------------------------------------');

function calculateTip(bills){
    var porcentage, billSum = 0;
    for(var i= 0; i < bills.length; i++){

         if( bills[i] < 100){
           porcentage = 0.2;
         } else if( bills[i] > 100 && bills[i] < 300 ){
             porcentage = 0.1;
         } else{
             porcentage = .25;
         }

       billSum+=bills[i];
    }
    return billSum / bills.length - 1;
 }

let tipMark = {
    bills: [77,375,110,45],
    finalPayment:function(){
        var tips = this.calcTip(), paidBill = [];
        for(var i = 0; i < this.bills.length; i++){
            
            paidBill.push(tips[i] + this.bills[i]);

        }
        return paidBill;
    }
}


console.log('-----------Condition--------------');


var whatFamilySpendMore = calculateTip(tipMark.bills) > calculateTip(tipJohn.bills)? 'Mark\'s family more with '+calculateTip(tipMark.bills):'Jonh\'s family more with '+ calculateTip(tipJohn.bills);

console.log(whatFamilySpendMore);