import { useMovies } from './useMovies';
import { act, renderHook } from '@testing-library/react-hooks';

describe('useMovies hook', () => {
  const movie = {
    id: 1,
    title: 'Title',
    posterPath: 'image',
    description: 'string',
    releaseDate: 'string',
  };

  const MAX_SELECTED_MOVIES = 20;

  test('should select movie', () => {
    const { result } = renderHook(() => useMovies());
    act(() => {
      result.current.selectMovie(movie);
    });
    expect(result.current.selectedMovies.length).toBe(1);
    expect(result.current.selectedMovies[0].id).toBe(movie.id);
  });

  test('should delete movie', () => {
    const { result } = renderHook(() => useMovies());
    act(() => {
      result.current.deleteMovie(movie);
    });
    expect(result.current.selectedMovies.length).toBe(0);
  });

  test('should select movie just once', () => {
    const { result } = renderHook(() => useMovies());

    act(() => {
      result.current.selectMovie(movie);
    });

    act(() => {
      result.current.selectMovie(movie);
    });

    expect(result.current.selectedMovies.length).toBe(1);
    expect(result.current.selectedMovies[0].id).toBe(movie.id);
  });

  test('should add movies more then 20', () => {
    const { result } = renderHook(() => useMovies());

    for (let i = 0; i < MAX_SELECTED_MOVIES; i++) {
      act(() => {
        result.current.selectMovie({ ...movie, id: i });
      });
    }
    expect(result.current.selectedMovies.length).toBe(MAX_SELECTED_MOVIES);

    act(() => {
      result.current.selectMovie({ ...movie, id: 21 });
    });
    expect(result.current.selectedMovies.length).toBe(MAX_SELECTED_MOVIES);
  });
});
