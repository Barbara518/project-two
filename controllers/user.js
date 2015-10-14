var express = require('express'),
    router  = express.Router(),
    User   = require('../models/users.js');

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
			res.redirect(302, '/users/welcome');
		}
	});
});


/////////////////////////////////////////////////////////////////
/////////////////////User LOGGED In/////////////////////////////
///////////////////////////////////////////////////////////////

router.get('/login/:id', function (req, res, next) {
	res.render('user/welcome');
});

module.exports = router