var express = require('express'),
    router  = express.Router(),
    Post   = require('../models/posts.js');


/////////////////////////////////////////////////////////////////
/////////////////////Create a post//////////////////////////////
///////////////////////////////////////////////////////////////

router.get('/create', function (req, res, next) {
	res.render('posts/create');
});

router.post('/createTheDamnPostIdiot', function (req, res, next) {
	console.log("i'm in the fucking function, fuck off!")
	var newPost = new Post(req.body.post);

	newPost.save(function (err, postData){
		console.log(postData);
		console.log('this shiz is running');
		if (err){
			console.log("oh shoot there was an error:");
			console.log(err);
		}else{
			console.log('saved');
			console.log(postData);
			res.redirect(302, '/posts/all');
		}
	});
});

/////////////////////////////////////////////////////////////////
/////////////////////show post//////////////////////////////////
///////////////////////////////////////////////////////////////

router.get('/all', function (req, res, next){
	Post.find({}, function (err, thePosts) {
		if(err){
			console.log(err);
			res.render('posts/all');
		}else{
			res.render('posts/all', {
			post: thePosts
			});
		}
	});
});


router.get('/', function (req, res, next) {
		Post.find({$sort: {votes: -1}, limit: 12}, function (err, thePosts) {
		if(err){
			console.log(err);
			res.render('posts/popular');
		}else{
			res.render('posts/popular', {
			post: thePosts
			});
		}
	});
});

router.get('/popular', function (req, res, next) {
		Post.find({$sort: {votes: -1}, limit: 12}, function (err, thePosts) {
		if(err){
			console.log(err);
			res.render('posts/popular');
		}else{
			res.render('posts/popular', {
			post: thePosts
			});
		}
	});
});

router.get('/genre', function (req, res, next) {
	res.render('posts/genre');
});


module.exports = router