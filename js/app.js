window.addEventListener('DOMContentLoaded', () => {
    let animacion = document.querySelector('#animacion-principal'),
        animacionT = document.querySelector('#ct1');
    animacion.style.animation = 'mover 1.5s ease-out';
    animacionT.style.animation = 'mover2 1.5s ease-out';
});

window.addEventListener('scroll', () => {
    let imagenN = document.querySelector('.imagen-nosotros'),
        textoN = document.querySelector('#texto-nosotros'),
        posicionOBJN = imagenN.getBoundingClientRect().top,
        alturaOBj = window.innerHeight / 3;
    console.log(posicionOBJN);
    // console.log(scroll);
    if (posicionOBJN < alturaOBj) {
        imagenN.style.opacity = '1';
        textoN.style.opacity = '1';
    }
});