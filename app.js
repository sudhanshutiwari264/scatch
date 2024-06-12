const express = require('express'); 
const app = express();
const path = require('path')
const cookieParser = require('cookie-parser')

const ownersRouter = require('./routes/ownersRouter')
const usersRouter = require('./routes/usersRouter')
const productsRouter = require('./routes/productsRouter')

const db = require('./config/mongoose-connection');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

app.use('/owners', ownersRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);


app.set('view engine','ejs');

app.get('/',(req, res)=>{
  res.send('hi');
});

app.listen(3000)