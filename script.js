
//----------------------- Variable and const declaration field -----------------

let num1 = '';

let num2 = '';

let actualOp = '';

let operating = false;

const allButtons = document.querySelectorAll(`button`);

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


        case "AC":

            reset();
            break;

        case "Del":
            let text= Array.from(displayScreen.textContent);
            text.pop();
            displayScreen.textContent= text.join('');
            break;

        default : 

            getData(this.textContent);


    }

}))

allButtons.forEach(button => {
    button.addEventListener('mouseover',function(){
        this.style.borderColor = 'grey';
    });
    button.addEventListener('mouseout',function(){
        this.style.borderColor = 'rgb(255, 251, 215)';
    })
    button.addEventListener('mousedown',function(){
        this.style.fontSize = '15px';
    })
    button.addEventListener('mouseup',function(){
        this.style.fontSize = '20px';
    })


})

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
        num1 = parseFloat(displayScreen.textContent);
        actualOp = operator;
        return;
    }

    //Down here i operate the already loaded numbers

    num2 = parseInt(displayScreen.textContent);

    num1 = operate(num1,num2,actualOp); //Here i set num1 = result to be the new number already loaded 

    if (!Number.isInteger(num1)){
        displayScreen.textContent=num1.toFixed(2);
    } else{
        displayScreen.textContent=num1;
    }    
    
    actualOp = operator; //I set the triggering operator as the next operator value

    if (actualOp === "=") num1 = '';  //If the triggering operator is the equal sign, theres no need to store that, so i get into the first "if" next time  

}

