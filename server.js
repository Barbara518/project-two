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
//////////////////////aka middleware///////////////////////////

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

var postsController = require('./controllers/post.js');
server.use('/posts', postsController);

var usersController = require('./controllers/user.js');
server.use('/users', usersController);


/////////////////////////////////////////////////////////////////
////////////////////mongo/mongoose/MONGOURI/////////////////////
///////////////////////////////////////////////////////////////

mongoose.connect(MONGOURI + "/" + dbname);
mongoose.set('debug', false);


/////////////////////////////////////////////////////////////////
/////////////////////LOG IT/////////////////////////////////////
///////////////////////////////////////////////////////////////

// server.use(function  (req, res, next) {
// 	console.log("------------Req----------");
// 	console.log("Req.body\n", req.body);
// 	console.log("Req.params\n", req.params);
// 	console.log("Req.session\n", req.session);
// 	console.log("-----------Donezo---------");
// 	next();

// })
/////////////////////////////////////////////////////////////////
/////////////////////ROUTES/////////////////////////////////////
///////////////////////////////////////////////////////////////


server.get('/', function (req, res, next) {
	res.render('user/welcome');
});

///you done goofed

server.use(function (req,res,next) {
	res.send("YOU DONE GOOFED. I'M CALLING THE CYBER POLICE!")
	res.end();
})

/////////////////////////////////////////////////////////////////
/////////////////////server are you there?//////////////////////
///////////////////////////////////////////////////////////////

server.listen(PORT, function (){
	console.log('Time to read', PORT)
})