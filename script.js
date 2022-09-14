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

    }

}


//----------------------- Events ------------------

const displayScreen = document.querySelector('#display');

const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener('click',function(){
    displayScreen.textContent+=button.textContent;
}));