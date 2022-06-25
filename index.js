function add(x, y){
    if (multipleOperations == false){
        screen.innerHTML = x + y;
        storedValue = screen.innerHTML;
        currentValue = "";
        numericalOperator = "";
    }
    else{
        storedValue = x + y;
        currentValue = "";
        numericalOperator = operatorHolder;
    }
}

function subtract(x, y){
    if (multipleOperations == false){
        screen.innerHTML = x - y;
        storedValue = screen.innerHTML;
        currentValue = "";
        numericalOperator = "";
    }
    else{
        storedValue = x - y;
        currentValue = "";
        numericalOperator = operatorHolder;
    }
}

function multiply(x, y){
    if (multipleOperations == false){
        screen.innerHTML = x * y;
        storedValue = screen.innerHTML;
        currentValue = "";
        numericalOperator = "";
    }
    else{
        storedValue = x * y;
        currentValue = "";
        numericalOperator = operatorHolder;
    }
}

function divide(x, y){
    if(y == 0){
        return "You cannot divide by zero."
    }
    else{
        if (multipleOperations == false){
            screen.innerHTML = x / y;
            storedValue = screen.innerHTML;
            currentValue = "";
            numericalOperator = "";
        }
        else{
            storedValue = x / y;
            currentValue = "";
            numericalOperator = operatorHolder;
        }
    }
}


function innerPower(x, y){
    if(y == 0){
        return result = 1;
    }
    else{
        result = x;
        for(i = 1; i < y; i++){
            result *= x;
        }
        return result;
    }
}

function power(x,y){
    if (multipleOperations == false){
        innerPower(x,y);
        screen.innerHTML = result;
        storedValue = screen.innerHTML;
        currentValue = "";
        numericalOperator = "";
    }
    else{
        innerPower(x,y);
        storedValue = result;
        currentValue = "";
        numericalOperator = operatorHolder;
    }
}

// *************************************************************

function operate(operator, x, y){
    if(operator == 'add'){
        add(x, y);
    }
    else if(operator == 'subtract'){
        subtract(x, y);
    }
    else if(operator == 'multiply'){
        multiply(x, y);
    }
    else if(operator == 'divide'){
        divide(x, y);
    }
}



let storedValue = "";
let currentValue = "";
let numericalOperator = ""; 
let operatorHolder = ""; //holds second operator for multiple calculations 
let lastButtonOperator = false;

const screen = document.getElementById('screen');

// function to populate display

function displayNum(x){
    x = x.toString();
    if(x == ''){
    screen.innerHTML = screen.innerHTML + ' ' + x;
    }
}

// function to store value
function storeTheValue(x){
    if (numericalOperator == ""){
        storedValue +=  x;
    }
    else {
        currentValue += x;
    }
}

// event listeners for number buttons

const buttons = document.querySelectorAll('.num');

buttons.forEach(button => {
    button.addEventListener('click', function handleClick(event){
        displayNum(button.innerHTML);
        storeTheValue(button.innerHTML);
        lastButtonOperator = false;
    })
});

// event listeners for operators

const operators = document.querySelectorAll('.operate');

operators.forEach(operator => {
    operator.addEventListener('click', function handleClick(event){
        if(lastButtonOperator == false){
            if(storedValue != ""){
                displayNum(operator.innerHTML);

                if (numericalOperator == ""){
                    numericalOperator = operator.innerHTML;
                    lastButtonOperator = true;
                }
                else{
                    multipleOperations = true;
                    storedValue = parseInt(storedValue);
                    currentValue = parseInt(currentValue);
                    operatorHolder = operator.innerHTML;

                    if(numericalOperator == 'X'){
                        multiply(storedValue, currentValue);
                    }
                    else if(numericalOperator == '-'){
                        subtract(storedValue, currentValue);
                    }
                    else if(numericalOperator == '+'){
                        add(storedValue,currentValue);
                    }
                    else if(numericalOperator == '÷'){
                        divide(storedValue,currentValue);
                    }
                    lastButtonOperator = true;
                }
            }
            else{
                numericalOperator = "";
            }
        }
    }
    )
});

// function to clear display

const clear = document.getElementById('clear');

clear.addEventListener('click', function clearDisplay(event){
    screen.innerHTML = "";
    storedValue = ""; 
    currentValue = "";
    numericalOperator = "";
    lastButtonOperator = false;
});

// equals (=) button

const equals = document.getElementById('equals');

equals.addEventListener('click', function performOperation(event){
    
    if(storedValue != "" && currentValue != "" && numericalOperator != ""){
        storedValue = parseInt(storedValue);
        currentValue = parseInt(currentValue);
        lastButtonOperator = false;
        multipleOperations = false;

        if(numericalOperator == 'X'){
            multiply(storedValue, currentValue);
        }
        else if(numericalOperator == '-'){
            subtract(storedValue, currentValue);
        }
        else if(numericalOperator == '+'){
            add(storedValue, currentValue);
        }
        else if(numericalOperator == '÷'){
            divide(storedValue, currentValue);
        }
        else if(numericalOperator == '^'){
            power(storedValue, currentValue);
        }
    }
    
    
    
});

