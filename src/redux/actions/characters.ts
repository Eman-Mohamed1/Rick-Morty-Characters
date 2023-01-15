import { CHANGEPAGE, FETCHCHARACTERSLISTSUCCESS, FETCHCHARACTERSLISTERROR, FETCHCHARACTERSLISTLOADING } from './../constants/constants';
import { GraphQLClient } from "graphql-request";
import { Dispatch } from "redux";
import { CharactersListDispatchTypes } from "./types";

const endPoint = new GraphQLClient("https://rickandmortyapi.com/graphql/");

export const fetchCharacters = (page: number) => async (dispatch: Dispatch<CharactersListDispatchTypes>) => {
  dispatch({ type: FETCHCHARACTERSLISTLOADING, payload: { characters: [], error: ' ', loading: true } })

  const CHARACTERS_QUERY = `
    {
        characters (page:${page}) {
          results {
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
      }
    `;
  try {
    const { characters } = await endPoint.request(CHARACTERS_QUERY);
    dispatch({ type: FETCHCHARACTERSLISTSUCCESS, payload: { characters: characters.results, loading: false } })

  } catch (err) {
    dispatch({ type: FETCHCHARACTERSLISTERROR, payload: { characters: [], error: 'something went wrong while fetching list ', loading: false } })
  }
}

export const changePage = (page: number) => {
  return { type: CHANGEPAGE, payload: { page: page } }
}

