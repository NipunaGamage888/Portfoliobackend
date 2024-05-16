const express =require('express')
const cors = require('cors');
const Routes = require('./Routes/emailRouter');
require('dotenv').config();
const app= express()
const PORT = process.env.PORT || 4000;
app.use(cors())
app.use(express.json());

app.use('/api',Routes)

app.listen(PORT, ()=>{
    console.log(`The app is running in port ${PORT}`)
})