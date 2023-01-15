import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Typography
} from '@material-ui/core/';
import { ErrorProps } from '../utils/types';


export default function Error({ error }: ErrorProps) {
    const styles = useStyles();
    return (
        <Box className={styles.container} >
            <Typography className={styles.ErrorText} >
                {error}
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
    ErrorText: {
        color: 'Black',
        fontSize: 25
    },

});
