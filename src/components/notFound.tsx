import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Typography
} from '@material-ui/core/';

export default function NotFound() {
  const styles = useStyles();
  return (
    <Box className={styles.container} >
      <Typography className={styles.NoDataText} >
        No Data Found 404
      </Typography>
    </Box>
  )
}

const useStyles = makeStyles({
  container: {
    minHeight: "470px",
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',

  },
  NoDataText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25
  },

});
