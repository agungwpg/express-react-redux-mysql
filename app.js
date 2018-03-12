var express = require('express')
var app = express();
const PORT = 4000;



app.get('/', function(req, res) {
    res.send("aesperience here")
});



app.listen(PORT, function() {
    console.log(`listening to porst 4000 ${PORT}`)
});