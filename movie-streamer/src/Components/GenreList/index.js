import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import MovieCard from '../MovieCard';

const useStyles = makeStyles(({ palette, spacing }) => ({
    label: {
        color: palette.primary.secondary,
    },
    container: {
        rowGap: spacing(2),
        columnGap: spacing(2),
        overflowX: 'scroll',
    }
}));

export default function GenreList({ genre, movies }) {
    const classes = useStyles();

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Typography noWrap variant="h4" component="h2" className={classes.label}>{genre}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container className={classes.container} direction="row">
                    {
                        movies.map(({ poster, title }, movieIndex) => (
                            <MovieCard key={`movie-${movieIndex}`} title={title} poster={poster} />
                        ))
                    }    
                </Grid>
            </Grid>
        </Grid>
    );
}
