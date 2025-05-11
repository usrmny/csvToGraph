const express = require('express')
const expressLayout = require('express-ejs-layouts')
const multer = require('multer')
const upload = multer({dest: 'uploads/'})

const { spawn } = require('child_process'); // needed to allow the python script to run
//{ spawn } instead of cp limits possibilitiies => clarity + no need to prefix
//spawn vs exec => 

const app = express()
const PORT = 5000

app.use(expressLayout)
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use(express.static('public'))

app.get('', (req,res) => {
    res.render('partials/fileInput', {})
})

app.post('/fileInput', upload.any(), async (req, res) => { 
    if(req.files){
        let file = req.files[req.files.length - 1]
        let python = spawn('python', ['script.py', file.path])

        //check what / if python returns anything, then finish this

    }
    else console.log("No Files Were Uploaded.")
})

app.listen(PORT, () => {
    console.log('App listening on port 5000')
})