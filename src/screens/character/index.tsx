/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@material-ui/core";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchCharacter } from "../../redux/actions/characterDetails";
import { useStyles } from './styles'
import DetailsCard from "../../components/cards/detailsCard";
import NotFound from "../../components/notFound";
import Error from "../../components/error";
import Loader from "../../components/loader";

const CharacterDetails = () => {
  const styles = useStyles();
  const { id } = useParams();
  const dispatch = useAppDispatch()
  const { character, loading, error } = useAppSelector((state) => state.character)


  useEffect(() => {
    if (id) {
      dispatch(fetchCharacter(id))
    }
  }, [id]);

  return (
    <Box className="container">

      {!loading ?
        (<Box className={styles.characterPageContainer} >
          {character ? (
            <DetailsCard
              character={character}
            />
          ) :
            error ? (
              <Error error={error} />
            )
              :
              (
                <NotFound />
              )}
        </Box>
        ) : (
          <Loader />
        )}

    </Box>
  );
};

export default CharacterDetails;