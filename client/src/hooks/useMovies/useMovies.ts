import { useCallback, useState } from 'react';
import { TMovieType } from '../../components/movieCard';
import { toast } from 'react-toastify';

export const useMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState<TMovieType[]>([]);

  const selectMovie = useCallback(
    (movie: TMovieType) => {
      const moviesLength = selectedMovies.length;
      const isDublicateMovie = selectedMovies.find(({ id }) => id === movie.id);

      if (isDublicateMovie || moviesLength >= 20) {
        if (isDublicateMovie) {
          return toast.dark('Movie was added');
        }
        if (moviesLength) {
          return toast.dark('You can`t add more then 20 movies');
        }
        return;
      }

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
