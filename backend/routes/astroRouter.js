const express=require('express');
const { submit } = require('../controllers/astroController');
const astroRouter=express.Router();

astroRouter.post('/submit',submit);

module.exports=astroRouter;