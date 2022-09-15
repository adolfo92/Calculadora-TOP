
//----------------------- Variable and const declaration field -----------------

let num1 = '';

let num2 = '';

let operating = false;

const displayScreen = document.querySelector('#display');

const numButtons = document.querySelectorAll(".number");

const operators = document.querySelectorAll(".operator");




//----------------------- Events ------------------

//-------------Display de numeros


numButtons.forEach(button => button.addEventListener('click',function(){

    if(operating){ 
        displayScreen.textContent='';
        let operating = false;
    }
   

    displayScreen.textContent+=button.textContent;
    
}));

//--------------Operaciones


operators.forEach(operand => operand.addEventListener('click', function() {   

    operating = true;

    switch(this.textContent){


        case "reset":

            reset()

        default : 

            let result = getData(this.textContent);
            
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

        case `=`:

    }

}

function getData(operator){

    if (operator==='=') return num1;

    if (num1 === ''){
        num1 = parseInt(displayScreen.textContent);
    }

    else if(num2 ===''){

    }

    else{
       num1 = operate(num1,num2,operator)

       num2 = '';

       return num1;

    }
    

}
