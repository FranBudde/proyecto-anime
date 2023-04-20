const express = require ('express');
const path = require('path');
const methodOverride = require('method-override');

const app = express();

const mainRouter = require('./routers/main');
const userRouter = require('./routers/user');



app.use(express.static(path.resolve(__dirname,'../public')));
app.use(express.urlencoded({ extended : false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));



app.use('/', mainRouter);
app.use('/user', userRouter);



const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log('servidor on http://localhost:' + port);
})