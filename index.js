const casesVertes = document.querySelectorAll('.mini-item');

for (var i=0; i< casesVertes.length; i++){
    casesVertes[i].textContent = (i+1);
}

const hamburger = document.querySelector('.hamburger');
const navMenu   = document.querySelector('ul');

console.log(navMenu);
hamburger.addEventListener('click', ()=>{
    navMenu.classList.toggle('active');
})
