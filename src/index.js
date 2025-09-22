import express from 'express';
import handlebars from 'express-handlebars';
import homeController from './controllers/homeController.js';

const app = express();

// Setup
app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

// Setup middlewares
app.use(express.static('src/public'));

// Routes
app.use(homeController);

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000...');
});
