import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useCallback } from 'react';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(({palette}) => ({
    button: {
        "&:hover": {
            textDecoration: 'underline',
            color: palette.primary.main,
            cursor: 'pointer',
        }
    }
}));

export default function MovieCard({title, poster, ...props}) {
    const classes = useStyles();
    let navigate = useNavigate();

    const onClick = useCallback(() => navigate(`/movie/${title}`, { replace: true }), [navigate, title]);

    return (
        <Grid component="button" onClick={onClick} {...props} className={classes.button}>
            <img src={poster} alt='Movie-Icon' width="150px" height="150px" />
            <Typography variant="subtitle1">{title}</Typography>
        </Grid>
    );
}
