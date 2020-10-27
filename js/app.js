window.addEventListener('DOMContentLoaded', () => {
    let animacion = document.querySelector('#animacion-principal'),
        animacionT = document.querySelector('#ct1');
    animacion.style.animation = 'mover 1.5s ease-out';
    animacionT.style.animation = 'mover2 1.5s ease-out';
});

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', imagen1);

});

function imagen1() {
    let imagenN = document.querySelector('.imagen-nosotros'),
        textoN = document.querySelector('#texto-nosotros'),
        posicionOBJN = imagenN.getBoundingClientRect().top,
        alturaOBj = window.innerHeight / 3;

    // console.log(posicionOBJN);
    // console.log(scroll);
    // console.log(posicionIMG1)
    if (posicionOBJN < alturaOBj) {
        imagenN.style.opacity = '1';
        textoN.style.opacity = '1';
    }
    moverImagenes();

}

function moverImagenes() {
    //Variables para la primer imagen 
    let img1 = document.querySelector('#img1'),
        posicionIMG1 = img1.getBoundingClientRect().top,
        alturaOBj2 = window.innerHeight / 1.7;
    // Variables segunda imagen
    let img2 = document.querySelector('#img2'),
        posicionIMG2 = img2.getBoundingClientRect().top;
    //variables imagen 3
    let img3 = document.querySelector('#img3'),
        posicionIMG3 = img3.getBoundingClientRect().top;
    //condicion imagen 1
    if (posicionIMG1 < alturaOBj2) {
        img1.style.animation = 'm1 1s ease-out';
        img1.style.opacity = '1';
    }
    // condicion imagen2
    if (posicionIMG2 < alturaOBj2) {
        img2.style.opacity = '1';
        img2.style.animation = 'm2 1s ease-out';
    }
    // Condicion imagen3
    if (posicionIMG3 < alturaOBj2) {
        img3.style.opacity = '1';
        img3.style.animation = 'm3 1s ease-out';
    }
}