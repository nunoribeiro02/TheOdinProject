const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});


function alertFunction() {
  alert("YAY! YOU DID IT!");
}

const btn3 = document.querySelector('#btn3');
btn3.onclick = alertFunction;

const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', alertFunction);

const btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', function (e) {
  console.log(e);
});
btn5.addEventListener('click', function (e) {
  console.log(e.target);
});

const btn6 = document.querySelector('#btn6');
btn6.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});


const buttons = document.querySelectorAll('#container2 .btn');
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});