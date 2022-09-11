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

    if(operator ==='+') return suma(a,b);
    if(operator ==='-') return resta(a,b);
    if(operator ==='*') return multiplica(a,b);
    if(operator ==='/') return divide(a,b);

}
