const initialState = {
    compteur: 0,
    colorClass: "skyblue",
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "INCREMENT": {
            return {
                compteur: state.compteur+1,
                colorClass: "green",
            }
        }
        case "DECREMENT":{
                return {
                    compteur: state.compteur-1,
                    colorClass: "red",
                }
        }
        default: {
            return {
                compteur: state.compteur,
                colorClass: state.colorClass,
            }
        }
    }
}

export default reducer;