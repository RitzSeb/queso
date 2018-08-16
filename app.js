var express = require('express')
var bodyParser = require('body-parser')
var ejs = require('ejs')
var app = express()

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.post('/sms', function (req, res) {
  console.log(req.body.name);
  res.set('dataType', 'json')
  res.send({answer : "Hello "+req.body.name+"! It's very nice to meet you!"})
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})