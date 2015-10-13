var express = require('express'),
    router  = express.Router(),
    users   = require('../models/users.js');


/////////////////////////////////////////////////////////////////
/////////////////////Create a post//////////////////////////////
///////////////////////////////////////////////////////////////

router.get('/create-post', function (req, res, next) {
	res.render('create-post');
	next();
});

router.post('/all-post', function (req, res, next) {
	var post = new Post (req.body.post);

	post.save(function (err, postData){
		if (err){
			console.log("oh shoot there was an error:");
			console.log(err);
		}else{
			res.redirect(302, "all-post");
		}
	});

	next();
});

/////////////////////////////////////////////////////////////////
/////////////////////show post//////////////////////////////////
///////////////////////////////////////////////////////////////

router.get('/all-post', function (req, res, next){
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



router.get('/genre', function (req, res, next) {
	res.render('genre');
	next();
});


module.exports = router