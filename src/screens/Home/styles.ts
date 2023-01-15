import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles({
 
  home:{
    paddingTop:'30px'
  },
  title:{
    textAlign:'center',
    margin:"50px auto",

  },

// characters list
  cardsListContainer:{
    display: "flex",
    flexWrap:"wrap",
    gap:'30px',
    justifyContent:'center',
} ,

//pagination
  paginationContainer:{
    display:'flex',
    justifyContent:'center',
    margin:" 50px auto"

    },
 
});