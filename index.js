const element = document.getElementById("main");

document.getElementById('main').remove();

const newHeader = document.createElement('h1');

newHeader.id = 'victory';

const yourName = "Victor Maina";
newHeader.textContent = `${yourName} is the champion`;

document.body.appendChild(newHeader);
