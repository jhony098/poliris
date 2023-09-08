const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


const boxContent= document.querySelector ('#box-content');
const Alters= document.querySelector ('#alters');

// imgCelular.style.transitionDelay= '1s';

window.addEventListener("scroll", function(){
    console.log(window.scrollY);
    let pos = window.scrollY;
    /* imgCelular.style.transform=`rotate(${pos/6}deg)`; */
    if(pos <=200){
        boxContent.style.opacity= 1;
        Alters.style.marginTop = "0px";
        Alters.style.opacity = 1; 
    }else if( pos >= 20){
        boxContent.style.opacity= 0;
        Alters.style.marginTop = "100px";
        Alters.style.opacity = 0;
    }
})
