function clickBody() {
    console.log('click');
}
 document.querySelector('.box').addEventListener('click', clickBody);


console.log(window.cutewidth);
console.log(window.name);
//window.open('http://www.daum.net');

var debug = document.getElementById('debug');
//console.log(debug);

var box = document.querySelector('#debug');
console.log(box);

//var box = document.querySelector('.box');
//var box2 = document.querySelectorAll('.box');
// console.log(box2);
var div =  document.createElement('div');
console.log(div);
div.style.border = '1px solid #000';
div.innerHTML = 'Hello!';

document.body.appendChild(div);


const span = document.createElement('spen');
const textNode = document.createTextNode('Hello');
span.appendChild(textNode);
document.querySelector('#debug').appendChild(span);

var debug=document.getElementById('debug');
//debug.remove();


