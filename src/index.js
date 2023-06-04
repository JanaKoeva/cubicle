const express = require('express');

const handlebarsConfigurator = require('./config/handlebarsConfig');
const expressConfigurator = require('./config/expressConfig');
const dbConnect=require('./config/dbconfig');
const routes=require('./routes');

const app = express();
const PORT = 5000;


//Express config(app)
expressConfigurator(app);
// vmesto red 11 i red 5-require('./config/expressConfig')(app)

//Handlebars config/app/
handlebarsConfigurator(app);

//config DB
dbConnect()
.then(()=>console.log('DB conected successfully'))
.catch(err=>{
    console.log('DB error1:', err);
});

app.use(routes);

app.listen(PORT, () => console.log('Server is running on port 5000...'));


