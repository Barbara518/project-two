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

//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////Stuff to make packages work////////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

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

mongoose.connect(MONGOURI + "/" + dbname);

//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////mongoose stuff/////////////////////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

var postSchema = new Schema ({
	title: String,
	genre: String,
	content: String,
	votes: Number
})

var Post = mongoose.model('post', postSchema)

//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////ROUTES/////////////////////////////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

server.get('/', function (req, res, next) {
	res.render('popular');
	next();
});

server.get('/genre', function (req, res, next) {
	res.render('genre');
	next();
});


server.get('/login', function (req, res, next) {
	res.render('session/login');
	next();
});

server.get('/createAccount', function (req, res, next) {
	res.render('user/create-account');
	next();
});

server.get('/login/:id', function (req, res, next) {
	res.render('welcome');
	next();
});


server.get('/create-post', function (req, res, next) {
	res.render('create-post');
	next();
});

server.get('/all-post', function (req, res, next){
	Post.find({}, function (err, thePosts) {
		if(err){
			console.log(err);
		}else{
			res.render('all-post', {
			posts: thePosts
			});
		}
	});
	next();
});


server.post('/all-post', function (req, res, next) {
	var post = new Post (req.body.post);

	post.save(function (err, postData){
		if (err){
			console.log("oh shoot there was an error:");
			console.log(err);
		}else{
			res.redirect(302, "all-post");
		}
	});

	// res.end();
	next();
});




//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////server are you there?//////////////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

server.listen(PORT, function (){
	console.log('Time to read', PORT)
})