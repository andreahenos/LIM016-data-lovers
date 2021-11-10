
import { filterDataDirector, filterDataYear, showData } from './data.js';
import data from './data/ghibli/ghibli.js';

/*Nav*/
const homeSection = document.getElementById("homeSection");
const movSection = document.getElementById("movSection");
const movInfSection = document.getElementById("movInfSection");

document.getElementById("navHome").addEventListener("click", function(){
    movSection.style.display="none";
    movInfSection.style.display="none";
    homeSection.style.display="block";
})
document.getElementById("navMovies").addEventListener("click", function(){
    homeSection.style.display="none";
    movInfSection.style.display="none";
    movSection.style.display="block";
})
document.getElementById("viewAll").addEventListener("click", function(){
    homeSection.style.display="none";
    movInfSection.style.display="none";
    movSection.style.display="block";
})


/*Images Carrousel */
document.addEventListener('DOMContentLoaded', ()=>{

    const imagenes = ['./images/portada1.jpg', './images/portada2.jpg', './images/portada3.jpg', './images/portada4.jpg', './images/portada5.jpg']
    let i=1;
    const img1 = document.querySelector("#img1");
    const img2 = document.querySelector("#img2");
    const divIndicadores = document.querySelector('#indicadores');
    for(let index = 0;index<imagenes.length;index++){
        const div = document.createElement('div');
        div.classList.add('circles')
        div.id = index;
        divIndicadores.appendChild(div);
        
    }
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
        
        
        if(i==imagenes.length){
            i=0;
            
        }
        setTimeout(()=>{
            img1.src = img2.src
            img2.classList.remove('active')
        },1000)
    }
    setInterval(slideshow,3000)
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

container.innerHTML = titles;

let position = 0;
const leftArrwBtn = document.getElementById("leftArrow");
leftArrwBtn.addEventListener("click", function(){
    position += 25;
    if(position >= 25){
        position = -400;
    }
    container.style.transform = `translateX(${position}%)`;
});
const rightArrBtn = document.getElementById("rightArrow");
rightArrBtn.addEventListener("click", function(){
    position += -25;
    if(position < -400){
        position = 0;
    }
    container.style.transform = `translateX(${position}%)`;
});
});


/*Cargar Data */
const sectionMovies = document.querySelector('.movies');
const filterBtnsDirector = document.querySelectorAll('.filter-btn-director');
const filterBtnsYear = document.querySelectorAll('.filter-btn-score');


window.addEventListener('DOMContentLoaded', ()=>{

    sectionMovies.innerHTML = showData(data.films);

})
sectionMovies.addEventListener('click', (e)=>{
    if(e.target.className.includes('btn-mas')){
        const movie = e.target.parentElement
        const title = movie.children[0].innerText;
        const titleMovieSelected = title.trim()

        let peli = data.films.map((movie)=>{
            if(movie.title === titleMovieSelected){
                
                    return `
                    <img class="background" src="${movie.background}">
                    <section id="infContent">
                        <img class="poster" src="${movie.poster}">
                        <section id="infBox">
                            <div id="textInf">
                                <h2>${movie.title}</h2>
                                <div id="infIcons">
                                <div><img class="icon" src="#"><p>${movie.duration}</p></div>
                                <div><img class="icon" src="#"><p>${movie.release_date}</p></div>
                                <div><img class="icon" src="#"><p>${movie.rt_score}</p></div>
                                </div>
                                <p>${movie.description}</p>
                                
                                <section id="creators">
                                <div id="director">
                                <h3>Director</h3>
                                <p>${movie.director}</p>
                                </div>
                                <div id="producer">
                                <h3>Producer</h3>
                                <p>${movie.producer}</p>
                                </div>
                                </section>
                            </div>
                        </section>
                    </section>
                    `
                
            }
        }).join("");
        document.getElementById("movGeneralInf").innerHTML = peli;
        homeSection.style.display="none";
        movSection.style.display="none";
        movInfSection.style.display="block";  
        
    }
    
})
/*Filtrar Data */
filterBtnsDirector.forEach((btn)=>{
    btn.addEventListener('click', e=>{
        const condition = e.currentTarget.dataset.id;
        sectionMovies.innerHTML = filterDataDirector(films, condition);
        
    })
});

filterBtnsYear.forEach((btn)=>{
    btn.addEventListener('click', e=>{
        const conditionMayor = e.currentTarget.dataset.mayor;
        const conditionMenor = e.currentTarget.dataset.menor;
        
        sectionMovies.innerHTML = filterDataYear(films, conditionMayor, conditionMenor);
        
    })
});











