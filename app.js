const express = require('express')
const expressLayout = require('express-ejs-layouts')

const { spawn } = require('child_process');

const app = express()
const PORT = 5000

app.use(expressLayout)
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use(express.static('public'))

app.get('', (req,res) => {
    res.render('partials/fileInput', {})
})

app.post('/fileInput', async (req, res) => { 
    const python = spawn('python', ['script.py', '???'])
})

app.listen(PORT, () => {
    console.log('App listening on port 5000')
})