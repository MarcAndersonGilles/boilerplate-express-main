let express = require('express');
require('dotenv').config();
let app = express();

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



console.log("Hello World");




































 module.exports = app;
