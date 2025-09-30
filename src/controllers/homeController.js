import { Router } from 'express';
import movieService from '../services/movieService.js';

const homeController = Router();

homeController.get('/', (req, res) => {
    const movies = movieService.getAll();
    res.render('home', { movies, title: 'Movie Magic' });
});

homeController.get('/about', (req, res) => {
    res.render('about', { pageTitle: 'About' });
});

export default homeController;
