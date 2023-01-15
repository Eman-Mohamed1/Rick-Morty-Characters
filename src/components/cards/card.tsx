import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { CharactersType } from '../../utils/types';

interface CardProps {
  character: CharactersType

}

export default function CharacterCard({ character }: CardProps) {
  const styles = useStyles({ character });

  return (
    <Link
      to={character.id}
      key={character.id}
    >
      <Card className={styles.card}>
        <CardMedia
          component='img'
          image={character.image}
          alt={character.name}
          className={styles.avatar}
        />
        <CardContent className={styles.info}>
          <Typography
            variant="h6"
            component="h3"
            className={styles.name}
          >
            {character.name.length > 14 ? character.name.slice(0, 12) + '...' : character.name}
          </Typography>
          <Box
            className={styles.statusContainer}
            style={{
              color: character.status === 'Alive'
                ? 'green'
                : character.status === 'Dead'
                  ? 'red'
                  : 'black'

            }}
          >

            < span
              className={styles.statusTxt}
            >
              • {character.status}
            </span>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}

const useStyles = makeStyles({
  card: {
    width: "300px",
    boxShadow: '2px 8px 10px 0px rgb(176 177 192 / 47%)'
  },
  avatar: {
    width: '100%',
    height: '80%',
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between'
  },

  name: {
    fontWeight: 'bold',
    fontSize: '21px',
    "&:hover": {
      color: 'red'
    }
  },
  //status 
  statusTxt: {
    fontSize: '16px'
  },
  statusContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },

});