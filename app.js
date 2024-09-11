const express = require('express')
require('express-async-errors') // echivalent cu try catch, decat sa pun peste tot mai bine facem asa fiinda folosim async in controllers
//db
const connectDB = require('./db/connect')

//middleware
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddlware = require('./middleware/error-handler')
const morgan = require('morgan')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

//logging requests
app.use(morgan('tiny'))

app.get('/',(req,res)=>{
    res.send('Homepage')
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddlware)

const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port,console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start()