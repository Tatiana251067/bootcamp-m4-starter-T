import { addFromDatabase } from './types';
import { remove } from './types';
import { add } from './types';

export function addFilmsFromDatabaseAction(films) {
    return {
        type: addFromDatabase,
        payload: films
    }
}


export function removeFromMylistAction(id) {
    return {
        type: remove,
        payload: {
            imdbIDForRemoveFromMylist: id
        }
    }
}

export function addToMylistAction(id) {
    return {
        type: add,
        payload: { 
            imdbIDToAddToMylist: id 
        }
    }
}
