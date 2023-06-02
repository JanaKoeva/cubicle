const express=require('express');

const homeController=require('./controllers/homeController')
const handlebarsConfigurator=require('./config/handlebarsConfig')
const expressConfigurator=require('./config/expressConfig')
const cubeController=require('./controllers/cubesController')

const app=express();
const PORT=5000;

 //Express config(app)
expressConfigurator(app);
// vmesto red 11 i red 5-require('./config/expressConfig')(app)

//Handlebars config/app/
handlebarsConfigurator(app);


//Routes
//app.get('/', homeController.getHome);
app.use(homeController);
app.use('/cubes', cubeController)

app.listen(PORT,()=>console.log('Server is running on port 5000...'));
