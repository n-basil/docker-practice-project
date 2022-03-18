const express  = require("express");
const morgan = require("morgan")

const port = 8080;

const app = express()
app.use(morgan("tiny"))

app.get("/", (req, res) => {
    res.send("You have reached the homepage!")
})

app.listen(port, () => {
    console.log(`Server is listening at localhost on port: ${port}`)
})
