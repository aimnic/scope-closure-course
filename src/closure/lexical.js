const globalVariable = 0;

function anyFunction () {
    const anyNumber = 1;
    console.log(globalVariable);


    function parent(){ //inner function
        const innerVariable = 2;
        console.log(anyNumber);
        console.log(globalVariable);

        function child(){
            console.log(innerVariable);
            console.log(anyNumber);
            console.log(globalVariable);
        }
        child();
    }

    parent();
}

anyFunction();