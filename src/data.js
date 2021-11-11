// estas funciones son de ejemplo

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
 return displayMovies
    
}
export const showMovieCarrousel = (data)=>{
    let displayMovies = data.map((movie)=>{
    
        return `

            <div class="slide">
                <img src=${movie.poster} alt=${movie.title}>
            </div>

        ` 
        
    }); 
    
    displayMovies = displayMovies.join(""); 
     return displayMovies
}
export const filterDataDirector = (data, condition) => {
        const movieDirector = data.filter(movieItem=>{
            if(movieItem.director === condition){
                return movieItem
            }
        })
        if (condition == 'all'){
            return showData(data);
        }
        else {
            return showData(movieDirector);
        }
};
export const filterDataScore = (data, conditionMayor, conditionMenor) => {

    const movieScore = data.filter(movieItem=>{
        if( movieItem.rt_score >= parseInt(conditionMenor) && movieItem.rt_score <= parseInt(conditionMayor)){
            return movieItem
        }
    })
    if(conditionMayor == 'all'){
        return showData(data);
    }
    else {
        return showData(movieScore)
    } 
};
export const filterDataYear = (data, condition) => {
    const movieYear = data.filter(movieItem=>{
        if(movieItem.release_date === condition){
            return movieItem
        }
    })
    if (condition == 'all'){
        return showData(data);
    }
    else {
        return showData(movieYear);
    }
};

/* export const anotherExample = () => {
  return 'OMG';
}; 
 */