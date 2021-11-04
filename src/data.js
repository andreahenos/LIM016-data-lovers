// estas funciones son de ejemplo
const sectionMovies = document.querySelector('.movies');
export const showData = (menuItems) =>{
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
                <a class="btn-mas">See more</a>
            </div>    
        </div>
    </article>
    ` 
    
});
 displayMovies = displayMovies.join("");
    sectionMovies.innerHTML = displayMovies;  
}
export const filterData = (data, condition) => {
  const director = condition.currentTarget.dataset.id 
        const movieDirector = data.filter(movieItem=>{
            if(movieItem.director === director){
                return movieItem
            }
        })
        if (director === 'all'){
            showData(data);
        }
        else {
            showData(movieDirector);
        }
};

/*export const anotherExample = () => {
  return 'OMG';
}; */
