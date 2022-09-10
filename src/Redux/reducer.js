import { addFromDatabase, add, remove } from './types';

let initialState = {
    myList: [],
    films: [],
}

/**
 * state = initialState - устанавливаю значения по умолчанию (когда ничего не передается)
 */
function reducer(state = initialState, action) {
    switch (action.type) {
        case addFromDatabase: //Обновляю список найденных фильмов
        return {
            ...state, 
            films: action.payload
        }

        case add: //Добавляю в список избранных фильмов
            if (state.myList.find(item => item.imdbID === action.payload.imdbIDToAddToMylist)) {
                return state;
            };
            const movie = state.films.find(item => item.imdbID === action.payload.imdbIDToAddToMylist);
            return {
                ...state,
                myList: [...state.myList, movie]
            }

        case remove:    //Удаляю из списка избранных фильмов
            return {
                ...state,
                myList: state.myList.filter(item => item.imdbID !== action.payload.imdbIDForRemoveFromMylist)
            }

        default:
            return state;
    }
}

export default reducer;
