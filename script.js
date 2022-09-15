
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

    if(b === 0) return displayScreen.textContent ="Man wtf? don't divide by 0";
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
        return;
    }

    //------------ Down here i operate the already loaded numbers ---------------

    num2 = parseInt(displayScreen.textContent);

    result = operate(num1,num2,actualOp);

    displayScreen.textContent=result;

    //------------ Down Here i set num1 = result to be the new number already loaded ------------

    num1 = result;

    //------------ I set the triggering operator as the next operator value ------------
    
    actualOp=operator;

    //------------ If the triggering operator is the equal sign, theres no need to store that, so i get into the first "if" next time --------------------

    if (actualOp === "=") num1 = '';

    return result;    

}