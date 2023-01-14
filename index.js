import express from 'express'
import dotenv from 'dotenv'
import Connection from "./database/db.js"
import DefaultData from "./defaults.js"
import router from "./routes/route.js"
import cors from 'cors'
import bodyParser from 'body-parser'

const app=express()


dotenv.config()

app.use(cors())
// body parser used for post request
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',router)


const USERNAME= process.env.DB_USERNAME;
const PASSWORD= process.env.DB_PASSWORD;


const PORT=5000


Connection(USERNAME,PASSWORD);

app.listen(PORT,()=>{
    console.log(`server started at PORT 5000`);
})

DefaultData()