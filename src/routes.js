const router=require('express').Router();
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubesController');

//Routes
//app.get('/', homeController.getHome);
router.use(homeController);
router.use('/cubes', cubeController);
router.get('*', (req, res) => {
    res.redirect('/404')
});

module.exports=router