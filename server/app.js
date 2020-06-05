
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const posts = require('./routes/api/Posts')
const author = require('./routes/api/Author')
const app = express();
const db = require ('./databaseConn');


//Middleware
app.use(bodyParser.json());
app.use(cors());

app.use('/api/posts', posts)
app.use('/api/author', author)


const port = process.env.PORT || 5000;



//Port
app.listen(port, ()=>{
   console.log(`Server running ${port}`)
})