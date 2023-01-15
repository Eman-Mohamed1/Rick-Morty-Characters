import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { charactersReducer } from "./reducers/characters";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AnyAction, } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { characterReducer } from "./reducers/characterDetails";

type AppState = ReturnType<typeof rootReducers>;
type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;

export const useAppDispatch = () => useDispatch<TypedDispatch<AppState>>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

const rootReducers = combineReducers({
    characters: charactersReducer,
    character: characterReducer
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export { store };
