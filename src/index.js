import express from 'express';
import handlebars from 'express-handlebars';
import routes from './routes.js';

const app = express();

// Setup
app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

// Setup middlewares
app.use(express.static('src/public'));
app.use(express.urlencoded()); // parse form data from request

// Routes
app.use(routes);

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000...');
});
