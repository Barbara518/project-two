#Project Two 

- Technologies Used:
| HTML
| CSS
| JQuery
| Javascript
| Body-Parser
| EJS
| Express
| Express-Ejs-Layouts
| Express-Session
| Method-Override 
| Mongoose
| Morgan

- Approach Taken:
First I wireframed my application, mapped out my paths, and wrote down the pacakges I was going to need. Then I created my initial folder struction (it didn't have models or controllers). I npm init and installed Body-Parser, EJS, Express, Express-Ejs-Layouts, Express-Session, Method-Override, Mongoose, and Morgan. I went on to build my forms and got them to post to my mongo database.
My file structure was bothering me so I decided to add models and controllers but then my app stop updating my database. With nothing working I had no option but to look over my code to try to find where I was missing a semicolon or something. Turns out I didn't have a slash in some of my routes.In that time of fustration I used bootstrap to give my app some basic styling. Mainly a navigation bar. I play around with mongoose alot using find in different ways and also some aggregation. Once I had some of the post functionality sorted I moved on to user login. Users are in a seperate collection than the post (same database). I made a form that created users the same way the I created post. I used mongoose to look for a username in the database that matched the one entered and once that was matched it would move on to making sure the password would match. If everything matched the username would be stored in the session and offically logged in. Later That session would be what would what would fill in the author field in my posts and in my comments. 
The last thing I worked on was my genre page. I used aggregation to list the genres in the database. I made those clickable links to another page where those post would render on a sepreate page.

User Stories:
- Users should be able to discuss things by topics. 
- Users should be able to create topics.
- Users should be able to comment on those topics.
- Users should be able to see number of comments on each post. 
- Users should be able to vote on topic and see how many votes each topic has. 
- Users should be able to login and log out. 

