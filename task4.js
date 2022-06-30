const fs = require('fs')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');
app.use(bodyParser.urlencoded({extended: false}))

app.get('/login',(req,res,next) => {
    res.send('<form action="/login" method="POST"><input type="text" name="user"><button type="submit">Login</button></form>')
})

app.post('/login',(req,res,next) => {
    let user = (req.body.user).toString()
    localStorage.setItem("username",user)
    res.redirect('/') 
})

app.get('/',(req,res,next) => {
    const flagsfile = "message.txt"
    let data = fs.readFileSync(flagsfile);
    res.send('Chat Box'+data.toString()+'<br><form action="/" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>')
})

app.post('/',(req,res,next) => {      
    let msg = req.body.message
    msg = '<li>'+localStorage.getItem('username')+' : '+msg+'</li>'
    msg += "\n"; 
    fs.appendFileSync('message.txt',msg)
    res.redirect('/')
})

app.listen(4000)

