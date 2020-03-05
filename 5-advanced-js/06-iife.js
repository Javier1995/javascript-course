//Lecture:    IIFE

//Private function
var luck = 5;
(function (googLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - googLuck);
})(luck);