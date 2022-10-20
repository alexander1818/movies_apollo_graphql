import { useCallback, useState } from 'react';
import { TMovieType } from '../components/movieCard';

export const useMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState<TMovieType[]>([]);

  const selectMovie = useCallback(
    (movie: TMovieType) => {
      if (selectedMovies.find(({ id }) => id === movie.id)) return;
      setSelectedMovies([movie, ...selectedMovies]);
    },
    [selectedMovies]
  );
  const deleteMovie = useCallback(
    (movie: TMovieType) => {
      setSelectedMovies(selectedMovies.filter(({ id }) => id !== movie.id));
    },
    [selectedMovies]
  );
  return {
    selectedMovies,
    selectMovie,
    deleteMovie,
  };
};
