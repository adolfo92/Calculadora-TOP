
//----------------------- Variable and const declaration field -----------------

let num1 = '';

let num2 = '';

const displayScreen = document.querySelector('#display');

const numButtons = document.querySelectorAll(".number");

const operators = document.querySelectorAll(".operator");


//----------------------- Events ------------------

//-------------Display de numeros


numButtons.forEach(button => button.addEventListener('click',function(){
   

    displayScreen.textContent+=button.textContent;
    
}));

//--------------Operaciones


operators.forEach(operand => operand.addEventListener('click', function() {   


    switch(this.textContent){


        case "reset":

            reset()

        default : 

            num1 = parseInt(displayScreen.textContent);           


    }

}))

//------------ Function declaration field -------------------

function suma(a,b){
    return a+b;
}
function resta(a,b){
    return a-b;
}
function multiplica(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

function reset(){
    num1 = '';
    num2 = '';
    displayScreen.textContent='';

}

function operate(a,b,operator){

    switch(operator){

        case '+':return suma(a,b);

        case '-':return resta(a,b);

        case '*':return multiplica(a,b);

        case '/':return divide(a,b);

        case `=`:

    }

}
