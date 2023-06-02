const router=require('express').Router();
//Path /cubes/create
router.get('/create', (req,res)=>{
    res.render('create')
})

router.post('/create',(req,res)=>{
res.send("form");
console.log(req.body);
})

module.exports=router;