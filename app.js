let btn1=document.querySelector(".btn1");
let btn3=document.querySelector(".btn3");
let btn2=document.querySelector(".btn2");

let counter=0;
function add() {
    let btn2=document.querySelector(".btn2");
    counter++;
    btn2.innerHTML = counter;
}   
function minus() {
    let btn2 = document.querySelector(".btn2");
     counter--;
     btn2.innerHTML=counter;
}
function reset() {
    let btn2= document.querySelector(".btn2");
    counter = 0;
    btn2.innerHTML=counter;
}