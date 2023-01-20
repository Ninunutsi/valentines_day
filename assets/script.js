let yes = document.querySelector("#yes")
let no = document.querySelector("#no")

no.addEventListener('click', change);

function change(){
    let i =Math.abs(Math.floor(Math.random()*window.innerWidth-100))
    let j = Math.abs(Math.floor(Math.random()*window.innerHeight-100));
    no.style.left = i+'px';
    no.style.top = j+"px";
}

yes.addEventListener('click', msg);

function msg(){
    alert("vashaaaa <333 !!!! \n ai papiiii")
}