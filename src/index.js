const express = require('express');


const handlebarsConfigurator = require('./config/handlebarsConfig')
const expressConfigurator = require('./config/expressConfig')
const routes=require('./routes');

const app = express();
const PORT = 5000;

//Express config(app)
expressConfigurator(app);
// vmesto red 11 i red 5-require('./config/expressConfig')(app)

//Handlebars config/app/
handlebarsConfigurator(app);

app.use(routes);


app.listen(PORT, () => console.log('Server is running on port 5000...'));
