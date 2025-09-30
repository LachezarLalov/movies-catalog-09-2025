import { Router } from 'express';
import movieService from '../services/movieService.js';

const movieController = Router();

movieController.get('/create', (req, res) => {
  res.render('create', { pageTitle: 'Create movie' });
});

movieController.post('/create', (req, res) => {
  const movieData = req.body;

  console.log('Creating movie');
  console.log(movieData);

  movieService.create(movieData);

  res.redirect('/');
});

movieController.get('/:movieId/details', (req, res) => {
  const movieId = req.params.movieId;
  const movie = movieService.getOne(movieId);

  res.render('details', { movie , pageTitle: 'Movie details'});
});
  
movieController.get('/search', (req, res) => {
  const filter = req.query;

  const movies = movieService.getAll(filter);


  res.render('search', { movies, filter, pageTitle: 'Search movies' });
});

export default movieController;
