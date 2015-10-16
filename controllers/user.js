var express = require('express'),
    router  = express.Router(),
    User   = require('../models/users.js');

/////////////////////////////////////////////////////////////////
/////////////////////User LOGGED out////////////////////////////
////////////////////////////////////////////////////////////////

router.get('/logout', function (req, res, next) {
  delete req.session.currentUser;
  res.redirect(301, '/');
});


/////////////////////////////////////////////////////////////////
/////////////////////User LOG In//////////////////////////////
///////////////////////////////////////////////////////////////

router.get('/login', function (req, res, next) {
	res.render('session/login');
});

/////////////////////////////////////////////////////////////////
/////////////////////Create a user//////////////////////////////
///////////////////////////////////////////////////////////////

router.get('/createAccount', function (req, res, next) {
	res.render('user/create-account');
});

router.post('/makeMePeople', function (req, res) {
	console.log("I'll like dancing on tabletops while listening to Kenny G...")
	var newUser = new User(req.body.user);

	newUser.save(function (err, userData){
		console.log(userData);
		console.log('Run Forest Run');
		if (err){
			console.log("oh shoot there was an error:");
			console.log(err);
		}else{
			console.log('saved');
			console.log(userData);
			res.redirect(302, '/user/' + user._id);
		}
	});
});


/////////////////////////////////////////////////////////////////
/////////////////////User LOGGED In/////////////////////////////
////////////////////////////////////////////////////////////////


router.get('/loggedIn', function (req, res, next) {
	res.render('user/loggedIn',{
		loggedInUser: req.session.currentUser
	});
});

router.post('/login', function (req, res, next) {
	var entered = req.body.user;

	User.findOne({username: entered.username}, function (err, user){
		if (user && user.password === entered.password){
			console.log('Wait I think I know you!');
			req.session.currentUser = user.username;

			res.redirect(301, '/users/loggedIn')
		}else{
			console.log('WHO ARE YOU??? Get out!');
			res.redirect(301, '/users/login')
		}
	})
});

router.get('/:id', function (req, res, next) {
	User.findById(req.params.id, function (err, user){
		console.log('I made you now go be free')
	})
});


module.exports = router