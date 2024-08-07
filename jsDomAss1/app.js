/* -------------------------------------------------------------------------- */
/*                                      1                                     */
/* -------------------------------------------------------------------------- */

const updateHeader=document.querySelector('.header');
updateHeader.style.backgroundColor='#FF4500';
updateHeader.style.color='white';
updateHeader.style.padding='0.2rem';
updateHeader.style.textAlign='center';

/* -------------------------------------------------------------------------- */
/*                                      2                                     */
/* -------------------------------------------------------------------------- */
const changeTitle=document.getElementById('title');
changeTitle.textContent='Javascript Dom Assignment 1';

/* -------------------------------------------------------------------------- */
/*                                      3                                     */
/* -------------------------------------------------------------------------- */

const navItem=document.querySelector('.nav-item');
navItem.style.display='flex'
navItem.style.justifyContent='center'
navItem.style.gap='0.5rem'
navItem.style.listStyleType='none'

/* -------------------------------------------------------------------------- */
/*                                      4                                     */
/* -------------------------------------------------------------------------- */

const inputName=document.querySelector('#username')
inputName.setAttribute('value','Anthony')
const inputPassword=document.querySelector('#password')
inputPassword.setAttribute('value','123456')
inputPassword.removeAttribute('type')

/* -------------------------------------------------------------------------- */
/*                                      5                                     */
/* -------------------------------------------------------------------------- */

const buton=document.querySelector('.btn')
buton.textContent='Giriş Yap'
buton.style.border='none'
buton.style.cursor='pointer'
buton.style.padding='0.6rem'
buton.style.backgroundColor='#C0EFC0'
buton.style.borderRadius='10%'

/* -------------------------------------------------------------------------- */
/*                                      6                                     */
/* -------------------------------------------------------------------------- */

document.getElementById('projects').querySelector('h3').innerHTML=`Js Dom Projects`

/* -------------------------------------------------------------------------- */
/*                                      7                                     */
/* -------------------------------------------------------------------------- */

const myProjects = ["Hello World!","Guess Number","Checkout Page","Gelir-Gider Projesi","Api Projects"];

myProjects.forEach((word)=>{
document.querySelector('.liste').innerHTML+=`<li>${word}</li>`})





