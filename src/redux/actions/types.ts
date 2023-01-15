import { FETCHCHARACTERERROR, FETCHCHARACTERLOADING, FETCHCHARACTERSLISTERROR, FETCHCHARACTERSLISTLOADING, FETCHCHARACTERSLISTSUCCESS, FETCHCHARACTERSUCCESS } from './../constants/constants';
import { CharactersListState, CharacterDetailsState } from "../../utils/types"
import { CHANGEPAGE } from "../constants/constants"


//characters list type

export interface fetchCharactersTypeSuccess {
  type: typeof FETCHCHARACTERSLISTSUCCESS,
  payload: CharactersListState
}
export interface fetchCharactersTypeLoading {
  type: typeof FETCHCHARACTERSLISTLOADING,
  payload: CharactersListState
}
export interface fetchCharactersTypeError {
  type: typeof FETCHCHARACTERSLISTERROR,
  payload: CharactersListState
}



//character types
export interface fetchCharacterTypeSuccess {
  type: typeof FETCHCHARACTERSUCCESS,
  payload: CharacterDetailsState
}
export interface fetchCharacterTypeLoading {
  type: typeof FETCHCHARACTERLOADING,
  payload: CharacterDetailsState
}
export interface fetchCharacterTypeError {
  type: typeof FETCHCHARACTERERROR,
  payload: CharacterDetailsState
}

export interface changePageType {
  type: typeof CHANGEPAGE,
  payload: { page: number }
}

export type CharactersListDispatchTypes = fetchCharactersTypeSuccess | fetchCharactersTypeLoading | fetchCharactersTypeError | changePageType
export type CharacterDispatchTypes = fetchCharacterTypeSuccess | fetchCharacterTypeLoading | fetchCharacterTypeError