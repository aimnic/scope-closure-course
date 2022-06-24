//variables:

var a; //declarando.
var b = "b"; //inicializando.
b = "bb"; //reasignamos".
var a = "aa"; //redeclaración.

//global scope:


var fruit = "orange"; //variable global.
function showFruit(){
        console.log(fruit);
}
bestFruit();

function contruies(){
    country = 'Colombia'; 
    console.log(country);
}
contruies();
console.log(country);