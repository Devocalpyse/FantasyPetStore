import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import morgan from 'morgan';
import { db } from './models';
import { redirect } from './controllers/creatureController';
import creatureRoutes from './routes/creatureRoutes'

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
app.use('/creatures', creatureRoutes)
app.use('/', redirect)

// Bad request routing (i.e. the "Backrooms" route):
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).render('error', {
    message: 'This is not the URL you are looking for!',
    title: "Error 404 - Page not found"
  });
});

// Syncing our database
db.sync().then(() => {
    console.info("SKYNET CONNECTED.")
})

// Server: 3000
app.listen(3000);