import { FETCHCHARACTERSLISTLOADING, FETCHCHARACTERSLISTSUCCESS, FETCHCHARACTERSLISTERROR, CHANGEPAGE } from './../constants/constants';
import { CharactersListState } from '../../utils/types';
import { CharactersListDispatchTypes } from '../actions/types';



const initalState = {
    loading: false,
    characters: [],
    error: {
        status:false,
        message:' '
    },
    page: 1,
} as CharactersListState

const charactersReducer = (state: CharactersListState = initalState, action: CharactersListDispatchTypes): CharactersListState => {
    switch (action.type) {
        case FETCHCHARACTERSLISTLOADING:
            return {
                ...state,
                characters: [],
                loading: true,
                error: action.payload.error
            };
        case FETCHCHARACTERSLISTSUCCESS:
            return {
                ...state,
                characters: action.payload.characters,
                loading: false,
                error: action.payload.error

            };
        case FETCHCHARACTERSLISTERROR:
            return {
                ...state,
                characters: [],
                loading: false,
                error: action.payload.error
            };
        case CHANGEPAGE:
            return {
                ...state,
                page: action.payload.page,
            };

        default:
            return state;
    }
};

export { charactersReducer };

