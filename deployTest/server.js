const express = require('express')



const app = express()

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.static('.'))
app.use(express.static('views'))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3013, '0.0.0.0')

