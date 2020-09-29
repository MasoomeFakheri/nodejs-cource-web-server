const express = require ('express');
var app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partial')
hbs.registerHelper('upperCase', (text)=>{
    return text.toUpperCase();
})

app.get('/', (req,res) => {

    res.render('index.hbs', {
        title: "fakheri",
        fullYear: new Date().getTime()
    })
 
})

app.get('/about', (req,res) => {
    res.render('about.hbs', {
        title: "masi joonam",
        fullYear: new Date().getTime()

    }
    
    )
})


app.listen(3000);