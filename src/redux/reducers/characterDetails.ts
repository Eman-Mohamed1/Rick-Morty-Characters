
import { CharacterDetailsState } from '../../utils/types';
import { CharacterDispatchTypes } from '../actions/types';
import { FETCHCHARACTERERROR, FETCHCHARACTERLOADING, FETCHCHARACTERSUCCESS } from '../constants/constants';


const initalState = {
    loading: false,
    error: " ",
    character: {}
} as CharacterDetailsState

const characterReducer = (state: CharacterDetailsState = initalState, action: CharacterDispatchTypes): CharacterDetailsState => {
    switch (action.type) {

        case FETCHCHARACTERLOADING:
            return {
                ...state,
                loading: true
            };
        case FETCHCHARACTERSUCCESS:
            return {
                ...state,
                character: action.payload.character,
                loading: false
            };
        case FETCHCHARACTERERROR:
            return {
                ...state,
                character: action.payload.character,
                loading: false,
                error: action.payload.error


            };

        default:
            return state;
    }
};

export { characterReducer };

