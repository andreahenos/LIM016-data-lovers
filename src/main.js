/* eslint-disable no-undef */
import { filterDataDirector, filterDataScore, filterDataYear} from './data.js';
import data from './data/ghibli/ghibli.js';
import dataRecaudation from './dataMoviePopular.js'

/*Nav items*/
const homeSection = document.getElementById("homeSection");
const movSection = document.getElementById("movSection");
const movInfSection = document.getElementById("movInfSection");
const movGraphics = document.getElementById('movGraphics');

const movCarrousel = document.querySelector(".slide-track");
const sectionMovies = document.querySelector('.movies');

window.addEventListener('DOMContentLoaded', ()=>{
    sectionMovies.innerHTML = showData(data.films);
    movSection.style.display = "none";
    movGraphics.style.display = "none";
    movCarrousel.innerHTML = showMovieCarrousel(data.films)
})

document.getElementById("navHome").addEventListener("click", function(){
    movSection.style.display="none";
    movInfSection.style.display="none";
    movGraphics.style.display = "none";
    homeSection.style.display="block";

})

document.getElementById("navMovies").addEventListener("click", function(){
    homeSection.style.display="none";
    movInfSection.style.display="none";
  movGraphics.style.display = "none";
    movSection.style.display="block";
    /*Refrescar */
    sectionMovies.innerHTML = showData(data.films);
    menuFilter.style.display = "none";
    iconClose.forEach((icon) => {
      icon.click();
    })

})

document.getElementById("navGraphics").addEventListener("click", function () {
  movSection.style.display = "none";
  movInfSection.style.display = "none";
  homeSection.style.display = "none";
  movGraphics.style.display = "block";

})

document.getElementById("btnViewAll").addEventListener("click", ()=>{
    homeSection.style.display="none";
    movInfSection.style.display="none";
    movSection.style.display="block";

})

/*Carrousel Home Arriba */
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


/*Carousel of poster movies*/
function showMovieCarrousel(data){
    let displayMovies = data.map((movie)=>{
        return `
            <div class="slide">
                <img src=${movie.poster} alt=${movie.title}>
            </div>
        `
    })

    displayMovies = displayMovies.join("");
     return displayMovies
}
movCarrousel.innerHTML = showMovieCarrousel(data.films)


/*Mov section Information*/
const showData = (menuItems) =>{
    let displayMovies = menuItems.map((movie)=>{
    return `
    <article class="movie">
        <div class="figure">
            <img src="${movie.poster}" class="img-movie">
            <div class="capa">
                <div class="cont-title">
                    <h3>${movie.title}</h3>
                </div>

                <div class="cont-span">
                    <p>⭐ ${movie.rt_score}</p>
                    <p>🎥 ${movie.release_date}</p>
                </div>
                <div class="description">
                    <p>${movie.description}</p>
                </div>
                <a class="btn-mas">More details</a>
            </div>
        </div>
    </article>
    `
    })

    displayMovies = displayMovies.join("");
    return displayMovies;
}


