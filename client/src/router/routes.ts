import Home from '../pages/home';
import HomePage from '../pages/home/Home';
import Settings from '../pages/settings';
import Recommended from '../pages/recommended/Recommended';
import MovieDetails from '../pages/movieDetails/MovieDetails';
import { Login } from '../components/auth/login/Login';
import PopularMovies from '../pages/popularMovies/PopularMovies';
import { SignIn } from '../components/auth/signIn/SignIn';

export const mainRoutes = {
  login: {
    title: 'Login',
    path: '/auth/login',
    element: Login,
  },
  signIn: {
    title: 'Sign In',
    path: '/auth/signIn',
    element: SignIn,
  },
  home: {
    title: 'Home Page',
    path: '/',
    element: Home,
  },
};

export const navbarRoutes = {
  homePage: {
    title: 'Home',
    path: '/',
    element: HomePage,
  },
  popularMovies: {
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
