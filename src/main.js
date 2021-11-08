
import { filterData, showData } from './data.js';
import data from './data/ghibli/ghibli.js';

/*Nav*/
const homeSection = document.getElementById("homeSection");
const movSection = document.getElementById("movSection");

document.getElementById("navHome").addEventListener("click", function(){
    movSection.style.display="none";
    homeSection.style.display="block";
})
document.getElementById("navMovies").addEventListener("click", function(){
    homeSection.style.display="none";
    movSection.style.display="block";
})
document.getElementById("viewAll").addEventListener("click", function(){
    homeSection.style.display="none";
    movSection.style.display="block";
})

/*Images Carrousel */
document.addEventListener('DOMContentLoaded', ()=>{

    const imagenes = ['./images/portada1.jpg', './images/portada2.jpg', './images/portada3.jpg', './images/portada4.jpg', './images/portada5.jpg']
    let i=1;
    const img1 = document.querySelector("#img1");
    const img2 = document.querySelector("#img2");
    const progresssBar = document.querySelector('#progress-bar');
    const divIndicadores = document.querySelector('#indicadores');
    let porcentaje_base = 100/imagenes.length;
    let porcentaje_actual = porcentaje_base;

    for(let index = 0;index<imagenes.length;index++){
        const div = document.createElement('div');
        div.classList.add('circles')
        div.id = index;
        divIndicadores.appendChild(div);
    }
    progresssBar.style.width = `${porcentaje_base}%`
    img1.src = imagenes[0];
    const circulos = document.querySelectorAll('.circles');
    circulos[0].classList.add('resaltado');

    const slideshow = ()=>{
        img2.src = imagenes[i];
        const circulo_actual = Array.from(circulos).find(el=>el.id== i);
        Array.from(circulos).forEach(cir=>cir.classList.remove('resaltado'))
        circulo_actual.classList.add('resaltado')
        img2.classList.add('active');
        i++;
        porcentaje_actual += porcentaje_base
        progresssBar.style.width = `${porcentaje_actual}%`
        if(i==imagenes.length){
            i=0;
            porcentaje_actual = porcentaje_base - porcentaje_base;
        }
        setTimeout(()=>{
            img1.src = img2.src
            img2.classList.remove('active')
        },1000)
    }
    setInterval(slideshow,4000)
})

// Movie slider
window.addEventListener("load", function(){
const container = document.getElementById("container");
const titles = data.films.map((item)=>{
    return `
    <section class="slideBox">
        <img class="moviePoster" src="${item.poster}">
        <div class="selectionPoster">
        </div>
        <div class="movieTitle">
            <p>${item.title}</p>
        </div>
    </section>
    `
}).join("");
console.log(titles);
container.innerHTML = titles;

let position = 0;
const leftArrwBtn = document.getElementById("leftArrow");
leftArrwBtn.addEventListener("click", function(){
    position += 25;
    if(position >= 25){
        position = -400;
    };
    container.style.transform = `translateX(${position}%)`;
});
const rightArrBtn = document.getElementById("rightArrow");
rightArrBtn.addEventListener("click", function(){
    position += -25;
    if(position < -400){
        position = 0;
    };
    container.style.transform = `translateX(${position}%)`;
});
});




/*Cargar Data */

const {films} = data;

const filterBtnsDirector = document.querySelectorAll('.filter-btn');
filterBtnsDirector.forEach((btn)=>{
    btn.addEventListener('click', e=>{
        filterData(films, e);
        
    })
})

window.addEventListener('DOMContentLoaded', ()=>{
    displayMenuMovies(films);
})


function displayMenuMovies(menuItems){
    showData(menuItems);
      
}




