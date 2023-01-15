import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  CircularProgress,
} from '@material-ui/core/';

export default function Loader() {
  const styles = useStyles();
  return (
    <Box
      className={styles.loadingContainer}>
      <CircularProgress
        color="primary"
      />
    </Box>
  )
}
const useStyles = makeStyles({

  loadingContainer: {
    minHeight: "470px",
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',

  },

});