/*More Information Section*/
sectionMovies.addEventListener('click', (e)=>{
    if(e.target.className.includes('btn-mas')){
        const movie = e.target.parentElement
        const title = movie.children[0].innerText;
        const titleMovieSelected = title.trim()

        let movInf = data.films.map((movie)=>{
            if(movie.title === titleMovieSelected){
                    return `
                    <div class="cont-btn-close">
                        <i class="fas fa-times btn-close"></i>
                    </div>
                    <img class="background" src="${movie.background}">
                    <section id="infContent">
                     <img class="poster" src="${movie.poster}">
                      <section id="infBox">
                          <div id="textInf">
                             <h2>${movie.title}</h2>
                             <div id="infIcons">
                                 <div><img class="icon" src="./images/clock.png"><p>${movie.duration}</p></div>
                                 <div><img class="icon" src="./images/calendar.png"><p>${movie.release_date}</p></div>
                                 <div><img class="icon" src="./images/star.png"><p>${movie.rt_score}</p></div>
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
        document.getElementById("movGeneralInf").innerHTML = movInf;


        let peopleData =  data.films.map((movie)=>{
            if(movie.title === titleMovieSelected){
                let characterData = movie.people.map((character)=>{
                    return `
                     <section class="character">
                         <section class="characterName">
                            <img class="photo" src="${character.img}">
                            <h4>${character.name}</h4>
                         </section>

                         <section class="characterData">
                            <section>
                            <div>
                                <img class="iconInf" src="./images/gender.png">
                                <div class="category">
                                    <h4>Gender</h4>
                                    <p>${character.gender}</p>
                                </div>
                            </div>
                            <hr/>
                            <div>
                                <img class="iconInf" src="./images/age.png">
                                <div class="category">
                                    <h4>Age</h4>
                                    <p>${character.age}</p>
                                </div>
                            </div>
                            <hr/>
                            <div>
                                <img class="iconInf" src="./images/eye.png">
                                <div class="category">
                                    <h4>Eye color</h4>
                                    <p>${character.eye_color}</p>
                                </div>
                            </div>
                            <hr/>
                            <div>
                                <img class="iconInf" src="./images/hair.png">
                                <div class="category">
                                    <h4>Hair color</h4>
                                    <p>${character.hair_color}</p>
                                </div>
                            </div>
                            <hr/>
                            <div>
                                <img class="iconInf" src="./images/specie.png">
                                <div class="category">
                                    <h4>Specie</h4>
                                    <p>${character.specie}</p>
                                </div>
                            </div>
                            </section>
                         </section>
                    </section>
                     `
                }).join("");
             return characterData;
            }
        }).join("");

        document.getElementById("peopleInf").innerHTML = peopleData;

        let locationsData =  data.films.map((movie)=>{
            if(movie.title === titleMovieSelected){
                let locationData = movie.locations.map((location)=>{
                    return `
                     <div class="card-location">
                        <div class="card-image-location">
                            <img src=${location.img} >
                        </div>
                        <div class="card-text-location">
                            <h3>${location.name}</h3>
                            <p><span>Climate: </span>${location.climate}<p/>
                            <p><span>Terrain: </span>${location.terrain}<p/>
                            <p><span>Surface: </span>${location.surface_water}<p/>
                            <p><span>Residents: </span>${location.residents[0]}<p/>
                        </div>
                     </div>
                     `
                }).join("");
             return locationData;
            }
        }).join("");

        document.getElementById("locationsInf").innerHTML = locationsData;

        homeSection.style.display="none";
        movSection.style.display="none";
        movInfSection.style.display="block";
    }

    /*Cerrar Detalles pelicula */
    const btnClose = document.querySelector('.btn-close');
    btnClose.addEventListener('click', ()=>{
        movInfSection.style.display = "none";
        movSection.style.display="block";
    })

})

window.addEventListener("scroll", () => {
  if (window.scrollY < 220) {
    scrollTopMov.style.visibility = "hidden";
  } else {
    scrollTopMov.style.visibility = "visible";
  }
})

const scrollTopMov = document.getElementById("topBtnMov");
scrollTopMov.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
})


/*Get People Data*/
document.getElementById("showCharacters").addEventListener("click", function() {
    const contPeopleInf = document.getElementById("contPeopleInf");
    if (contPeopleInf.style.display === "block") {
     contPeopleInf.style.display = "none";
     document.getElementById("icon-arrow").style.transform = "rotate(0deg)";
    } else {
     contPeopleInf.style.display = "block";
     document.getElementById("icon-arrow").style.transform = "rotate(180deg)";
    }
})

/*Get Locations Data*/
document.getElementById("showLocations").addEventListener("click", function() {
    const contLocationsInf = document.getElementById("contLocationsInf");
    if (contLocationsInf.style.display === "block") {
     contLocationsInf.style.display = "none";
     document.getElementById("icon-arrow-location").style.transform = "rotate(0deg)";
    } else {
     contLocationsInf.style.display = "block";
     document.getElementById("icon-arrow-location").style.transform = "rotate(180deg)";
    }
})

/*Filter data*/
const filterBtnsDirector = document.querySelectorAll('.filter-btn-director');
const filterBtnsScore = document.querySelectorAll('.filter-btn-score');
const filterBtnsYear = document.querySelectorAll('.filter-btn-year');

filterBtnsDirector.forEach((btn)=>{
    btn.addEventListener('click', e=>{
        const condition = e.currentTarget.dataset.director;

        const filterDirector = filterDataDirector(data.films, condition);
        sectionMovies.innerHTML = showData(filterDirector);
    })
})

filterBtnsScore.forEach((btn)=>{
    btn.addEventListener('click', e=>{
        const conditionMayor = e.currentTarget.dataset.mayor;
        const conditionMenor = e.currentTarget.dataset.menor;

        const filterScore = filterDataScore(data.films, conditionMayor, conditionMenor);
        // console.log(filterScore)
        sectionMovies.innerHTML = showData(filterScore);
    })
})

filterBtnsYear.forEach((btn)=>{
    btn.addEventListener('click', e=>{

        const condition = e.currentTarget.dataset.year;

        const filterYear = filterDataYear(data.films, condition);
        sectionMovies.innerHTML = showData(filterYear);
    })
})

/*---Filter bottons---*/
const btnFilter = document.querySelector('.icon-filter');
const menuFilter = document.querySelector('.menu-filtros');
btnFilter.addEventListener('click', mostrarBotones);
function mostrarBotones() {
  if (menuFilter.style.display == "block"){
    menuFilter.style.display = "none";
  }else{
    menuFilter.style.display = "block"
  }
}
const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('#cont-filter');
const divs = document.querySelectorAll('.btns');
const iconClose = document.querySelectorAll('.icon-close');
const btnsAll = document.querySelectorAll('.btn-all');

about.addEventListener('click', (e)=>{
    const id = e.target.dataset.id;
    if(id){
        btns.forEach((btn)=>{
            btn.classList.remove("active");
            e.target.classList.add("active");
        })
        divs.forEach((div)=>{
           div.classList.remove("active");
        })
         const element = document.getElementById(id);
        element.classList.add("active");
    }
})

iconClose.forEach((icon)=>{
    icon.addEventListener('click', ()=>{
        divs.forEach((div)=>{
            div.classList.remove("active");
         })
    })
})

btnsAll.forEach((btnAll) => {
  btnAll.addEventListener('click', () => {

    sectionMovies.innerHTML = showData(data.films);

  })
})


/*Input Search */
const formulario = document.querySelector('#formulario');
const btnSearch = document.querySelector('#btn-search');

formulario.addEventListener("keyup",() =>{
  if(event.keyCode === 13){
    document.querySelector('#btn-search').click();
  }
})

const capturarInput = ()=>{
    const inputText = formulario.value.toLowerCase();
    filtrar(inputText)
}
btnSearch.addEventListener('click', capturarInput);

const filtrar = (condition) => {
    const searchedMovie = data.films.filter(movieItem =>{
        let nameMovie = movieItem.title.toLowerCase();
        if(nameMovie.indexOf(condition) !== -1){
            return movieItem
        }
    })

    sectionMovies.innerHTML = showData(searchedMovie);
    if(sectionMovies.innerHTML === ''){
      sectionMovies.innerHTML = `
      <div id="notFound">
      <p class="message-not-found">😨 Movie not found</p>
      </div>
      `
    }
    formulario.value = "";
}


/*Grafics*/
function totalCasesChar(ctx) {
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: dataRecaudation.movies.map(item => item.name),
      datasets: [
        {
          data: dataRecaudation.movies.map(item => item.recaudation),
          backgroundColor: [
            'rgba(255, 99, 132, 0.3)',
            'rgba(54, 162, 235, 0.3)',
            'rgba(255, 206, 86, 0.3)',
            'rgba(75, 192, 192, 0.3)',
            'rgba(153, 102, 255, 0.3)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1,
        }
      ]
    },
    options:{
      responsive: true,
      maintainAspecRatio: false,
    }
  })
}

function renderCharts() {
  const ctx = document.querySelector('#chart').getContext('2d');
  totalCasesChar(ctx)
}
renderCharts();


function totalCasesChar2(ctx) {
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: dataRecaudation.ranking.map(item => item.score),
        datasets: [
          {
            data: dataRecaudation.ranking.map(item => item.cant),
            backgroundColor: [
              'rgba(255, 99, 132, 0.3)',
              'rgba(75, 192, 192, 0.3)',
              'rgba(255, 61, 193, 0.3)',
              'rgba(153, 102, 255, 0.3)',
              'rgba(255, 206, 86, 0.3)',
              'rgba(54, 162, 235, 0.3)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 61, 193, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          }
        ]
      },
      options:{
        responsive: true,
        maintainAspecRatio: false,
      }
    })
  }
  
  function renderCharts2() {
    const ctx = document.querySelector('#chart2').getContext('2d');
    totalCasesChar2(ctx)
  }
  renderCharts2();