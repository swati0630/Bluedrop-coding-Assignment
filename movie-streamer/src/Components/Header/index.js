import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SearchInput from '../SearchInput';
import { makeStyles } from '@mui/styles';
import { useCallback } from 'react';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(({ palette }) => ({
    label: {
        color: palette.primary.secondary,
        '&:hover': {
            color: palette.primary.main,
            textDecoration: 'underline',
            cursor: 'pointer',
        }
    },
}));

export default function Header({searchProps}) {
    const classes = useStyles();
    let navigate = useNavigate();

    const onClick = useCallback(() => navigate(`/movie`, { replace: true }), [navigate]);

    return (
        <Grid container spacing={2}>
            <Grid item xs={9}>
                <Typography onClick={onClick} variant="h3" component="h1" className={classes.label}>WOOKIE MOVIES</Typography>
            </Grid>
            <Grid item xs={3}>
                <SearchInput {...searchProps} />
            </Grid>
        </Grid>
    );
}
