# A Fantasy Pet Store
built using Typescript, Handlebars, and other Node.js packages

## Premise
This is meant to be a cheeky twist on a pet store -- instead of bunnies and dogs, you might take home a dragon or a direwolf to live with you! Basically, a pet store, but fantasy.

## Dependencies
All the dependencies are included in the package.json file, with the exception of the css file I use to style everything.
I have PicoCSS to thank for the quick and easy styling, it looks great and quickly!
Also, connecting to the MySQL database involves using environment variables in an .env file, which is excluded by .gitignore for security purposes. You will have to configure
your own .env for this to work.

## Configuring the .env (two ways):
### Using an .env file
It's fairly easy to set up a .env file with the same names. Just create one in the root directory (same level as package.json) and use key-name pairs matching what you see in
the index.ts file.

### ...or do it manually
Forget the .env! Just punch in whatever parameters Sequelize needs and run it the app, right inside index.ts (this assumes you won't be publishing your copy)
