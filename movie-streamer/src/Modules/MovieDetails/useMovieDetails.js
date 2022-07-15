import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from 'date-fns'
import { fetchDetails } from "../../Services/fetchDetails";

export default function useMovieDetails(props) {
    const [detail, setDetail] = useState();
    const [loading, setLoading] = useState(false);
    const params = useParams();

    const populateDetails = useCallback(() => {
        setLoading(true);
        fetchDetails(params.title)
            .then(({data}) => {
                setDetail(data.movies[0]);
                setLoading(false);
            })
            .catch(error => {
                console.log('error while fetch movie details', error);
                setLoading(false);
            })
    }, [params.title]);

    useEffect(() => populateDetails(), [populateDetails]);

    return {
        loading,
        backdrop: detail?.backdrop || '',
        title: detail?.title || '',
        ratings: detail?.imdb_rating || 0,
        year: detail?.released_on ? format(new Date(detail?.released_on), 'yyyy') : 'Unknown Year',
        length: detail?.length || '',
        director: detail?.director || '',
        cast: detail?.cast || '',
        description: detail?.overview || '',
   };
}
