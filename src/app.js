const express = require ('express');
const path = require('path');

const mainRouter = require('./routers/main');
const userRouter = require('./routers/user');
const apiMain = require('./routers/api/apiMain');
const apiUser = require('./routers/api/apiUser');
const apiAnime = require('./routers/api/apiAnime');


const app = express();

app.use(express.static(path.join(__dirname,'../public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use('/', mainRouter);
app.use('/user', userRouter);
app.use('/api', apiMain);
app.use('/api', apiUser);
app.use('/api',apiAnime);


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log('servidor on http://localhost:' + port);
})