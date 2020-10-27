window.addEventListener('DOMContentLoaded', () => {
    let animacion = document.querySelector('#animacion-principal'),
        animacionT = document.querySelector('#ct1');
    animacion.style.animation = 'mover 1.5s ease-out';
    animacionT.style.animation = 'mover2 1.5s ease-out';
});

const btn_cerrar = document.querySelector('#cerrar'),
    navegacion = document.querySelector('.navegacion'),
    nav2 = document.querySelector('#navegacion');
// console.log(nav2);
// console.log(nav2.target.classList);

// Agregando evento al presionar btn_cerrar para activar o desactivar menu responsivo 
btn_cerrar.addEventListener('click', e => {
    e.preventDefault();
    if (nav2.classList.contains('navegacion')) {
        nav2.classList.add('navegacion-activa');
        nav2.classList.remove('navegacion');
        nav2.style.animation = 'menu 1s ease-out';
    } else {
        nav2.classList.remove('navegacion-activa');
        nav2.classList.add('navegacion');
        navegacion.style.animation = 'menu2 1s ease-out';
    }
})