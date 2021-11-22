// estas funciones son de ejemplo

export const filterDataDirector = (data, condition) => {
        const movieDirector = data.filter(movieItem=>{
            if(movieItem.director === condition){
                return movieItem
            }
        })


            return movieDirector;

};

export const filterDataScore = (data, conditionMayor, conditionMenor) => {

    const movieScore = data.filter(movieItem=>{
        if( movieItem.rt_score >= parseInt(conditionMenor) && movieItem.rt_score <= parseInt(conditionMayor)){
            return movieItem
        }
    })


        return movieScore;

};

export const filterDataYear = (data, condition) => {
    const movieYear = data.filter(movieItem =>{
        if(movieItem.release_date === condition){
            return movieItem
        }
    })


        return movieYear;

};

/* export const anotherExample = () => {
  return 'OMG';
};
 */
