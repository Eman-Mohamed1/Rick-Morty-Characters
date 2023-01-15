import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Tooltip,
  Grid
} from '@material-ui/core/';
import { CharactersType } from '../../utils/types';

interface CardProps {
  character: CharactersType

}


export default function DetailsCard({ character }: CardProps) {

  const classes = useStyles();
  return (


    <Card className={classes.card}>
      <Grid container  >
        <Grid item container spacing={3} xs={12} md={4} >

          <Grid item xs={12}  >
            <CardMedia
              component='img'
              image={character.image}
              alt={character.name}
            />
          </Grid>
          <Grid item xs={12}
            className={classes.badgeContainer}
            style={{
              backgroundColor: character.status === 'Alive'
                ? 'green' : character.status === 'Dead'
                  ? 'red'
                  : 'grey'

            }}
          >
            <Typography
              className={classes.badgeTxt}
            >
              {character.status}
            </Typography>
          </Grid>

        </Grid>
        <Grid item xs={12} md={8} >

          <CardContent >

            <Typography
              variant="h3"
              component="h2"
              className={classes.name}
            >
              {character.name}
            </Typography>


            <Grid container spacing={3} >
              <Grid item container xs={12} className={classes.info}  >
                <Grid item xs={4} >
                  <Typography
                    variant="h5"
                    component="h4"
                    className={classes.label}
                  >
                    Species
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h4"
                    className={classes.label}
                  >
                    Gender
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h4"
                    className={classes.label}
                  >
                    Type
                  </Typography>


                </Grid>
                <Grid item xs={8}>

                  <Typography
                    variant="h5"
                    component="h3"
                    className={classes.dataTxt}
                  >
                    {character.species}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h3"
                    className={classes.dataTxt}
                  >
                    {character.gender}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h3"
                    className={classes.dataTxt}
                  >
                    {character.type ? character.type : '------'}
                  </Typography>
                </Grid>


              </Grid>
              <Grid item container xs={12}>
                < Typography
                  variant="h5"
                  component="h4"
                  className={classes.label}
                >
                  Episodes :
                </Typography>
                <Box className={classes.episodesContainer}>
                  {character?.episode?.map((ep) => {
                    return (
                      <Tooltip
                        key={ep.id}
                        title={<span className={classes.toolTipTxt} >{ep.name}</span>}
                        arrow
                        placement='top'
                        className={classes.toolTip}

                      >

                        <span
                          className={classes.episodesTxt}>

                          {ep.episode}
                        </span>

                      </Tooltip>
                    );
                  })}
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>


  )
}
const useStyles = makeStyles({

  card: {
    boxShadow: '2px 8px 10px 0px rgb(176 177 192 / 47%)',
    paddingBottom: 25
  },

  name: {
    fontWeight: 'bold',
    textAlign: 'center'
  },

  info: {
    marginTop: 25
  },
  label: {

  },
  dataTxt: {
    fontWeight: 'bold'

  },


  //Badge 

  badgeContainer: {
    textAlign: 'center',
    background: 'red',
    maxHeight: "50px",
    // marginBottom: 10,
    maxWidth: "98%"
  },
  badgeTxt: {
    fontSize: 20,
    fontWeight: 'bold'
  },


  //Episodes
  episodesContainer: {
    display: 'flex',
    flexWrap: 'wrap',


  },
  toolTip: {
    margin: 4,
    minWidth: '75px',
    minHeight: "27px",
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: "#d3d3d3",
    paddingTop: "5px",


  },
  toolTipTxt: {
    fontSize: 15,
  },
  episodesTxt: {
    fontSize: "15px"

  },



});