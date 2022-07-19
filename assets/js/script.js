// déclaration des variables

var imgDouglas = document.querySelector('.logo');
var menu = document.querySelector("#navbar");
var burger = document.getElementById("iconBurger");
var pageLoading = document.querySelector(".firstPage");
var secondPage = document.querySelector(".violet");
var card1F=document.querySelector(".card1front");
var card1B=document.querySelector(".card1back");
var card1=document.querySelector("#card1")







// /écoute du bouton valider pour entrer dans le CV


imgDouglas.addEventListener('click', function(){

    
    pageLoading.style.display = 'none';
    menu.style.display = 'block';
    secondPage.style.display = 'block';
    
})




// remplacement bckgroung badge illustration

var divBckImg = document.getElementById('backgroundImg');
var divBckImg2 = document.getElementById('backgroundImg2');
var divBckImg3 = document.getElementById('backgroundImg3');


divBckImg.addEventListener('click', function() {
    divBckImg.style.backgroundImage = "url('assets/img/illuback.svg')"
    divBckImg2.style.backgroundImage = "url('assets/img/uifront.svg')"
    divBckImg3.style.backgroundImage = "url('assets/img/mdfront.svg')"
})




divBckImg2.addEventListener('click', function() {
    divBckImg2.style.backgroundImage = "url('assets/img/uiback.svg')"
    divBckImg.style.backgroundImage = "url('assets/img/illufront.svg')"
    divBckImg3.style.backgroundImage = "url('assets/img/mdfront.svg')"
    
})



divBckImg3.addEventListener('click', function() {
    divBckImg3.style.backgroundImage = "url('assets/img/mdback.svg')"
    divBckImg.style.backgroundImage = "url('assets/img/illufront.svg')"
    divBckImg2.style.backgroundImage = "url('assets/img/uifront.svg')"
})






// apparition des blocs Expériences 


// Création d'un tableau contenant tous les éléménents du DOM ayant pour class "bloc".
var blocs = document.querySelectorAll('.bloc');

// Ici on va écouter le défilement de l'ascenseur sur la fenêtre.
window.addEventListener('scroll', function () {

    // On vérifie si la position (en px) de l'ascenseur est supérieure à 500px (point à laquel mon animation doit se déclencher)
    if (window.scrollY >2000) {

        // Je règle l'opacité de chacun de mes éléments sur 1 afin de les rendre visible.
        for(bloc of blocs) {
            bloc.style.opacity = 1;

            // Avec l'utilisation d'une class => on ajoute la classe blocAppear ayant la propriété CSS opacity : 1;
            // card.classList.add('cardAppear');
        }

    // Si la valeur du défilement vertical est inférieure ou égale à 500
    } else {

        // Pour chaque élément, je règle l'opacité sur 0 afin qu'ils disparaissent.
        // A noter que la transition s'applique également lorsque les éléments disparaissent
        for(bloc of blocs) {
            bloc.style.opacity = 0;

            // Avec l'utilisation d'une class => on retire la classe cardAppear ayant la propriété CSS opacity : 1;
            // card.classList.remove('cardAppear');
        }

    }
})

