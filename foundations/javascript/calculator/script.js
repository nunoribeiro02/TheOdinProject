let numArr = [];
let currentOp = '';
let num = 0;
let digit = 10;
let result = 0;
let finished = false;

const screen = document.querySelector(".screen");
let p = document.createElement('p');
screen.appendChild(p);

function writeScreen(text){
    console.log("writting: " + text)
    screen.removeChild(screen.firstChild);
    
    p.textContent = text;
    p.style.color = "white";
    
    console.log("text: " + text);
    screen.appendChild(p);
}

function addNumber(i){
    // Reset after equals
    if (finished && currentOp == '') {
        num = 0;
        result = 0;
        numArr = [];
        finished = false;
    }
    
    num = num * digit + i;

    writeScreen(num);
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


function sum(){
    if (num != 0) numArr.push(num);
    num = 0;

    if (currentOp != ''){
        result = operate();
        writeScreen(result);
        currentOp = '';
    }

    result = 0;
    currentOp = '+';
}   


function subtract(){
    if (num != 0) numArr.push(num);
    num = 0;

    if (currentOp != ''){
        result = operate();
        writeScreen(result);
        currentOp = '';
    }

    result = 0;
    currentOp = '-';
}


function multiply(){
    if (num != 0) numArr.push(num);
    num = 0;

    if (currentOp != ''){
        result = operate();
        writeScreen(result);
        currentOp = '';
    }

    result = 0;
    currentOp = '*';
} 


function divide(){
    if (num != 0) numArr.push(num);
    num = 0;

    if (currentOp != ''){
        result = operate();
        writeScreen(result);
        currentOp = '';
    }

    result = 0;
    currentOp = '/';
} 

function equal(){
    console.log("equal");

    // Store last number
    numArr.push(num);
    
    // Process and Write
    result = operate();
    console.log(result)
    writeScreen(result);

    // Reset varibles
    num = 0;
    currentOp = '';
    finished = true;
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

    console.log("res" + res);
    return res;
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

    }

    numArr[0] = numArr[0] / numArr[1];
    numArr.pop();

    return numArr[0];
}


const btnSum = document.querySelector(".sum");
btnSum.onclick = function(){sum();}

const btnSubtract = document.querySelector(".subtract");
btnSubtract.onclick = function(){subtract();}

const btnMultiply = document.querySelector(".multiply");
btnMultiply.onclick = function(){multiply();}


const btnDivide = document.querySelector(".divide");
btnDivide.onclick = function(){divide();}


const btnEqual = document.querySelector(".equal");
btnEqual.onclick = function(){equal();}