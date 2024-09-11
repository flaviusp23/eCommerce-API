require('dotenv').config()
//express
const express = require('express')
const app = express()
app.use(express.json())
require('express-async-errors') // echivalent cu try catch, decat sa pun peste tot mai bine facem asa fiinda folosim async in controllers
const port = process.env.PORT || 5000

//db
const connectDB = require('./db/connect')

//middleware
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddlware = require('./middleware/error-handler')
const morgan = require('morgan')

//logging requests
app.use(morgan('tiny'))

//routes
const authRouter = require('./routes/authRoutes')
app.use('/api/v1/auth',authRouter)
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