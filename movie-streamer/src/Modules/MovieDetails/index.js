import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { makeStyles } from '@mui/styles';
import { useMemo } from 'react';
import Layout from "../../Components/Layout";
import useMovieDetails from './useMovieDetails';

const useStyles = makeStyles(({ palette, spacing }) => ({
    container: {
        rowGap: spacing(2),
        columnGap: spacing(1),
    },
    titleContainer: {
        justifyContent: 'space-between',
    },
    image: {
        width: '100%',
        height: '600px',
        maxWidth: '100%',
    }
}));

export default function MovieDetails() {
    const classes = useStyles();
    const { loading, backdrop, title, ratings, year, length, director, cast, description } = useMovieDetails();

    const details = useMemo(() => (
        <Grid container direction="row" className={classes.container}>
            <Grid item xs={3.5}>
                <img src={backdrop} alt="movie-icon" className={classes.image} />
            </Grid>
            <Grid item xs={8}>
                <Grid container direction="column" className={classes.container}>
                    <Grid item xs={12}>
                        <Grid container direction="row" className={classes.titleContainer}>
                            <Grid item xs={4}>
                                <Typography variant="h5" component="h2">{`${title}(${ratings})`}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Rating name="read-only" value={ratings} readOnly />
                        </Grid>
                    </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2">
                            {`${year} | ${length} | ${director}`}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2">
                            {`Cast: ${cast}`}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2">
                            {`Movie Description: ${description}`}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    ), [backdrop, cast, classes.container, classes.image, classes.titleContainer, description, director, length, ratings, title, year]);

    const child = useMemo(() => {
        if (loading) {
            return <Typography variant="h2">Please wait fetching Movies list for you</Typography>
        }
        return details;
    }, [details, loading]);

    return <Layout>{child}</Layout>;
}
