const express = require('express');
const http = require('http');
const path = require('path');

///const port = 3000

//instantiating express.js object
let app = express();

//express.js settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug');

//Middleware
app.all('*', (req,res) => {
   res.render(
     'index', {title:'nodejs', msg:'Node.js is up and running!!'}
   )
   ///res.render('index', { title: 'Hey', message: 'Hello there!' })
})

//Routes
http.createServer(app).listen(app.get('port'), ()=> 
  console.log(`Express.js is listerning on on port ${app.get('port')}`)
  
)