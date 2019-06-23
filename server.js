const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const router = express.Router()
const morgan = require("morgan")
const path = require("path")
const port = process.env.PORT || 8080
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const product_api = require("./node_routes/product_api")(router)
app.use("/product_api", product_api)


const mongoose = require("mongoose")
const config = require("./config/database")
mongoose.connect(config.uri,{ useNewUrlParser: true } , (err) => {
    if (err) {
        console.log("Not connected")
    }
    else {
        console.log("database connected")
    }
})

app.listen(port, function (err) {
    console.log("port running " + port)
})
