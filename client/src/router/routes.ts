import Home from '../pages/home';
import Settings from '../pages/settings';
import Recommended from '../pages/recommended/Recommended';
import MovieDetails from '../pages/movieDetails/MovieDetails';
import { Login } from '../components/login/Login';
import HomePage from '../pages/homePage/HomePage';
import PopularMovies from '../pages/popularMovies/PopularMovies';

export const mainRoutes = {
  login: {
    title: 'Login',
    path: '/auth/login',
    element: Login,
  },
  home: {
    title: 'Home Page',
    path: '/',
    element: Home,
  },
};

export const navbarRoutes = {
  home: {
    title: 'Popular Movie',
    path: '/movie',
    element: PopularMovies,
  },
  settings: {
    title: 'Settings',
    path: '/settings',
    element: Settings,
  },
  recommended: {
    title: null,
    path: '/movie/recommended',
    element: Recommended,
  },
  movieDetails: {
    title: null,
    path: '/movie/:id',
    element: MovieDetails,
  },
};

export const dashBoardRoutes = {
  home: {
    title: 'Home Page',
    path: '/movie',
    element: PopularMovies,
  },
  settings: {
    title: 'Settings',
    path: '/settings',
    element: Settings,
  },
  recommended: {
    title: 'Recommended',
    path: '/movie/recommended',
    element: Recommended,
  },
};
