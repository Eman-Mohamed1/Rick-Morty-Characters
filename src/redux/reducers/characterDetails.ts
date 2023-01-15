
import { CharacterDetailsState } from '../../utils/types';
import { CharacterDispatchTypes } from '../actions/types';
import { FETCHCHARACTERERROR, FETCHCHARACTERLOADING, FETCHCHARACTERSUCCESS } from '../constants/constants';


const initalState = {
    loading: false,
    error: {
        status:false,
        message:' '
    },
    character: {}
} as CharacterDetailsState

const characterReducer = (state: CharacterDetailsState = initalState, action: CharacterDispatchTypes): CharacterDetailsState => {
    switch (action.type) {

        case FETCHCHARACTERLOADING:
            return {
                ...state,
                loading: true,
                error: action.payload.error,
                character: action.payload.character,
            };
        case FETCHCHARACTERSUCCESS:
            return {
                ...state,
                character: action.payload.character,
                error: action.payload.error,
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

