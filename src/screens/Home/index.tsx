import React, { useEffect } from "react";
import CharacterCard from "../../components/cards/card";
import BasicPagination from "../../components/pagination";
import { useStyles } from './styles'
import {
  Box,
  Typography
} from '@material-ui/core/';
import NotFound from "../../components/notFound";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { fetchCharacters } from "../../redux/actions/characters";
import { useAppDispatch, useAppSelector } from "../../redux/store";

const Home = () => {

  const { characters, loading, error, page } = useAppSelector((state) => state.characters)
  const styles = useStyles();
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (page) {
      dispatch(fetchCharacters(page))
    }

  }, [page])

  return (
    <Box className="container">
      <Box className={styles.title} >
        <Typography
          variant="h2"
          component="h2"
        >
          Rick & Morty
        </Typography>
      </Box>

      <Box className={styles.home}>

        {!loading ?
          (
            <Box className={styles.cardsListContainer} >
              {characters && characters?.length > 0
                ? characters?.map((character) => {
                  return (
                    <CharacterCard
                      character={character}
                    />
                  );
                }) :
                error ? (
                  <Error error={error} />
                )
                  : (
                    <NotFound />
                  )
              }
            </Box>
          ) : (
            <Loader />
          )}

        <Box className={styles.paginationContainer}>
          <BasicPagination
            page={page ? page : 1}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;