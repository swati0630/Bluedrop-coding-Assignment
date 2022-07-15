import { useCallback, useMemo, useState } from "react";
import Typography from '@mui/material/Typography';
import Layout from "../../Components/Layout";
import useMovies from "./useMovies";
import GenreList from "../../Components/GenreList";

export default function MovieList() {
    const [search, setSearch] = useState('');
    const { list: data, loading } = useMovies(search);

    const list = useMemo(() => {
        if (data.length > 0) {
            return data.map(({ genre, movies }, index) => (
                <GenreList key={`genre-${index}`} genre={genre} movies={movies} />
            ));
        }
        return <Typography variant="subtitle1">No Movies to show</Typography>;
    }, [data]);

    const child = useMemo(() => {
        if (loading) {
            return <Typography variant="h2">Please wait fetching Movies list for you</Typography>
        }
        return list;
    }, [list, loading]);

    const onChange = useCallback(({target}) => setSearch(target.value), []);

    return (
        <Layout searchProps={onchange={onChange}}>
            {child}
        </Layout>
    );
}
