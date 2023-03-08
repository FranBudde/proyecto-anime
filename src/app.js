const express = require ('express');
const path = require('path');
const mainRouter = require('./routers/main');

const app = express();



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', mainRouter);

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log('servidor on http://localhost:' + port);
})