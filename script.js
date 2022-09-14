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

function operate(a,b,operator){

    switch(operator){

        case '+':return suma(a,b);

        case '-':return resta(a,b);

        case '*':return multiplica(a,b);

        case '/':return divide(a,b);

        case `=`:

    }

}


//----------------------- Events ------------------

//          Display de numeros
const displayScreen = document.querySelector('#display');

const numButtons = document.querySelectorAll(".number");

numButtons.forEach(button => button.addEventListener('click',function(){
    displayScreen.textContent+=button.textContent;
}));

//          Operaciones

const operators = document.querySelectorAll(".operator");

operators.forEach(operand => operand.addEventListener('click', function(operator) {

    switch(operator.textContent){


        case 'reset': 
            //reset(); // Pendiente hacer la funcion
            break;

        default : 
            const num1 = parseInt(displayScreen.textContent);

            console.log(num1+typeof(num1));
            


    }

})
)

