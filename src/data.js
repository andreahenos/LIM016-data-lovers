// estas funciones son de ejemplo

export const filterDataDirector = (data, condition) => {
        const movieDirector = data.filter(movieItem=>{
            if(movieItem.director === condition){
                return movieItem
            }
        })

        if (condition == 'all'){
            return data;
        }
        else {
            return movieDirector;
        }
};

export const filterDataScore = (data, conditionMayor, conditionMenor) => {

    const movieScore = data.filter(movieItem=>{
        if( movieItem.rt_score >= parseInt(conditionMenor) && movieItem.rt_score <= parseInt(conditionMayor)){
            return movieItem
        }
    })

    if(conditionMayor == 'all'){
        return data;
    }
    else {
        return movieScore;
    }
};

export const filterDataYear = (data, condition) => {
    const movieYear = data.filter(movieItem =>{
        if(movieItem.release_date === condition){
            return movieItem
        }
    })

    if (condition == 'all'){
        return data;
    }
    else {
        return movieYear;
    }
};

/* export const anotherExample = () => {
  return 'OMG';
};
 */
