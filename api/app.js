const express = require('express')
const bodyparser = require('body-parser')

const app = express()


app.use(bodyparser.json)

app.get('/', (req , res , next ) => {
    res.send("hello hicham sbiyi3")
})

app.listen(3000)