/*Deliverables

1.Create the /add-product route which shows a form. Once user has filled , console log it after parsing it using bodyparser.
2.What is the body parser used for?
To process data sent through an HTTP request body. It exposes four express middlewares for parsing text, JSON, url-encoded and raw data set through an HTTP request body
3.Now add one more input tag in the add product page so that user can input size of the product.
4.When the user clicks on submit parse both the input tags and show it in console.

*/
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use('/add-product',(req,res,next) => {
    res.send('<html><form action="/product" method=POST><input type="text" name="title"><br><input type="text" name="size"><button type ="submit" value="Add"><br></button> </form></html>')  
})

app.use('/product',(req,res,next) => {
    console.log(req.body)
    res.redirect('/')
})

app.use('/',(req,res,next) => {
    res.send('<h1>Lets Start!</h1>')
})
app.listen(4000)