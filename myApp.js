let express = require('express');
let bodyParser = require('body-parser')
require('dotenv').config();
let app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use((req,res,next) => {
    console.log("Method: ", req.method, "Path: ", req.path, "IP: ", req.ip);
    next();
})
app.get('/now', (req,res, next) => {
    req.time = new Date().toISOString();
    next();

},(req,res) => {
    res.send({time: req.time});
    
})
app.get('/echo/:id', (req,res) => {
    res.send('Tu écoutes la rêquete de id:' + " " + req.params.id);
})
app.get('/name', (req,res) => {
    res.send({name: req.query.first + " " + req.query.last});
})

app.get('/', function(req, res) {
    // res.send('Tu es sur la page principal de mon application Express');
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/json', (req, res) => {
    if(process.env.MESSAGE_STYLE === "uppercase"){
        res.json({"message": "HELLO JSON"});
    }else{
        res.json({"message": "Hello json"});
    }
    

})
app.use('/public',express.static(__dirname + '/public'));

/// enovoie les données d'un formulaire sur la route /name
app.post('/name', (req,res) => {
    res.send({name: req.body.first + '' + req.body.last})
})


console.log("Hello World");




































 module.exports = app;
