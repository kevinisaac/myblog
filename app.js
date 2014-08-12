var express = require('express');
var app = express();

// Settings
app.set('view engine', 'jade');
app.set('view options', {layout: true});
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/static'));
app.locals.pretty = true;

// Routes
app.get('/', function(request, response) {
    response.render('home');
});

app.get('/post', function(request, response) {
    response.render('post');
});

var port = Number(process.env.PORT || 5000);
app.listen(port);
