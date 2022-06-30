/*Deliverables

1.Why are we using Express JS ? Any reasons?
With NodeJS alone we need to do lot of things manually, we dont want to care about standard things like handling incoming requests or routing. Writing all server side requests in nodejs is complex. we want to focus on our business logic.

2.Install Express Js
Done. This is a framework we can install as a third party package and import it as module to our application. 

3.What are middlewares ?
Express Js is build around a middleware. Middleware means that the incoming requests is automatically funneled through a bunch of functions by ExpressJS, instead of having one request handler we will have possibility of working with multiple request handlers.

4.What is next used for.
To allow the request to travel to next middleware function. It goes from top to bottom. Without next the request cant move to the next middleware

5.What is res.send used for? 
To send response of body any 

6.If i do res.send('<h1> hello to node js </h1>') . What will be the content-type header equal to. 
text/html

7.If I do res.send( { key1: value }) . What will be the content-type header equal to.
application/json

8.What does app.listen(3000) do behind the scenes ?
listens to port 3000

9.Now push the code with the.2 middlewares and app.listen as shown by youtuber. Upload the commit iD too.

 */

const express = require('express')
const app = express()
app.use((req,res,next) => {
    console.log("in the middleware")
    next()
})
app.use((req,res,next) => {
    console.log("in the next middleware")
    res.send({ key1: "value" })
})
app.listen(4000)