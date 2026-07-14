let manuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

manuicon.onclick = () => {
    manuicon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}