export interface Episode {
  id: string;
  name: string;
  episode: string;
}
export interface CharactersType {
  id: string;
  name: string;
  status: string;
  species: string;
  type?: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  episode: Episode[];
}
export interface CharactersListState {
  loading: boolean,
  characters?: CharactersType[],
  error?: {
    status:boolean,
    message:string
},
  page?: number,

}
export interface CharacterDetailsState {
  loading: boolean,
    error?: {
    status:boolean,
    message:string
},
  character?: CharactersType | any

}

export interface ErrorProps {
  error: string

}