
//----------------------- Variable and const declaration field -----------------

let num1 = '';

let num2 = '';

let operating = false;

let result ="";

let actualOp = '';

const displayScreen = document.querySelector('#display');

const numButtons = document.querySelectorAll(".number");

const operators = document.querySelectorAll(".operator");




//----------------------- Events ------------------

//-------------Display de numeros


numButtons.forEach(button => button.addEventListener('click',function(){

    if(operating){ 
        displayScreen.textContent='';
        operating = false;
    }
   

    displayScreen.textContent+=button.textContent;
    
}));

//--------------Operaciones


operators.forEach(operand => operand.addEventListener('click', function() {   

    operating = true;

    switch(this.textContent){


        case "reset":

            reset();
            break;

        default : 

            result = getData(this.textContent);
            
            console.log(result);


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
    operating = false;
    displayScreen.textContent='';

}

function operate(a,b,operator){

    switch(operator){

        case '+':return suma(a,b);

        case '-':return resta(a,b);

        case '*':return multiplica(a,b);

        case '/':return divide(a,b);

    }

}

function getData(operator){


    if (num1 === ''){
        num1 = parseInt(displayScreen.textContent);
        actualOp = operator;
        console.log("num1: "+num1);
        return;
    }

    num2 = parseInt(displayScreen.textContent);

    console.log("num1:"+num1+" num2:"+num2+" operator:"+actualOp);

    result = operate(num1,num2,actualOp);

    displayScreen.textContent=result;

    num1 = result;
    
    actualOp=operator;

    if (actualOp === "=") num1 = '';

    console.log("operado");

    return result;

    

}
