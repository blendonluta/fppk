const express = require('express')
const app = express()

var path = require('path')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})


app.listen(process.env.PORT || 5000, () => console.log('Server ready'))