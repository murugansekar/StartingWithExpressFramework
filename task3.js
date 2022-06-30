/*Deliverables
Use routers to clean up the code.
If you are facing issues with file paths ask the instructor.
Add a page not found for cases where the route doesn't exist  return a status code 404.
Now make /admin routes as a separate filter as per the youtuber in video 68.
Now make a /shop route for all the routes that call the shop.js file.
*/
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin',adminRoutes)
app.use('/shop',shopRoutes)

app.use((req,res,next) => {
    res.status(404).send('<h1>Page not found</h1>')
})
app.listen(4000)