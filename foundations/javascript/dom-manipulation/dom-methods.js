const p = document.createElement('p');
p.textContent = "Hey I'm red!";
p.style.color  = 'red';

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';

const div = document.createElement('div');
div.style.border = 'thick solid '

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div!";
div.appendChild(h1);

const pDiv = document.createElement('p');
pDiv.textContent = "ME TOO!";
div.appendChild(pDiv);

const container = document.querySelector('#container');
container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);


