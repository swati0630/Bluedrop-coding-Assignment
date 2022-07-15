import { useCallback, useEffect, useState } from "react";
import { fetchMovies } from "../../Services/fetchMovies";

export default function useMovies(searchInput) {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    const prepareList = useCallback(({movies}) => {
      let filteredList = [...movies];
        if (searchInput) {
          filteredList = movies.filter(({title}) => title.includes(searchInput))
        }
        let tempArray = [];
        for (let movie of filteredList) {
          for (let genre of movie.genres) {
            let tempGenreItem = tempArray.filter((item) => item.genre === genre);
            if (tempGenreItem.length > 0) {
              tempArray.map((item) =>
                item.genre === genre
                  ? { ...item, movies: item.movies.push(movie) }
                  : item
              );
            } else {
              tempArray.push({
                genre,
                movies: [movie],
              });
            }
          }
        }
        return tempArray;
    }, [searchInput]);

    const populateList = useCallback(() => {
        setLoading(true);
        fetchMovies()
            .then(({data}) => {
                setList(prepareList(data));
                setLoading(false);
            })
            .catch((error) => {
                console.log('error fetching movie', error);
                setLoading(false);
            });
    }, [prepareList]);

    useEffect(() => populateList(), [populateList, searchInput]);

    return {
        list,
        loading
    };
}
