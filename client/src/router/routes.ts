import Home from '../pages/home';
import Settings from '../pages/settings';
import Recommended from '../pages/recommended/Recommended';
import MovieDetails from '../pages/movieDetails/MovieDetails';

export const mainRoutes = {
  home: {
    title: 'Home Page',
    path: '/',
    element: Home,
  },
  settings: {
    title: 'Settings',
    path: '/settings',
    element: Settings,
  },
  recommended: {
    title: 'Recommended',
    path: '/recommended',
    element: Recommended,
  },
  movieDetails: {
    title: 'Movie details',
    path: '/movie-details:id',
    element: MovieDetails,
  },
};

export const dashBoardRoutes = {
  home: {
    title: 'Home Page',
    path: '/',
    element: Home,
  },
  settings: {
    title: 'Settings',
    path: '/settings',
    element: Settings,
  },
  recommended: {
    title: 'Recommended',
    path: '/recommended',
    element: Recommended,
  },
};
