var mongoose 	   = require('mongoose'),
	Schema 		   = mongoose.Schema;

var postSchema = new Schema ({
	title: String,
	genre: String,
	content: String,
	votes: Number,
	date: {type: Date, default: Date.now}
});

var Post = mongoose.model('post', postSchema);

module.exports = Post;