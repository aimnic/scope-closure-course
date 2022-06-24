function fruits(){
    if(true){
        var fruitOne = 'Apple'; //function scope
        let fruitTwo = 'Banana'; //block scope
        let fruitThree = 'Kiwi' //block scope
        console.log(fruitTwo);
        console.log(fruitThree);
    }
    console.log(fruitOne);
    console.log(fruitTwo);
    console.log(fruitThree);

}

fruits();