//CITATION: See Kramschuster, Helmsworth, Works Cited at end of app.js
/* Express for route handling */
var express = require('express');
const session = require('express-session');
var app = express();

/* Load EJS view engine */
app.set('view engine', 'ejs');

/* body-parser used for parsing post requests as JSON */
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//Session secret
app.use(session({
    secret: 'ssshhhhh',
    // create new redis store.
    //store: new redisStore({ host: 'localhost', port: 6379, client: client,ttl : 260}),
    saveUninitialized: false,
    resave: false
}));

/******************
 * Route handling
 ******************/

/* Load in the code which processes the routing  */
var route_index = require("./routes/index.js");

/* tell our app (express) to use the above loaded functions */
app.use(route_index);

console.log('Hello world');


/******************
 * Error pages
 ******************/

app.use(function (req, res) {
    res.status(404);
    res.render('404');
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

/******************
 * Launch communication
 ******************/

const port = 8080;
app.listen(port);
console.log('Server is running at http://localhost:8080/.\nCMD+C to quit.');

module.exports = app;