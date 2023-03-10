import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import morgan from 'morgan';

// Basic set-up
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../src/public')));

// View engine = Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../src/views'));
app.set('view options', { layout: 'layout' });

// Routing middleware (to-be-done)

// Bad request routing (i.e. the "Backrooms" route):
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).render('error', {
    message: 'This is not the URL you are looking for!',
  });
});

// Syncing our database (to-be-done)


// Server: 3000
app.listen(3000);