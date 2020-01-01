// const myHeading = document.querySelector('h1');
// myHeading.textContent='Hello World';



let myImage=document.querySelector('img');
myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc==='/image/flower.ico')
    myImage.setAttribute('src','/image/laptop.jpg');
    else
    myImage.setAttribute('src','/image/flower.ico');
}
let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');
function setUserName(){
    let myName=prompt('Please enter your name: ');
    localStorage.setItem('name',myName);
    myHeading.textContent='Mozilla is cool, '+myName;
    
}
if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName=localStorage.getItem('name');
    myHeading.textContent='Mozilla welcomes you, '+storedName;
}
myButton.onclick=function(){
    setUserName();
}


// document.querySelector('img').onclick=function(){
//     alert('ouch! stop doing that');
// }