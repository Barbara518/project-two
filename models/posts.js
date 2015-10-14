var mongoose 	   = require('mongoose'),
	Schema 		   = mongoose.Schema;

var postSchema = new Schema ({
	title: String,
	author: String,
	genre: String,
	content: String,
	votes: {type: Number, default: 0},
	comments: [],
	date: {type: Date, default: Date.now}
});

var Post = mongoose.model('post', postSchema);

module.exports = Post;