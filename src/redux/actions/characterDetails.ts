import { FETCHCHARACTERSUCCESS, FETCHCHARACTERERROR, FETCHCHARACTERLOADING } from './../constants/constants';
import { GraphQLClient } from "graphql-request";
import { Dispatch } from "redux";
import { CharacterDispatchTypes } from "./types";

const endPoint = new GraphQLClient("https://rickandmortyapi.com/graphql/");

export const fetchCharacter = (Id: string) => async (dispatch: Dispatch<CharacterDispatchTypes>) => {
  dispatch({ type: FETCHCHARACTERLOADING, payload: { loading: false, character: {}, error: { status: false, message: ' ' } } })
  const CHARACTER_DETAILS_QUERY = `
    {
       character(id:${Id}) {
            id
            name
            status
            species
            type
            gender
            origin {
              name
            }
            location {
              name
            }
            image
            episode {
              id
              name
              episode
            }
          }
        }
      
    `;
  try {
    const { character } = await endPoint.request(CHARACTER_DETAILS_QUERY);
    dispatch({ type: FETCHCHARACTERSUCCESS, payload: { character: character, loading: false, error: { status: false, message: ' ' } } })

  } catch (err) {
    dispatch({ type: FETCHCHARACTERERROR, payload: { error: { status: true, message: 'something went wrong while fetching details ' }, loading: false, character: {} } })
  }
}



