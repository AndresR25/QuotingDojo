const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const {QuoteModel} = require('./models/userModel');
const port = 8000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/quoting_dojo');
app.set('views'+__dirname+ '/views');

app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('welcome');
  });

app.post('/quotes',function(request,response){
    const name=request.body.name;
    const quote=request.body.quote;
    const newQuote={
        name,
        quote
    };
    QuoteModel
        .createModel(newQuote)
        .then(result=>{
            console.log(result);
        })
        .catch(err=>{
            console.log(err);
        })
    response.redirect('/Quotes');
});


app.get('/Quotes', function(request, response) {
    QuoteModel
        .findQuote()
        .then(data=>{
            response.render('quotes',{quotes:data});
        });
});

app.listen(port);