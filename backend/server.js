require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const countryRoutes = require('./routes/country')
const userRoutes = require('./routes/user')
const searchRoutes = require('./routes/search')


const app = express()

app.use(express.json())



app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


app.use('/api/user', userRoutes)
app.use('/api/country', countryRoutes)
app.use('/api/search', searchRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })