const casesVertes = document.querySelectorAll('.mini-item');
const date        = document.getElementById('date');

//Copyright year
const annee      = new Date().getFullYear();
date.textContent = annee;

for (var i=0; i< casesVertes.length; i++){
    casesVertes[i].textContent = (i+1);
}

const hamburger = document.querySelector('.hamburger');
const navMenu   = document.querySelector('ul');

hamburger.addEventListener('click', ()=>{
    navMenu.classList.toggle('active');
})
