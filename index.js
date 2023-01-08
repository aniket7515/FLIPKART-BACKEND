import express from "express"
import dotenv from 'dotenv'
import Connection from "./database/db.js"
import DefaultData from "./defaults.js"

const app=express()


dotenv.config()

const USERNAME= process.env.DB_USERNAME;
const PASSWORD= process.env.DB_PASSWORD;


const PORT=5000


Connection(USERNAME,PASSWORD);

app.listen(PORT,()=>{
    console.log(`server started at PORT 5000`);
})

DefaultData()