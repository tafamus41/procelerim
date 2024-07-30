
const body=document.querySelector('body')
const colorText=document.querySelector('#colorText')
const clickButon=document.querySelector('.btn-click')
const mouseButon=document.querySelector('.btn-over')

clickButon.addEventListener('click', generateAllColors);
mouseButon.addEventListener('mouseover', generateAllColors);


function generateAllColors(){
    let hex='#'+ Math.floor(Math.random()*16777215).toString(16);
    colorText.innerText=hex;
    body.style.backgroundColor=hex;
}

 



