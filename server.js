// Node Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require("path")

// Open Server
var PORT = process.env.PORT || 9001;

var app = express();
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));
// app.use(express.static('public'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views',path.join(__dirname,'views'))

// app.engine('.hbs', exphbs({
//   extname: '.hbs',
//   defaultLayout: 'main',
//  // partialsDir: path.join(__dirname, 'views/partials'),
//   layoutsDir: path.join(__dirname, 'views/layouts')
// }));
// app.set('view engine', '.hbs');
// app.set('views',path.join(__dirname,'views'))


var router = require('./controllers/burgers_controller.js');
app.use('/', router);



app.listen(PORT, function() 
{
  console.log("App listening on PORT " + PORT);
});