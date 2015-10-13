var express  	   = require('express'),
	PORT	 	   = process.env.PORT || 3001,
	server	 	   = express(),
	MONGOURI 	   = process.env.MONGOLAB_URI || "mongodb://localhost:27017",
	dbname		   = "booknerds",
	mongoose 	   = require('mongoose'),
	Schema 		   = mongoose.Schema,
	ejs            = require('ejs'),
	bodyParser     = require('body-parser'),
    expressLayouts = require('express-ejs-layouts'),
    session 	   = require('express-session'),
    methodOverride = require('method-override'),
    morgan 		   = require('morgan');

/////////////////////////////////////////////////////////////////
/////////////////////Stuff to make packages work////////////////
///////////////////////////////////////////////////////////////

server.use(session({
  secret: "Project2",
  resave: false,
  saveUninitialized: true
}));

server.set('view engine', 'ejs');
server.set('views', './views');

server.use(morgan('dev'));
server.use(express.static('./public'));

server.use(expressLayouts);

server.use(methodOverride('_method'));


server.use(bodyParser.urlencoded({
  extended: true
}));



/////////////////////////////////////////////////////////////////
////////////////////mongo/mongoose/MONGOURI/////////////////////
///////////////////////////////////////////////////////////////

mongoose.connect(MONGOURI + "/" + dbname);

/////////////////////////////////////////////////////////////////
/////////////////////ROUTES/////////////////////////////////////
///////////////////////////////////////////////////////////////

server.get('/', function (req, res, next) {
	res.render('popular');
	next();
});

/////////////////////////////////////////////////////////////////
/////////////////////server are you there?//////////////////////
///////////////////////////////////////////////////////////////

server.listen(PORT, function (){
	console.log('Time to read', PORT)
})