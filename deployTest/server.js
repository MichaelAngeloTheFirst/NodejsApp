const express = require('express')



const app = express()

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.static('.'))
app.use(express.static('views'))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(8080, () => {
    console.log('server listens on PORT: 8080')
})

