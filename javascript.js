const input = document.querySelector('.center');
console.log(input.nextElementSibling);

const texto = document.getElementById('title');
texto.textContent = 'hola mundo';

//console.log(title.parentElement);

const divs = document.getElementsByTagName('div');


//for(var i=0;i<divs.length;i++){
//    if(i % 3 == 0)
//        divs[i].style.background = 'black';
//}

const inputs= document.querySelectorAll('.input input');
for(var i=0;i<inputs.length;i++){
    inputs[i].addEventListener('click',backblack(i));
    inputs[i].addEventListener('blur',backblur(i));
}

const boton = document.getElementById('button');
boton.addEventListener('dblclick',hola);

function hola(){
    console.log("si jalo esta madre");
}

function backblack(num){
    inputs[num].style.background = 'black';
}
function backblur(num){
    inputs[num].style.background = 'white';
}