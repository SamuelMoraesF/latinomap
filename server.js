var primitive = require('express');
var app = primitive();
var http = require('http').Server(app);

//var mongo = require('mongoskin');
//var db = mongo.db("mongodb://localhost:27017/nodetest2", {native_parser:true});

app.engine('jade', require('jade').__express);

app.get('/', function(req, res){
  res.render('index.jade', { title: 'Caravanas Latinoware 2014'});
});

app.use(primitive.static(__dirname + '/public'));
app.set('view engine', 'jade');

http.listen(3000, function(){
  console.log('listening on *:3000');
});
