'use strict'

const loginButton = document.querySelector('.loginButton');

loginButton.addEventListener('click', () => {
    window.location.href = './login_usuario.html'
    console.log('clicou');
})