let menuVisible = false;
//Función que oculta o muestre el menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //ocultar el menu una vez que selecciono una opción
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

//Funcion de las Habilidades
function efectoHabilidades(){
    var skills= document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("SQL");
        habilidades[1].classList.add("Python");
        habilidades[2].classList.add("Excel");
        habilidades[3].classList.add("PowerBI");
        habilidades[4].classList.add("Tableau");
        habilidades[5].classList.add("Comunicación");
        habilidades[6].classList.add("Trabajo");
        habilidades[7].classList.add("Análisis");
        habilidades[8].classList.add("Responsabilidad");
        habilidades[9].classList.add("Iniciativa");
    }
}

// Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}