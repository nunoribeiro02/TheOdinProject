let numArr = [];
let currentOp = '';
let num = null;
let digit = 10;
let result = 0;
let finished = false;
let float = false;

const screen = document.querySelector(".screen");
let p = document.createElement('p');
screen.appendChild(p);

function writeScreen(text){
    screen.removeChild(screen.firstChild);
    
    p.textContent = text;
    p.style.color = "white";
    p.style.fontFamily = "digital-clock-font";
    p.style.fontSize = "20px";
    p.style.margin = "8px";
    p.style.marginLeft = "auto";
    p.style.textAlign = "right";

    screen.appendChild(p);
}

function highlightButton(btn){ // Highlight when operation is to be done
    btn.style.backgroundColor = "rgb(253, 209, 37)";
}

function darkenButton(btn){ // Return to original color after operation is processed
    btn.style.backgroundColor = "rgb(255, 183, 0)";
}

function deselectButton(){
    switch (currentOp){
        case '+':
            darkenButton(btnSum);
            break;
        case '-':
            darkenButton(btnSubtract);
            break;
        case '*':
            darkenButton(btnMultiply);
            break;
        case '/':
            darkenButton(btnDivide);
            break;
    }
}

function addNumber(i){
    // Reset after equals
    if (finished && currentOp == '') {
        num = 0;
        result = 0;
        numArr = [];
        finished = false;
    }
    
    if (num == null) num = 0;
    
    if (!float) num = num * digit + i;
    else {
        num = round(num + i / digit);
        digit *= 10;
    }

    writeScreen(num);
    deselectButton();
}


const btn0 = document.querySelector(".zero");
btn0.onclick = function(){addNumber(0);}

const btn1 = document.querySelector(".one");
btn1.onclick = function(){addNumber(1);}

const btn2 = document.querySelector(".two");
btn2.onclick = function(){addNumber(2);}

const btn3 = document.querySelector(".three");
btn3.onclick = function(){addNumber(3);}

const btn4 = document.querySelector(".four");
btn4.onclick = function(){addNumber(4);}

const btn5 = document.querySelector(".five");
btn5.onclick = function(){addNumber(5);}

const btn6 = document.querySelector(".six");
btn6.onclick = function(){addNumber(6);}

const btn7 = document.querySelector(".seven");
btn7.onclick = function(){addNumber(7);}

const btn8 = document.querySelector(".eight");
btn8.onclick = function(){addNumber(8);}

const btn9 = document.querySelector(".nine");
btn9.onclick = function(){addNumber(9);}


// Operations Code
function addOperator(op, btn){
    if (num != null) numArr.push(num);
    if (numArr.length == 0) return;
    
    num = null;

    if (currentOp != '' && numArr.length == 2){ // operate than change operator
        result = operate();
        writeScreen(result);
    }

    result = 0;
    digit = 10;
    float = false;
    deselectButton();   
    currentOp = op;
    highlightButton(btn);
}

function resetVariables(){
    num = null;
    digit = 10;
    float = false;
    currentOp = '';
    finished = true;
}

function equal(){
    // Store last number
    if (num != null) numArr.push(num);
    // Reject if there aren't 2 numbers to be operated
    if (numArr.length != 2) return;

    
    // Process and Write
    result = operate();
    writeScreen(result);

    // Reset varibles
    resetVariables();
} 

function dot(){
    if (float) return;
    
    float = true;
    if (num == null) num = 0;
    writeScreen(num + ".");
}

// Clear: delete last number inputted
function clear(){
    let point = '';

    if (float && Number.isInteger(num)){ // just pressed ".", delete the "."
        float = false;
    }
    else if (float){
        // Get the number of decimal places
        let decimals = num.toString().split(".")[1].length;

        digit /= 10;
        if (decimals == 1) {
            num = Math.floor(num);
            point = '.';
        }
        else num = Math.floor(num * (10 ** (decimals -1))) / (10 ** (decimals -1));
        
    }
    else if (!float){
        num = Math.floor(num / 10);
    }

    writeScreen(num + point);
}

// allClear: reset variables, deslect buttons and write 0 to screen
function allClear(){
    deselectButton();   
    resetVariables();
    numArr = [];
    writeScreen(0);
}


function operate(){
    let res = 0;
    switch (currentOp){
        case '+':
            res = proccessSum();
            break;
        case '-':
            res = proccessSubtract();
            break;
        case '*':
            res = proccessMultiply();
            break;
        case '/':
            res = proccessDivide();
            break;
        default:
            res = num;
    }

    return round(res);
}

function round(n) {
    let roundPlaces;
    if (digit > 10) roundPlaces = digit;
    else roundPlaces = 1000;
    
    return Math.round(n * roundPlaces) / roundPlaces;
}

function proccessSum(){
    numArr[0] = numArr[0] + numArr[1];
    numArr.pop();

    return numArr[0];
}


function proccessSubtract(){
    numArr[0] = numArr[0] - numArr[1];
    numArr.pop();

    return numArr[0];
}


function proccessMultiply(){

    numArr[0] = numArr[0] * numArr[1];
    numArr.pop();

    return numArr[0];
}

function proccessDivide(){
    // Can't divide by 0
    if (numArr[1] == 0){
        writeScreen("null")
        return null;
    }

    numArr[0] = numArr[0] / numArr[1];
    numArr.pop();

    return numArr[0];
}

const btnSum = document.querySelector(".sum");
btnSum.onclick = function(e){addOperator('+', e.target);}

const btnSubtract = document.querySelector(".subtract");
btnSubtract.onclick = function(e){subtract('-', e.target);}

const btnMultiply = document.querySelector(".multiply");
btnMultiply.onclick = function(e){addOperator('*', e.target);}

const btnDivide = document.querySelector(".divide");
btnDivide.onclick = function(e){addOperator('/', e.target);}

const btnEqual = document.querySelector(".equal");
btnEqual.onclick = function(){equal();}

const btnDot = document.querySelector(".dot");
btnDot.onclick = function(){dot();}

const btnClear = document.querySelector(".clear");
btnClear.onclick = function(){clear();}

const btnAllClear = document.querySelector(".clear");
btnAllClear.onclick = function(){allClear();}

// Keyboard controls
let shiftPressed = false;

document.addEventListener('keydown', function(event) {
    switch(event.key){
        case "0":
            addNumber(0);
            break;
        case "1":
            addNumber(1);
            break;
        case "2":
            addNumber(2);
            break;
        case "3":
            addNumber(3);
            break;
        case "4":
            addNumber(4);
            break;
        case "5":
            addNumber(5);
            break;
        case "6":
            addNumber(6);
            break;
        case "7":
            addNumber(7);
            break;
        case "8":
            addNumber(8);
            break;
        case "9":
            addNumber(9);
            break;

        case "+":
            addOperator('+', btnSum);         
            break;
        case "-":
            addOperator('-', btnSubtract);
            break;
        case "*":
            addOperator('*', btnMultiply);
            break;
        case "/":
            addOperator('/', btnDivide);
            break;
        case "=":
            equal();
            break;
        case "Enter":
            equal();
            break;

        case ".":
            dot();
            break;
        case "Backspace":
            clear();
            break;
        case "Delete":
            allClear();
            break;
    }
});
