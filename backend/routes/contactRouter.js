const express=require('express');
const { submitQuery, getAllQueries, updateQueryStatus } = require('../controllers/contactController');
const contactRouter=express.Router();


contactRouter.post('/query', submitQuery);


contactRouter.get('/queries', getAllQueries);
contactRouter.patch('/query/:id', updateQueryStatus);

module.exports=contactRouter;