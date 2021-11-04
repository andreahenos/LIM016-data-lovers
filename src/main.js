/* import { example } from './data.js'; */
// import data from './data/lol/lol.js';
import { filterData, showData } from './data.js';
import data from './data/ghibli/ghibli.js';


/* console.log(example, data); */

/*Images Carrousel */
addEventListener('DOMContentLoaded', ()=>{
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



/* console.log(data.films[0]); */


