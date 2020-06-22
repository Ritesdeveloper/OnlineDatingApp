
const bodyparser = require('body-parser');
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
// Enviornment Variables for port
const port = process.env.PORT || 3000;
// Set Up View Engine

app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.get('/home',(req,res)=>{
    res.render('home',{title:'Online'});
});
app.get('/contact',(req,res)=>{
    res.render('contact',{title:'Online'});
});
app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.listen(port,()=>{
    console.log('Server running',+ port);
})