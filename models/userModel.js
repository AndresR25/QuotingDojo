const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    name: String,
    quote: String
  });

const Quote = mongoose.model('quotes', quoteSchema);

const QuoteModel={
    createModel:function(newQuote){
        return Quote.create(newQuote);
    },
    findQuote:function(){
        return Quote.find();
    }
}


module.exports={QuoteModel};