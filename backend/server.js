const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const main=require('./config/db');
const authRouter = require('./routes/authRouter');
const astroRouter = require('./routes/astroRouter');
const contactRouter = require('./routes/contactRouter');
dotenv.config();
const app=express();
app.use(express.json());
app.use(cookieParser());
//allowing frontend port no. to make changes over the database 
app.use(cors({
    origin:'https://astroguide.vercel.app',
    credentials:true,
     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Cache-Control', 'Pragma', 'Expires']
}))



app.use('/user',authRouter);
app.use('/response',astroRouter);
app.use('/contact',contactRouter);

main()
.then(async()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`listening at port no.${process.env.PORT}`);

    })
})
.catch(err=>console.log("Error"+err));