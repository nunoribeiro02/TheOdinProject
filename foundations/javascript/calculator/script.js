let numArr = [];
let num = 0;
let digit = 10;
let result = "";

const screen = document.querySelector(".screen");
let p = document.createElement('p');
screen.appendChild(p);

function writeScreen(text){
    screen.removeChild(screen.firstChild);
    
    p.textContent = text;
    p.style.color = "white";
    screen.appendChild(p);
}

function addNumber(i){
    num = num * digit + i;
    result += i;

    writeScreen(result);
    console.log(num);
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
    numArr.push(num);
    result += " + ";
    num = 0;

    writeScreen(result);
    console.log(result);
}   


function equal(){
    numArr.push(num);

    res = 0;
    num = 0;
    for (let n in numArr){
        res += numArr[n];
        console.log(numArr[n]);
        
    }

    result = res;
    writeScreen(result);
    console.log(result);
}   

const btnSum = document.querySelector(".sum");
btnSum.onclick = function(){sum();}

const btnEqual = document.querySelector(".equal");
btnEqual.onclick = function(){equal();}